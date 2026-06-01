'use client';

export default function YoloContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <img src="/ai.svg" alt="YOLO AI" style={{ border: '2px solid #333', borderRadius: '8px' }} />
        </div>
        <h1>YOLO AI 객체 인식</h1>
        <p className="about-tagline">이미지 객체 인식 웹 서비스 — YOLO 딥러닝 모델로 사진 속 객체를 감지하고, 종류별 통계를 제공하는 풀스택 웹</p>
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
          <strong>YOLO 객체 인식 시스템</strong>은 YOLO 딥러닝 모델을 활용해 사진 속 객체를 감지하고 종류별 통계를 제공하는 풀스택 웹입니다.
          Next.js 프레임워크로 프론트엔드와 백엔드를 모두 구축했으며, Python FastAPI 기반의 AI 서버를 별도로 운영합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          PyTorch 의존성 문제로 Vercel 단독 배포가 불가능해 <strong>프론트엔드(Vercel)와 AI 서버(AWS Lightsail)를 분리</strong>했습니다.
          Next.js API Route를 프록시로 활용하여 CORS를 처리하고 백엔드 주소를 은닉합니다.
          <strong>FastAPI 상시 서버에서 모델을 메모리에 유지</strong>하여 응답 성능을 최적화했습니다.
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능 및 프로세스</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>사진 업로드 및 객체 감지</h3>
              <p>
                사용자가 사진을 업로드하면 YOLO 모델이 사진 속 객체를 감지합니다.
                감지된 객체마다 바운딩 박스를 표시하고 신뢰도(Confidence) 점수를 함께 표시합니다.
                실시간으로 처리되어 사용자는 즉시 결과를 확인할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>이미지 처리</span>
                <span>실시간 감지</span>
              </div>
            </div>
            <img src="/ai2.png" alt="사진 업로드 및 객체 감지" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>통계 분석 및 시각화</h3>
              <p>
                감지된 객체를 종류별로 분류하고 각 종류별 개수를 통계화합니다.
                차트로 시각화하여 사용자가 한눈에 객체 분포를 파악할 수 있습니다.
                여러 장의 사진을 누적하여 통계 데이터를 추적할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>데이터 분석</span>
                <span>시각화</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
              <img src="/ai4.png" alt="통계 분석 및 시각화 1" className="project-image" />
              <img src="/ai3.png" alt="통계 분석 및 시각화 2" className="project-image" style={{ maxHeight: '400px', objectFit: 'contain' }} />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>분리된 아키텍처로 안정성 확보</h3>
              <p>
                PyTorch 의존성 문제로 Vercel 단독 배포가 불가능해 프론트엔드(Vercel)와 AI 서버(AWS Lightsail)를 분리했습니다.
                Next.js API Route를 프록시로 활용하여 CORS를 처리하고 백엔드 주소를 은닉합니다.
                FastAPI 상시 서버에서 모델을 메모리에 유지하여 응답 시간을 7초에서 1초로 단축했습니다.
              </p>
              <div className="project-tags">
                <span>마이크로서비스</span>
                <span>성능 최적화</span>
              </div>
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
              <span>Next.js(App Router)</span>
              <span>TypeScript</span>
              <span>React</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend & AI</h3>
            <div className="skill-chips">
              <span>Python</span>
              <span>FastAPI</span>
              <span>YOLO(Ultralytics)</span>
              <span>OpenCV</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Infrastructure</h3>
            <div className="skill-chips">
              <span>Vercel(프론트)</span>
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
