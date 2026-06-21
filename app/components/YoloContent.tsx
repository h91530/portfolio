'use client';

export default function YoloContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <img src="/ai.svg" alt="YOLO AI" style={{ border: '2px solid #333', borderRadius: '8px' }} />
        </div>
        <h1>YOLO AI 객체 인식</h1>
        <p className="about-tagline">YOLO 딥러닝 모델로 이미지 내 객체를 탐지하고 시각화·통계를 제공하는 풀스택 AI 웹 · 개인 프로젝트</p>
        <div className="about-quick-links">
          <a href="https://ai.yangtae.site" target="_blank" rel="noreferrer">
            사이트 방문
          </a>
        </div>
      </section>

      <section className="telemon-images">
        <img src="/ai1.png" alt="YOLO AI" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }} />
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>YOLO 딥러닝 모델</strong>을 활용해 이미지 내 객체를 탐지하고, 결과를 시각화 및 통계로 제공하는 풀스택 AI 웹 서비스입니다.
        </p>
        <p style={{ marginTop: '12px' }}>
          <strong>프론트엔드는 Next.js, AI 처리는 FastAPI로 분리</strong>해 구성했습니다. 사용자가 이미지를 업로드하면 AI 서버에서 YOLO 추론을 수행하고 결과 이미지를 반환합니다. 기획부터 개발·배포까지 직접 진행한 개인 프로젝트입니다.
        </p>
      </section>

      <section className="about-section" id="architecture">
        <h2>아키텍처 설계</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                <strong>Vercel 서버리스 환경에서는 모델을 상시 유지할 수 없기 때문에</strong>, AI 서버를 <strong>AWS Lightsail에 분리 배포</strong>했습니다.
              </p>
              <ul style={{ margin: '4px 0 14px', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.9', color: '#333' }}>
                <li>YOLO 모델은 <strong>서버 시작 시 1회 로드</strong>해 메모리에 유지</li>
                <li><strong>pm2</strong>로 프로세스를 상시 유지(죽어도 자동 재시작)</li>
              </ul>
              <p>
                또한 <strong>Next.js를 API Proxy로 사용</strong>하여 브라우저가 백엔드 서버를 직접 호출하지 않도록 구성했습니다. 이를 통해 <strong>CORS 문제를 회피</strong>하고, 동시에 백엔드 API 엔드포인트를 외부에 노출하지 않도록 구조를 분리했습니다.
              </p>
              <div className="project-tags">
                <span>프론트/AI 서버 분리</span>
                <span>모델 1회 로드</span>
                <span>pm2 상시 구동</span>
                <span>API Proxy</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="features">
        <h2>핵심 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>객체 탐지 &amp; 시각화</h3>
              <p>
                FastAPI 서버에 <strong>Ultralytics YOLO 모델을 미리 로드</strong>해두고, 업로드된 이미지를 입력으로 객체 탐지를 수행합니다.
                <strong>OpenCV로 객체를 감싸는 박스와 신뢰도(정확도) 점수를 이미지에 표시</strong>하고, 종류별 개수는 차트로 제공합니다.
              </p>
              <div className="project-tags">
                <span>YOLO 추론</span>
                <span>OpenCV 시각화</span>
                <span>종류별 통계</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
              <img src="/ai2.png" alt="객체 탐지" className="project-image" />
              <img src="/ai4.png" alt="통계 시각화" className="project-image" />
            </div>
          </article>
        </div>
      </section>

      <section className="about-section">
        <h2>기술 스택</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-chips">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend &amp; AI</h3>
            <div className="skill-chips">
              <span>Python</span>
              <span>FastAPI</span>
              <span>YOLO(Ultralytics)</span>
              <span>OpenCV</span>
              <span>Pillow</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Infra</h3>
            <div className="skill-chips">
              <span>Vercel</span>
              <span>AWS Lightsail</span>
              <span>nginx</span>
              <span>pm2</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
