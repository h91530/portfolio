'use client';

import { useEffect, useRef } from 'react';

export default function AboutContent() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const scrollRoot = rootRef.current.closest('.chrome-content') as HTMLElement | null;
    if (scrollRoot) scrollRoot.scrollTop = 0;
    const targets = Array.from(rootRef.current.querySelectorAll<HTMLElement>('.reveal'));

    const checkVisibility = () => {
      const rootRect = scrollRoot
        ? scrollRoot.getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight };
      const viewportH = rootRect.bottom - rootRect.top;
      const triggerLine = rootRect.top + viewportH * 1.0;
      targets.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        const rect = el.getBoundingClientRect();
        const trigger = rect.top < triggerLine && rect.bottom > rootRect.top;
        if (trigger) el.classList.add('is-visible');
      });
    };

    checkVisibility();

    const onScroll = () => requestAnimationFrame(checkVisibility);
    scrollRoot?.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      scrollRoot?.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="about-page" ref={rootRef}>
      <section className="about-hero reveal">
        <div className="about-avatar">
          <img src="/profile.svg" alt="profile" />
        </div>
        <h1>안녕하세요 <span className="highlight">사용자 경험을 만드는</span><br /><span className="highlight">웹 개발자</span> 양태현입니다.</h1>
      </section>

      <section className="about-section">
        <h2 className="reveal">About Me</h2>
        <p className="reveal delay-1">
          사용자가 직접 만지는 화면을 실제 서비스로 연결하는 프론트엔드 개발자 양태현입니다.<br />
          저는 화면을 보기 좋게 만드는 것보다 사용자가 막히지 않고 자연스럽게 사용할 수 있는 흐름을 만드는 데 집중합니다.<br />
          기능을 구현할 때도 단순히 동작 여부보다 사용자가 어떤 순서로 행동하고 어디에서 불편함을 느낄지 먼저 고민하며 개발했습니다.
        </p>
        <p className="reveal delay-2">
          지금까지 실제 운영 중인 서비스를 직접 개발했고, 프론트엔드뿐 아니라 백엔드와 API까지 함께 다루며 데이터 흐름과 협업 구조를 이해해왔습니다.<br />
          또한 새로운 기술이나 환경이 필요할 때는 구조를 먼저 파악하고 빠르게 적용하며 필요한 결과를 만들어왔습니다.
        </p>
        <p className="reveal delay-3">
          앞으로도 사용자 경험과 서비스 완성도를 함께 고민하며 팀에 기여하는 프론트엔드 개발자가 되겠습니다.
        </p>
      </section>

      <section className="about-section" id="skills">
        <h2 className="reveal">Skills</h2>
        <div className="about-skills">
          <div className="skill-group reveal delay-1">
            <h3>Frontend</h3>
            <div className="skill-chips">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>
          <div className="skill-group reveal delay-2">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>Node.js</span>
              <span>Next.js API Routes</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skill-group reveal delay-3">
            <h3>Database</h3>
            <div className="skill-chips">
              <span>MySQL</span>
              <span>Supabase</span>
            </div>
          </div>
          <div className="skill-group reveal delay-4">
            <h3>DevOps / Infra</h3>
            <div className="skill-chips">
              <span>AWS Lightsail</span>
              <span>Apache</span>
              <span>NGINX</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="experience">
        <h2 className="reveal">Experience</h2>
        <div className="about-experience">
          <article className="exp-item reveal delay-1">
            <div className="exp-period">2026.02 — 2026.05</div>
            <div className="exp-body">
              <h3>2fitreport</h3>
              <div className="exp-role">퍼블리셔 · 풀스택 프리랜서</div>
              <p className="exp-desc">
                프리랜서로 참여해 퍼블리싱부터 프론트엔드·백엔드 전 영역을
                단독으로 담당하며 서비스의 기획·구현·배포까지 책임졌습니다.
              </p>
            </div>
          </article>

          <article className="exp-item reveal delay-2">
            <div className="exp-period">2024.03 — 2026.02</div>
            <div className="exp-body">
              <h3>쇼엠</h3>
              <div className="exp-role">퍼블리셔 · 프론트엔드 (일부 프로젝트 백엔드 겸업)</div>
              <p className="exp-desc">
                다양한 웹 서비스의 마크업·UI 개발을 담당했으며,
                일부 프로젝트에서는 백엔드 영역까지 함께 맡아 풀스택으로 참여했습니다.
              </p>
            </div>
          </article>

          <article className="exp-item reveal delay-3">
            <div className="exp-period">2021.05 — 2023.05</div>
            <div className="exp-body">
              <h3>프랜차이즈 음식점 운영</h3>
              <div className="exp-role">1인 자영업</div>
              <p className="exp-desc">
                매장 운영부터 매출 관리, 고객 응대까지 사업 전반을 혼자 책임지며
                문제 해결 능력과 책임감을 키웠습니다.
              </p>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
}
