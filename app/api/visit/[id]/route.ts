import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

// 개별 방문 기록 삭제
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { error } = await supabaseAdmin
      .from('portfolio_visits')
      .delete()
      .eq('id', Number(id));

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('삭제 실패:', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
