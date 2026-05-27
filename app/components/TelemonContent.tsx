'use client';

export default function TelemonContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar telemon-avatar">
          <img src="/telemon.svg" alt="Telemon" />
        </div>
        <h1>TELEMON</h1>
        <p className="about-tagline">실제 운영 중인 PHP 기반 구인구직 플랫폼</p>
        <div className="about-quick-links">
          <a href="https://telemon.co.kr/" target="_blank" rel="noreferrer">
            PC버전
          </a>
          <a href="https://telemon.co.kr/mo" target="_blank" rel="noreferrer">
            모바일버전
          </a>
        </div>
      </section>

      <section className="telemon-images">
        <div className="telemon-image-grid">
          <img src="/telemon1.png" alt="Telemon 1" />
          <img src="/telemon2.png" alt="Telemon 2" />
          <img src="/telemon3.png" alt="Telemon 3" />
        </div>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>TELEMON(텔레몬)</strong>은 <strong>구직자와 기업을 연결하는 종합 구인구직 플랫폼</strong>입니다.
          PHP 기반으로 구축되었으며, 지역·업종·직무 등 다양한 조건으로 채용공고를 검색할 수 있고,
          온라인/전화 지원 또는 콜백 신청을 통해 기업에 지원할 수 있습니다.
        </p>
        <p>
          플랫폼은 PC 웹과 Android/iOS 모바일 앱에서 모두 이용 가능하며,
          <strong>PASS 본인인증, SMS 인증, 이메일 발송</strong> 등 안전한 사용자 검증 시스템을 갖추고 있습니다.
        </p>
        <p>
          본인은 본 프로젝트에 <strong>풀스택</strong>으로 참여하여 PC 버전과 모바일 버전을 각각 구축하고,
          퍼블리싱, 프론트엔드, 백엔드까지 전 영역을 담당했습니다.
        </p>
      </section>

      <section className="about-section">
        <h2>담당 역할</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>퍼블리싱</h3>
            <div className="skill-chips">
              <span>HTML5 마크업</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>크로스 브라우징</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>프론트엔드</h3>
            <div className="skill-chips">
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>Ajax</span>
              <span>UI/UX 인터랙션</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>백엔드</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>MySQL</span>
              <span>세션/인증</span>
              <span>REST API</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="features">
        <h2>주요 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>PASS & 소셜 로그인 연동</h3>
              <p>
                통신사 본인인증 서비스 <strong>PASS</strong>와 소셜 로그인을 팀원과 함께 연동했습니다.
                실명·연령·휴대폰 인증을 한번에 처리해 간편하고 안전한 로그인 환경을 구축했으며,
                회원가입 전환율을 개선했습니다.
              </p>
              <div className="project-tags">
                <span>PASS API</span>
                <span>소셜 로그인</span>
                <span>본인인증</span>
              </div>
            </div>
            <img src="/telemon4.png" alt="PASS & 소셜 로그인 연동" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>문자 인증 및 발송 시스템</h3>
              <p>
                <strong>비회원 사용자가 채용공고에 신청할 때</strong> 문자 인증을 통해 휴대폰 번호를 검증합니다.
                인증 후 담당자에게 구직자의 신청 정보를 자동으로 문자 발송하는 시스템까지 구축하여
                기업의 신청 현황 관리를 실시간으로 지원합니다.
              </p>
              <div className="project-tags">
                <span>SMS 인증</span>
                <span>자동 발송</span>
                <span>실시간 알림</span>
              </div>
            </div>
            <img src="/telemon5.png" alt="문자 인증 및 발송 시스템" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>이메일 상담 답변 시스템</h3>
              <p>
                사용자의 <strong>상담 신청</strong>이 들어오면 관리자가 <strong>스마트에디터</strong>를 통해
                답변을 작성하고 발송 버튼을 누르면 실제 사용자의 이메일로 답변이 전송되는 시스템을 구현했습니다.
                고객 만족도를 높이고 효율적인 상담 관리를 가능하게 합니다.
              </p>
              <div className="project-tags">
                <span>스마트에디터</span>
                <span>이메일 자동 발송</span>
                <span>상담 관리</span>
              </div>
            </div>
            <div className="project-images-group">
              <img src="/telemon6.png" alt="이메일 상담 답변 시스템 1" className="project-image" />
              <img src="/telemon7.png" alt="이메일 상담 답변 시스템 2" className="project-image" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>스마트한 채용공고 검색</h3>
              <p>
                지역, 업종, 직무, 경력 등 다양한 조건으로 채용공고를 필터링할 수 있는
                고급 검색 시스템을 구현했습니다. 인기공고, HOT 리워드, 플래티넘 등급 등
                다채로운 공고 타입을 제공합니다.
              </p>
              <div className="project-tags">
                <span>다중 필터링</span>
                <span>검색 최적화</span>
                <span>정렬 기능</span>
              </div>
            </div>
            <img src="/telemon2.png" alt="스마트한 채용공고 검색" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>유료 공고 광고 시스템</h3>
              <p>
                기업 사용자가 공고의 <strong>유료 광고 서비스</strong>를 결제하면,
                해당 공고들이 플랫폼의 주요 노출 영역(HOT, 추천 공고 등)에 우선 표시됩니다.
                이를 통해 기업의 채용 성공률을 높이고 플랫폼의 수익화를 동시에 달성했습니다.
              </p>
              <div className="project-tags">
                <span>결제 시스템</span>
                <span>광고 노출</span>
                <span>우선순위</span>
              </div>
            </div>
            <img src="/telemon8.png" alt="유료 공고 광고 시스템" className="project-image" />
          </article>

          <article className="project-card admin-page-card">
            <div className="admin-page-content">
              <h3>관리자 페이지</h3>
              <p>
                전체 플랫폼 운영을 위한 관리자 페이지를 직접 구축했습니다.
                회원 관리, 공고 승인, 결제 현황, 상담 관리 등을 통합적으로 관리할 수 있으며,
                실시간 통계 대시보드로 플랫폼의 주요 지표를 한눈에 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>회원 관리</span>
                <span>공고 승인</span>
                <span>통계 대시보드</span>
              </div>
            </div>
            <div className="admin-images-grid">
              <img src="/telemon9.png" alt="관리자 페이지 1" />
              <img src="/telemon10.png" alt="관리자 페이지 2" />
              <img src="/telemon11.png" alt="관리자 페이지 3" />
              <img src="/telemon12.png" alt="관리자 페이지 4" />
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
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>jQuery</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>MySQL</span>
              <span>Apache</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>External API</h3>
            <div className="skill-chips">
              <span>PASS 본인인증</span>
              <span>SMS 인증</span>
              <span>이메일 발송</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ textAlign: 'center' }}>
        <div className="about-quick-links" style={{ justifyContent: 'center' }}>
          <a href="https://telemon.co.kr/" target="_blank" rel="noreferrer">
            PC버전
          </a>
          <a href="https://telemon.co.kr/mo" target="_blank" rel="noreferrer">
            모바일버전
          </a>
        </div>
      </section>
    </div>
  );
}
