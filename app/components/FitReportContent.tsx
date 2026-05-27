'use client';

export default function FitReportContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <img src="/2fitreport.png" alt="2FitReport" />
        </div>
        <h1>2FitReport</h1>
        <p className="about-tagline">피트니스 데이터 분석 및 보고서 플랫폼</p>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>2FitReport</strong>는 조직 내 <strong>문서 관리, 협업, 실적 통계를 통합한 엔터프라이즈 업무 시스템</strong>입니다.
          판매 조직의 문서 제출부터 승인, 검토까지의 전체 워크플로우를 디지털화하고,
          개인별·팀별 실적을 실시간으로 추적하여 조직의 업무 효율성과 투명성을 극대화합니다.
        </p>
        <p>
          본 시스템은 문서 중심의 업무 프로세스를 자동화하여 수동 작업을 최소화하고,
          다층적인 승인 단계와 협업 기능을 통해 조직 내 커뮤니케이션을 강화합니다.
          또한 상세한 활동 로그와 변경 이력을 기록하여 투명한 감시와 규정 준수(Compliance)를 지원합니다.
        </p>
        <p>
          <strong>주요 사용자:</strong> 직원(문서 제출자), 담당자(검토자), 관리자(승인권자), 시스템 관리자
          <br />
          <strong>핵심 목표:</strong> 업무 자동화, 협업 효율성 증대, 데이터 기반 의사결정 지원, 감시 및 추적성 강화
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>문서 관리</h3>
            <div className="skill-chips">
              <span>문서 업로드/다운로드</span>
              <span>PDF 뷰어</span>
              <span>문서 검색</span>
              <span>일괄 삭제</span>
              <span>ZIP 다운로드</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>협업 기능</h3>
            <div className="skill-chips">
              <span>메모 및 댓글</span>
              <span>승인 프로세스</span>
              <span>진행 상황 추적</span>
              <span>담당자 배정</span>
              <span>수정 요청</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>관리 기능</h3>
            <div className="skill-chips">
              <span>사용자 관리</span>
              <span>소속 관리</span>
              <span>권한 설정</span>
              <span>통계 대시보드</span>
              <span>실적 분석</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>알림 및 로그</h3>
            <div className="skill-chips">
              <span>실시간 알림</span>
              <span>활동 로그</span>
              <span>변경 이력</span>
              <span>히스토리 추적</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>주요 시스템 및 프로세스</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>문서 제출 및 승인 프로세스</h3>
              <p>
                직원이 문서를 시스템에 제출하면, 담당자(검토자)가 문서의 정확성을 검증합니다.
                검토가 완료되면 관리자(승인권자)가 최종 승인을 진행합니다.
                모든 단계에서 상세한 코멘트와 수정 요청이 가능하며, 문서의 진행 상황을 실시간으로 추적할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>다단계 검수</span>
                <span>코멘트 기능</span>
                <span>상태 추적</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>PDF 뷰어 및 문서 관리</h3>
              <p>
                PDF.js를 활용하여 웹 브라우저에서 직접 PDF를 열람할 수 있습니다.
                별도의 다운로드 없이 즉시 문서를 확인하고, 여러 문서를 효율적으로 관리할 수 있습니다.
                문서 검색 기능을 통해 원하는 파일을 빠르게 찾을 수 있습니다.
              </p>
              <div className="project-tags">
                <span>PDF.js 뷰어</span>
                <span>웹 기반 열람</span>
                <span>문서 검색</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>파일 관리 및 다운로드</h3>
              <p>
                여러 문서를 선택하여 ZIP 파일로 일괄 다운로드할 수 있습니다.
                JSZip을 활용하여 클라이언트 측에서 효율적으로 압축 파일을 생성합니다.
                일괄 삭제 기능으로 불필요한 문서를 한 번에 정리할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>ZIP 다운로드</span>
                <span>일괄 삭제</span>
                <span>파일 관리</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>실시간 협업 및 활동 로그</h3>
              <p>
                팀원들이 동일한 문서에 대해 실시간으로 협업할 수 있습니다.
                모든 활동(제출, 검토, 승인, 수정 요청)이 상세하게 기록되어 문서의 전체 변경 이력을 추적할 수 있습니다.
                투명한 업무 프로세스와 감시 기능으로 조직의 규정 준수를 지원합니다.
              </p>
              <div className="project-tags">
                <span>실시간 협업</span>
                <span>활동 로그</span>
                <span>변경 이력</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>통계 대시보드 및 실적 분석</h3>
              <p>
                Chart.js를 활용하여 조직 내 문서 제출, 검수, 승인 현황을 시각적으로 표시합니다.
                개인별·팀별 실적을 실시간으로 분석하여 조직의 업무 효율성을 파악할 수 있습니다.
                데이터 기반의 의사결정을 지원하는 상세한 통계 정보를 제공합니다.
              </p>
              <div className="project-tags">
                <span>Chart.js 시각화</span>
                <span>실적 분석</span>
                <span>통계 대시보드</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>사용자 및 권한 관리</h3>
              <p>
                조직의 사용자를 계층적으로 관리하고, 각 사용자의 역할과 권한을 정확하게 설정할 수 있습니다.
                직책, 부서, 소속 정보를 관리하여 문서 접근 권한을 역할 기반으로 제어합니다.
                관리자는 조직의 구조를 유연하게 변경하고 사용자 권한을 언제든지 업데이트할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>사용자 관리</span>
                <span>권한 설정</span>
                <span>조직 구조</span>
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
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend & Database</h3>
            <div className="skill-chips">
              <span>Next.js API Routes</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Libraries & Tools</h3>
            <div className="skill-chips">
              <span>PDF.js</span>
              <span>JSZip</span>
              <span>Swiper</span>
              <span>Playwright</span>
              <span>ESLint</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
