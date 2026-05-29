'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

      <section className="telemon-images">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="fitreport-swiper"
        >
          <SwiperSlide>
            <img src="/2fit1.png" alt="2FitReport 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2fit2.png" alt="2FitReport 2" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>2FitReport</strong>는 기업의 <strong>문서 관리, 협업, 실적 통계를 통합한 차세대 엔터프라이즈 업무 시스템</strong>입니다.
          Next.js 프레임워크로 프론트엔드와 백엔드를 모두 구축했으며,
          웹 기술을 기반으로 데스크톱 애플리케이션으로 프로그램화하여 사용자 경험을 극대화했습니다.
          기존의 종이 기반, 이메일 기반 문서 관리 방식을 완전히 디지털화하여 조직의 업무 효율성을 극대화하고,
          데이터 기반의 의사결정을 가능하게 합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          현대 기업들은 매일 수백 건의 문서를 생성하고 관리해야 합니다. 기존의 이메일과 수기 기반 방식에서는
          문서의 현황 파악, 승인 추적, 데이터 분석이 매우 어렵고 시간이 많이 소요됩니다.
          2FitReport는 이러한 문제를 완전히 해결하기 위해 설계되었으며,
          중앙 집중식 문서 관리, 자동화된 워크플로우, 실시간 협업 환경을 제공합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          본 시스템의 핵심은 <strong>사용자 경험 중심의 설계</strong>입니다. 복잡한 기업용 시스템이지만
          직관적인 인터페이스와 빠른 성능으로 모든 직급의 사용자가 쉽게 사용할 수 있습니다.
          웹 기술 기반으로 구축되었으며, 데스크톱 애플리케이션으로 프로그램화하여
          데스크톱 소프트웨어 수준의 사용 경험을 제공합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>기술 아키텍처:</strong> 전체 시스템은 Next.js를 기반으로 구축되어 API Routes로 백엔드 로직을 처리하고,
          PostgreSQL 데이터베이스를 사용하여 안정적인 데이터 관리를 제공합니다.
          PDF.js로 웹 기반 문서 뷰어를 구현했고, Chart.js를 활용해 실시간 통계 대시보드를 제공합니다.
          JSZip으로 대량 파일의 압축 다운로드를 지원하며, 강력한 권한 제어와 활동 로그로 보안성을 보장합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>주요 기능:</strong> 3단계 자동화 워크플로우(영업자 작성 → 검수자 검수 → 관리자 승인)로 문서 승인 프로세스를 완전히 자동화합니다.
          메모와 댓글을 통한 실시간 협업으로 피드백을 빠르게 주고받으며, 역할 기반 권한 관리로 민감한 정보를 보호합니다.
          모든 활동이 자동으로 기록되어 규정 준수와 감시를 지원하고, 통계 대시보드로 조직의 현황을 한눈에 파악할 수 있습니다.
        </p>

        <p>
          <strong>주요 사용자:</strong> 직원(문서 제출자), 담당자(검토자), 관리자(승인권자), 시스템 관리자
          <br />
          <strong>핵심 목표:</strong> 문서 관리의 완전 디지털화, 협업 효율성 극대화, 실시간 현황 파악, 규정 준수 자동화
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능 및 프로세스</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>3단계 문서 승인 워크플로우</h3>
              <p>
                영업자가 문서를 작성하면 담당 검수자가 검수하고, 최종 관리자가 승인하는 3단계 프로세스가 자동으로 진행됩니다.
                각 단계에서 담당자가 자동으로 배정되고, 메모와 댓글로 실시간 피드백을 주고받으며 협업합니다.
                거부 또는 수정 요청이 있으면 영업자에게 즉시 알림이 전달되어 빠른 재작업이 가능합니다.
              </p>
              <div className="project-tags">
                <span>자동 워크플로우</span>
                <span>실시간 협업</span>
                <span>다단계 검수</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>메모 및 댓글 기반 협업</h3>
              <p>
                각 문서에는 협업 공간이 있어 검수자가 메모를 남기면 영업자가 실시간으로 피드백을 받을 수 있습니다.
                메모에 댓글을 달아 여러 사람이 대화를 나눌 수 있으며, 모든 대화가 자동으로 기록되어 나중에 참조할 수 있습니다.
                수정이 필요한 부분을 구체적으로 지적할 수 있어 커뮤니케이션 오류를 최소화합니다.
              </p>
              <div className="project-tags">
                <span>메모 및 댓글</span>
                <span>실시간 피드백</span>
                <span>대화 기록</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>역할 기반 권한 관리 (RBAC)</h3>
              <p>
                영업자, 매니저, 검수자, 관리자별로 정확한 권한이 설정됩니다.
                일반 영업사원은 자신의 문서만 편집 가능하고, 매니저는 모든 문서를 편집할 수 있습니다.
                검수자는 담당 영업자의 문서만 검수 단계에서 편집 가능하며, 관리자만 최종 승인과 전체 조회가 가능합니다.
              </p>
              <div className="project-tags">
                <span>역할별 권한</span>
                <span>접근 제어</span>
                <span>보안 강화</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>PDF 뷰어 및 자동 텍스트 추출</h3>
              <p>
                PDF.js를 활용하여 웹 브라우저에서 직접 PDF를 열람할 수 있습니다.
                <strong>PDF 파일을 업로드하면 자동으로 텍스트가 추출되어 input 영역에 입력</strong>되므로,
                사용자는 문서의 내용을 수동으로 입력할 필요 없이 바로 검수 및 승인 단계로 진행할 수 있습니다.
                문서 검색 기능과 함께 효율적인 문서 관리가 가능합니다.
              </p>
              <div className="project-tags">
                <span>PDF.js 뷰어</span>
                <span>자동 텍스트 추출</span>
                <span>자동 입력</span>
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
              <h3>활동 로그 및 감시 추적</h3>
              <p>
                문서 생성, 수정, 제출, 검수, 승인 등 모든 작업이 타임스탐프와 담당자 정보와 함께 자동으로 기록됩니다.
                누가 언제 무엇을 했는지 완벽하게 추적할 수 있어 규정 준수와 감사 대응이 용이합니다.
                분쟁이나 문제 발생 시 전체 히스토리를 검토하여 원인을 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>활동 로그</span>
                <span>변경 이력</span>
                <span>규정 준수</span>
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
              <span>Chart.js</span>
              <span>ESLint</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
