import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type WeatherPayload = {
  source: string;
  temperature: number;
  code: number;
  humidity: number;
  windSpeed: number;
  apparentTemp: number;
};

function withTimeout(ms: number): { signal: AbortSignal; cancel: () => void } {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, cancel: () => clearTimeout(t) };
}

async function fromOpenMeteo(): Promise<WeatherPayload> {
  const to = withTimeout(4000);
  try {
    const r = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m,apparent_temperature',
      { cache: 'no-store', signal: to.signal }
    );
    if (!r.ok) throw new Error(`open-meteo ${r.status}`);
    const d = await r.json();
    return {
      source: 'open-meteo',
      temperature: Math.round(d.current.temperature_2m),
      code: d.current.weather_code,
      humidity: d.current.relative_humidity_2m,
      windSpeed: Math.round(d.current.wind_speed_10m),
      apparentTemp: Math.round(d.current.apparent_temperature),
    };
  } finally {
    to.cancel();
  }
}

function wwoToWmo(wwo: number): number {
  if (wwo === 113) return 0;
  if (wwo === 116) return 2;
  if (wwo === 119 || wwo === 122) return 3;
  if ([143, 248, 260].includes(wwo)) return 45;
  if ([176, 263, 266, 281, 284].includes(wwo)) return 51;
  if ([293, 296, 299, 302, 353, 356].includes(wwo)) return 61;
  if ([305, 308, 359].includes(wwo)) return 65;
  if ([200, 386, 389, 392, 395].includes(wwo)) return 95;
  if ([179, 182, 185, 227, 230, 311, 314, 317, 320, 323, 326, 329, 332, 335, 338, 350, 362, 365, 368, 371, 374, 377].includes(wwo)) return 71;
  return 0;
}

async function fromWttr(): Promise<WeatherPayload> {
  const to = withTimeout(4000);
  try {
    const r = await fetch('https://wttr.in/Seoul?format=j1', {
      cache: 'no-store',
      signal: to.signal,
    });
    if (!r.ok) throw new Error(`wttr ${r.status}`);
    const d = await r.json();
    const c = d.current_condition[0];
    return {
      source: 'wttr',
      temperature: parseInt(c.temp_C, 10),
      code: wwoToWmo(parseInt(c.weatherCode, 10)),
      humidity: parseInt(c.humidity, 10),
      windSpeed: parseInt(c.windspeedKmph, 10),
      apparentTemp: parseInt(c.FeelsLikeC, 10),
    };
  } finally {
    to.cancel();
  }
}

function metNoSymbolToWmo(symbol: string): number {
  const s = symbol.replace(/_(day|night|polartwilight)$/, '');
  if (s.includes('clearsky') || s.includes('fair')) return 0;
  if (s.includes('partlycloudy')) return 2;
  if (s === 'cloudy') return 3;
  if (s.includes('fog')) return 45;
  if (s.includes('thunder')) return 95;
  if (s.includes('snow') || s.includes('sleet')) return 71;
  if (s.includes('drizzle') || s.includes('lightrain')) return 51;
  if (s.includes('rain')) return 61;
  return 0;
}

async function fromMetNo(): Promise<WeatherPayload> {
  const to = withTimeout(6000);
  try {
    const r = await fetch(
      'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=37.5665&lon=126.9780',
      {
        cache: 'no-store',
        signal: to.signal,
        headers: { 'User-Agent': 'YangTaeHyun-Portfolio/1.0 (h915300@gmail.com)' },
      }
    );
    if (!r.ok) throw new Error(`metno ${r.status}`);
    const d = await r.json();
    const ts = d.properties.timeseries[0];
    const inst = ts.data.instant.details;
    const symbol =
      ts.data.next_1_hours?.summary?.symbol_code ||
      ts.data.next_6_hours?.summary?.symbol_code ||
      'clearsky';
    return {
      source: 'met.no',
      temperature: Math.round(inst.air_temperature),
      code: metNoSymbolToWmo(symbol),
      humidity: Math.round(inst.relative_humidity ?? 0),
      windSpeed: Math.round((inst.wind_speed ?? 0) * 3.6),
      apparentTemp: Math.round(inst.air_temperature),
    };
  } finally {
    to.cancel();
  }
}

export async function GET() {
  const sources = [fromWttr, fromMetNo, fromOpenMeteo];

  try {
    const data = await Promise.any(sources.map((fn) => fn()));
    return NextResponse.json(data);
  } catch (e) {
    const errors =
      e instanceof AggregateError
        ? e.errors.map((err) => (err instanceof Error ? err.message : String(err)))
        : [String(e)];
    console.error('[weather] all sources failed:', errors);
    return NextResponse.json({ error: 'all sources failed', errors }, { status: 502 });
  }
}
