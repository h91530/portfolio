'use client';

export default function DocumentSystemContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <span style={{ fontSize: '96px' }}>📋</span>
        </div>
        <h1>Document Management System</h1>
        <p className="about-tagline">역할 기반 문서 관리 및 워크플로우 시스템</p>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>Document Management System</strong>은 기업의 <strong>문서 제출, 검수, 승인 프로세스를 자동화하는 B2B 애플리케이션</strong>입니다.
          영업 조직의 문서 작성부터 최종 승인까지 모든 단계를 디지털화하고,
          역할 기반 접근 제어(RBAC)를 통해 각 사용자의 권한을 정확히 관리합니다.
        </p>
        <p>
          본 시스템은 다층적인 문서 워크플로우를 지원하여 수동 검수 작업을 최소화하고,
          실시간 상태 추적과 상세한 히스토리 기록을 통해 문서 관리의 투명성과 효율성을 극대화합니다.
          또한 역할별 맞춤형 대시보드를 통해 각 사용자가 자신의 업무에 필요한 정보만 효율적으로 관리할 수 있습니다.
        </p>
        <p>
          <strong>주요 사용자:</strong> 영업자, 매니저, 검수자, 관리자
          <br />
          <strong>핵심 목표:</strong> 문서 워크플로우 자동화, 권한 관리, 투명성 강화, 업무 효율성 증대
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>문서 관리</h3>
            <div className="skill-chips">
              <span>문서 제출 및 편집</span>
              <span>다단계 검수 프로세스</span>
              <span>파일 업로드/다운로드</span>
              <span>ZIP 일괄 다운로드</span>
              <span>상세 히스토리 추적</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>권한 및 접근 제어</h3>
            <div className="skill-chips">
              <span>역할 기반 접근 제어 (RBAC)</span>
              <span>단계별 권한 관리</span>
              <span>담당자 할당 및 검수</span>
              <span>문서 소유권 관리</span>
              <span>미들웨어 토큰 검증</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>사용자 및 조직 관리</h3>
            <div className="skill-chips">
              <span>사용자 생성 및 관리</span>
              <span>직책 설정</span>
              <span>회사/소속 관리</span>
              <span>역할 기반 필터링</span>
              <span>사용자 활동 추적</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>워크플로우 및 상태 관리</h3>
            <div className="skill-chips">
              <span>3단계 문서 워크플로우</span>
              <span>실시간 상태 추적</span>
              <span>단계별 편집 권한 제어</span>
              <span>거부 및 재제출 기능</span>
              <span>진행 상황 대시보드</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>문서 워크플로우</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>1단계: 영업자 작성</h3>
              <p>
                영업자가 문서를 생성하고 필요한 정보를 입력합니다.
                매니저도 모든 문서를 편집할 수 있으며, 일반 영업사원은 자신이 작성한 문서만 편집 가능합니다.
                작성 완료 후 다음 단계로 진행할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>문서 작성</span>
                <span>정보 입력</span>
                <span>임시 저장</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>2단계: 검수자 검수</h3>
              <p>
                담당 검수자가 할당된 문서를 검토합니다.
                문서의 정확성과 완성도를 확인하며, 필요시 수정을 요청합니다.
                검수를 통과한 문서만 다음 단계로 진행될 수 있습니다.
              </p>
              <div className="project-tags">
                <span>문서 검수</span>
                <span>수정 요청</span>
                <span>피드백</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>3단계: 최종 승인</h3>
              <p>
                관리자(승인권자)가 검수를 완료한 문서를 최종 승인합니다.
                승인이 완료되면 문서는 최종 상태로 전환되며,
                이후 수정이 불가능하고 조회만 가능합니다.
              </p>
              <div className="project-tags">
                <span>최종 승인</span>
                <span>상태 확정</span>
                <span>기록 보관</span>
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
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>TypeScript</span>
              <span>CSS Modules</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend & Database</h3>
            <div className="skill-chips">
              <span>Next.js API Routes</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>Authentication</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Libraries & Tools</h3>
            <div className="skill-chips">
              <span>Chart.js</span>
              <span>Swiper</span>
              <span>JSZip</span>
              <span>react-icons</span>
              <span>Playwright</span>
              <span>ESLint</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
