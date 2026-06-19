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
        <p className="about-tagline">기업 문서 심사 워크플로우 시스템</p>
        <div className="about-quick-links">
          <a href="https://2fit.yangtae.site" target="_blank" rel="noreferrer">
            사이트 방문
          </a>
        </div>
        <p style={{ margin: '16px auto 0', fontSize: '16px', color: '#666', maxWidth: '640px', textAlign: 'center', lineHeight: '1.7' }}>
          실제 기업에서 운영 중인 사이트입니다. 위 링크는 데모용으로 데이터베이스만 별도로 옮긴 환경이며,
          개인정보 보호를 위해 실데이터 대신 임시 테스트 데이터를 넣어두었습니다.
        </p>
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
          <SwiperSlide>
            <img src="/2fit9.png" alt="2FitReport 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>2FitReport</strong>는 <strong>기업 대출 심사 과정에서 발생하는 서류 처리 업무를 디지털화한 기업 내부용 웹 애플리케이션</strong>입니다.
          (<span style={{ backgroundColor: '#fff3cd', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>실제 운영 중인 시스템이므로 개인정보 보호를 위해 스크린샷의 민감한 정보는 검은색으로 처리했습니다.</span>)
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          기존에는 영업자가 고객사 서류를 카카오톡이나 이메일로 전달하고 검수자가 수동으로 확인하는 방식이라,
          진행 상태 파악이 어렵고 누락이 잦았습니다. 2FitReport는 이 모든 과정을 하나의 플랫폼 안에서
          추적할 수 있도록 만들어, 어느 단계에서 누가 무엇을 해야 하는지 한눈에 파악할 수 있게 합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>담당 역할:</strong> 프리랜서로 참여하여 <strong>프론트엔드부터 API, DB 설계까지 단독으로 담당</strong>하며 전체 워크플로우 구조를 직접 설계했습니다.
        </p>

        <p>
          <strong>주요 사용자:</strong> 영업자(문서 제출), 검수자(검토·보완요청), 대표실무자(실무자 배정), 실무자(처리), 대표자(최종 승인)
          <br />
          <strong>핵심 목표:</strong> 서류 처리 흐름의 완전 디지털화, 진행 상태 실시간 추적, 직책 기반 권한 통제
        </p>
      </section>

      <section className="about-section">
        <h2>핵심 설계 — 규칙 기반 상태/권한 워크플로우 엔진</h2>
        <article className="project-card">
          <div className="project-content">
            <h3>워크플로우 비즈니스 로직 설계</h3>
            <p>
              이 시스템의 핵심은 <strong>7단계 워크플로우와 그 위에 정의된 권한 규칙</strong>입니다.
              상태 정의 · 전이 규칙 · 직책별 권한을 하나의 규칙 체계로 설계했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>① 상태 정의</strong> — 상담요청 → 서류요청 → 분석 → 심사 → 진행 → 승인요청 → 승인 (총 7단계)
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>② 단계 전이 규칙</strong> — 정해진 순서로만 이동하며, 예를 들어 분석에서 심사로 넘어가려면 실무자가 배정돼 있어야 합니다.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>③ 직책별 권한</strong> — 검수자는 보완 요청만 가능하고 단계 이동은 불가, 최종 승인은 대표자만 수행합니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              즉 각 상태는 단순 이동이 아니라 <strong>권한과 조건에 의해 제어되는 상태 머신 구조</strong>로 설계했습니다.
            </p>
            <div className="project-tags">
              <span>7단계 상태 정의</span>
              <span>단계 전이 규칙</span>
              <span>직책별 권한</span>
            </div>
          </div>
          <img src="/2fit100.png" alt="7단계 문서 진행 워크플로우" className="project-image" />
        </article>
      </section>

      <section className="about-section">
        <h2>도메인 규칙을 코드 구조로 매핑</h2>
        <article className="project-card">
          <div className="project-content">
            <h3>규칙 → 코드 구조</h3>
            <p>
              앞의 상태·권한 규칙을 다음과 같은 코드 구조로 풀어냈습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>① 상태</strong> — 문서의 현재 단계와 상태를 <code>documents</code> 테이블의
              <code>progress_details</code> · <code>status</code> 컬럼에 명시적으로 저장합니다.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>② 권한 판단</strong> — &lsquo;이 문서를 수정할 수 있는가&rsquo;를
              <code>permissions.ts</code>의 <code>canEditDocument(직책·단계·상태)</code> 함수로 단일화하고, 화면은 이 결과로 버튼 노출을 제어합니다.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>③ 단계 전이 검증</strong> — 다음 단계로의 이동은 API 라우트에서
              현재 단계와 조건(예: 실무자 배정 여부)을 확인한 뒤 허용/거부합니다.
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>④ 서버 검증</strong> — 모든 변경 API는 쿠키 토큰으로 직책을 조회해 권한이 없으면 <strong>403</strong>으로 차단합니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              결과적으로 <strong>모든 UI 액션은 <code>canEditDocument</code> 결과를 기반으로 조건부 렌더링</strong>되어,
              상태 변경이 가능한 경우에만 액션 버튼이 노출됩니다. 화면을 우회한 직접 요청은 서버에서 403으로 차단되도록 설계했습니다.
            </p>
            <div className="project-tags">
              <span>상태 = DB 컬럼</span>
              <span>canEditDocument</span>
              <span>API 전이 검증</span>
              <span>서버 403</span>
            </div>
          </div>
        </article>
      </section>

      <section className="about-section">
        <h2>기술 선택 &amp; 아키텍처</h2>
        <p style={{ marginBottom: '18px', color: '#5f6368' }}>
          이 워크플로우를 안정적으로 구현하기 위해 다음과 같은 풀스택 구조를 선택했습니다.
        </p>

        <div className="about-projects">
        <article className="project-card">
          <div className="project-content">
            <h3>기술 스택 선택 이유 — Next.js 풀스택</h3>
            <p>
              프론트와 백엔드를 모두 <strong>Next.js 기반 풀스택 구조</strong>로 구성했습니다.
              <strong>API Routes로 둘을 한 레포에서 관리해 개발 속도와 유지보수를 동시에 고려</strong>했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              인프라는 <strong>Supabase</strong>로 통합해 인증·DB·스토리지 복잡도를 줄였고,
              배포는 <strong>Vercel</strong>로 푸시 시 자동 빌드·배포되도록 구성했습니다.
            </p>
            <div className="project-tags">
              <span>Next.js API Routes</span>
              <span>단일 레포 관리</span>
              <span>Supabase</span>
              <span>Vercel 자동 배포</span>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-content">
            <h3>상태관리 — Context API + 로컬 useState</h3>
            <p>
              상태 변경 범위가 작고 전역 상태가 인증 정보 중심이기 때문에{' '}
              <strong>Redux나 Zustand 대신 Context API와 useState</strong>로 상태를 구성했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              전역으로는 로그인한 사용자 정보만 <strong>AuthProvider</strong>로 관리하고, 문서·단계 상태는 페이지 단위로 분리했습니다.
              <strong>전역 상태를 최소화해 데이터 흐름을 단순하게 유지하는 방향으로 구조를 설계</strong>했습니다.
            </p>
            <div className="project-tags">
              <span>Context API</span>
              <span>AuthProvider</span>
              <span>로컬 상태 분리</span>
            </div>
          </div>
        </article>
        </div>
      </section>

      <section className="about-section">
        <h2>주요 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p style={{ fontSize: '13px', color: '#1a73e8', fontWeight: 600, margin: '0 0 6px' }}>1. 문서 협업</p>
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
            <img src="/2fit99.png" alt="메모 및 댓글 기반 협업" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <p style={{ fontSize: '13px', color: '#1a73e8', fontWeight: 600, margin: '0 0 6px' }}>2. 문서 처리 자동화</p>
              <h3>PDF 자동 파싱 — 텍스트 추출 &amp; 입력 자동 채움</h3>
              <p>
                <code>pdfjs-dist</code>를 사용해 <strong>브라우저에서 PDF를 직접 파싱</strong>하고,
                텍스트를 <strong>정규식으로 추출해 입력 필드를 자동으로 채우도록</strong> 구현했습니다.
              </p>
              <p style={{ marginTop: '12px' }}>
                이미지 페이지는 <strong>Canvas로 변환해 base64로 첨부</strong>했고,
                PDF.js는 <strong>동적 import</strong>로 초기 로딩을 최적화했습니다.
              </p>
              <div className="project-tags">
                <span>pdfjs-dist</span>
                <span>정규식 추출</span>
                <span>공백 보정 [\s]*</span>
                <span>Canvas → base64</span>
                <span>동적 import</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
              <img src="/2fit98.png" alt="PDF 뷰어 및 자동 텍스트 추출 1" className="project-image" />
              <img src="/2fit97.png" alt="PDF 뷰어 및 자동 텍스트 추출 2" className="project-image" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <p style={{ fontSize: '13px', color: '#1a73e8', fontWeight: 600, margin: '0 0 6px' }}>3. 운영</p>
              <h3>파일 관리 및 일괄 다운로드</h3>
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
            <img src="/2fit96.png" alt="파일 관리 및 다운로드" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <p style={{ fontSize: '13px', color: '#1a73e8', fontWeight: 600, margin: '0 0 6px' }}>4. 시스템 추적</p>
              <h3>활동 로그 및 감사 추적</h3>
              <p>
                문서 생성·수정·제출·검수·승인 등 모든 작업이 타임스탬프·담당자 정보와 함께 자동으로 기록됩니다.
                누가 언제 무엇을 했는지 추적할 수 있어, 문제가 생겼을 때 전체 히스토리로 원인을 빠르게 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>활동 로그</span>
                <span>변경 이력</span>
                <span>감사 추적</span>
              </div>
            </div>
            <img src="/2fit95.png" alt="활동 로그 및 감사 추적" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <p style={{ fontSize: '13px', color: '#1a73e8', fontWeight: 600, margin: '0 0 6px' }}>5. 의사결정 지원</p>
              <h3>통계 대시보드 및 실적 분석</h3>
              <p>
                Chart.js를 활용하여 조직 내 문서 제출·검수·승인 현황을 시각적으로 표시합니다.
                개인별·팀별 실적을 실시간으로 분석하여 데이터 기반의 의사결정을 지원합니다.
              </p>
              <div className="project-tags">
                <span>Chart.js 시각화</span>
                <span>실적 분석</span>
                <span>통계 대시보드</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/2fit94.png" alt="통계 대시보드 및 실적 분석 1" className="project-image" />
              <img src="/2fit93.png" alt="통계 대시보드 및 실적 분석 2" className="project-image" />
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
              <span>Context API</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend & Database</h3>
            <div className="skill-chips">
              <span>Next.js API Routes</span>
              <span>Supabase</span>
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
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>어려웠던 점과 해결</h2>
        <article className="project-card">
          <div className="project-content">
            <h3>복잡한 권한 규칙을 일관되게 유지하는 문제</h3>
            <p>
              가장 큰 문제는 <strong>권한 로직이 화면과 서버에 분산되어 있어 수정 시 불일치가 발생하는 구조</strong>였습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              이를 해결하기 위해 권한 판단 로직을 <strong><code>canEditDocument</code> 함수로 단일화</strong>하고,
              <strong>프론트엔드는 UI 제어만 담당하고, 서버는 최종 검증만 수행</strong>하도록 책임을 분리했습니다.
            </p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: '#555' }}>
              이 경험을 통해 기능 구현보다 <strong>규칙과 책임의 위치를 먼저 설계하는 것이 유지보수에 더 큰 영향을 준다</strong>는 걸 경험했습니다.
특히 <strong>UI 구현보다 상태 전이와 권한 규칙을 먼저 설계하는 것이 시스템 복잡도를 제어하는 핵심</strong>이라는 것을 경험했습니다.
            </p>
            <div className="project-tags">
              <span>권한 규칙 중앙화</span>
              <span>canEditDocument</span>
              <span>프론트+서버 이중 검증</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
