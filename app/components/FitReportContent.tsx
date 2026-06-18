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
          <strong>담당 역할:</strong> 프리랜서로 참여하여 <strong>프론트엔드부터 백엔드 API, 데이터베이스 설계까지 전체를 단독으로 담당</strong>했습니다.
        </p>

        <p>
          <strong>주요 사용자:</strong> 영업자(문서 제출), 검수자(검토·보완요청), 대표실무자(실무자 배정), 실무자(처리), 대표자(최종 승인)
          <br />
          <strong>핵심 목표:</strong> 서류 처리 흐름의 완전 디지털화, 진행 상태 실시간 추적, 직책 기반 권한 통제
        </p>
      </section>

      <section className="about-section">
        <h2>기술적 의사결정</h2>

        <article className="project-card">
          <div className="project-content">
            <h3>기술 스택 선택 이유 — Next.js 풀스택</h3>
            <p>
              프론트엔드와 백엔드를 모두 <strong>Next.js</strong>로 구성했습니다.
              핵심 이유는 <strong>API Routes</strong>입니다. 별도 서버 없이 같은 프로젝트 안에서 백엔드 API를 작성할 수 있어,
              프론트와 백엔드를 하나의 레포지토리에서 혼자 관리하기에 적합했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              데이터베이스·파일 저장·인증은 <strong>Supabase</strong>로 통합했습니다. PostgreSQL, 스토리지, 인증을
              한 플랫폼에서 제공해 인프라 구성 시간을 크게 줄였습니다. 배포는 <strong>Vercel</strong>로,
              코드를 푸시하면 자동으로 빌드 후 배포되는 파이프라인을 구성했습니다.
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
            <h3>워크플로우 비즈니스 로직 설계 — 권한 로직 중앙화</h3>
            <p>
              이 프로젝트에서 가장 복잡한 부분은 워크플로우 로직이었습니다. 문서는
              <strong> 상담요청 → 서류요청 → 분석 → 심사 → 진행 → 승인요청 → 승인</strong> 총 7단계를 순서대로 거치며,
              각 단계마다 어떤 직책이 어떤 행동을 할 수 있는지가 전부 다릅니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              예를 들어 분석에서 심사로 넘어가려면 반드시 실무자가 배정되어 있어야 하고, 최종 승인은 대표자만 가능하며,
              검수자는 보완 요청만 할 수 있고 단계를 넘길 수는 없습니다.
              <strong> 5개 직책 × 7단계</strong>의 조합이 너무 많아, 권한 판단 로직을 <strong>permissions.ts 한 파일에 전부 모아 중앙화</strong>했습니다.
              화면에서도 백엔드 API에서도 이 파일의 함수를 호출하는 방식으로 일관성을 유지했습니다.
            </p>
            <div className="project-tags">
              <span>7단계 상태 전이</span>
              <span>직책별 분기</span>
              <span>permissions.ts 중앙화</span>
            </div>
          </div>
          <img src="/2fit100.png" alt="7단계 문서 진행 워크플로우" className="project-image" />
        </article>

        <article className="project-card">
          <div className="project-content">
            <h3>직책 기반 권한 제어 — 프론트 + 백엔드 이중 검증</h3>
            <p>
              화면에서는 로그인한 사용자의 직책을 기반으로 버튼을 <strong>조건부 렌더링</strong>했습니다.
              React에서 조건이 false면 버튼이 DOM에 아예 존재하지 않아, CSS로 숨기는 것과 달리 개발자도구로도 찾을 수 없습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              다만 화면에서 버튼을 없애도 API 주소를 직접 호출하면 우회가 가능합니다. 그래서
              <strong> 백엔드 API에서도 쿠키의 토큰으로 사용자를 식별하고 DB에서 직책을 조회해, 권한이 없으면 403을 반환</strong>합니다.
              화면과 서버 양쪽에서 이중으로 검증하는 구조입니다.
            </p>
            <div className="project-tags">
              <span>조건부 렌더링</span>
              <span>서버 측 403 검증</span>
              <span>이중 검증</span>
            </div>
          </div>
          <img src="/2fit4.png" alt="직책 기반 권한 제어" className="project-image" style={{ minHeight: '700px', objectFit: 'cover' }} />
        </article>

        <article className="project-card">
          <div className="project-content">
            <h3>상태관리 — Context API + 로컬 useState</h3>
            <p>
              상태관리는 Redux 같은 별도 라이브러리 없이 React의 <strong>Context API</strong>와 로컬 <strong>useState</strong>로만 구성했습니다.
              전역으로 공유해야 하는 건 로그인한 사용자 정보(이름·직책·소속)뿐이라, 이를 <strong>AuthProvider 컨텍스트</strong>에 담아
              어느 컴포넌트에서든 꺼내 쓸 수 있게 했습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              나머지 문서 목록·단계 상태는 각 페이지 컴포넌트에서 useState로 관리했습니다. 페이지 간 공유가 필요 없는 데이터를
              굳이 전역으로 올리면 오히려 상태 변화 추적이 어려워지기 때문입니다. <strong>규모에 맞는 최소한의 상태관리</strong>를 선택했습니다.
            </p>
            <div className="project-tags">
              <span>Context API</span>
              <span>AuthProvider</span>
              <span>로컬 상태 분리</span>
            </div>
          </div>
        </article>
      </section>

      <section className="about-section">
        <h2>주요 기능</h2>
        <div className="about-projects">
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
            <img src="/2fit99.png" alt="메모 및 댓글 기반 협업" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>PDF 자동 파싱 — 텍스트 추출 &amp; 입력 자동 채움</h3>
              <p>
                <code>pdfjs-dist</code>(PDF.js 기반)로 <strong>브라우저에서 직접 PDF를 파싱</strong>합니다.
                페이지 텍스트를 문자열로 합친 뒤 <strong>정규식으로 필요한 값만 찾아 입력 필드에 자동으로 채웁니다</strong>
                (설립일자·회사 주소·재무 데이터 등).
              </p>
              <p style={{ marginTop: '12px' }}>
                추출 텍스트에 글자 사이 공백이 끼는 문제(&lsquo;설 립 년 월&rsquo;)는 정규식에 <code>[\s]*</code>를 넣어 해결했고,
                이미지는 <strong>Canvas 렌더링 후 좌표를 잘라 base64로 변환</strong>해 첨부했습니다.
                용량이 큰 PDF.js는 <strong>동적 import</strong>로 필요 시점에만 로드합니다.
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
              <h3>활동 로그 및 감사 추적</h3>
              <p>
                문서 생성·수정·제출·검수·승인 등 모든 작업이 타임스탬프·담당자 정보와 함께 자동으로 기록됩니다.
                누가 언제 무엇을 했는지 추적할 수 있어 분쟁이나 문제 발생 시 전체 히스토리로 원인을 파악할 수 있습니다.
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
            <h3>영업자 재배정 시 권한 충돌 → 데이터 모델로 해결</h3>
            <p>
              가장 막혔던 지점은 <strong>영업자 재배정 시 권한 충돌</strong>이었습니다. 영업자 A가 만든 문서를 영업자 B에게
              재배정하는 기능이 있는데, 재배정 후 A와 B 중 누가 그 문서를 수정할 수 있는지가 불명확했습니다.
              담당자를 <code>user_id</code> 하나로만 관리했더니, 재배정하는 순간 A가 자기 문서에 접근하지 못하고,
              반대로 둘 다 허용하면 권한이 너무 넓어졌습니다.
            </p>
            <p style={{ marginTop: '12px' }}>
              해결책으로 <strong>컬럼을 두 개로 분리</strong>했습니다. <code>submitter_id</code>는 원래 생성자,
              <code>user_id</code>는 현재 담당자를 저장합니다. 백엔드에서 권한을 검사할 때 두 필드를 모두 확인해서,
              A는 자신이 만든 문서를 계속 조회할 수 있고 B는 현재 배정된 단계에서만 수정하도록 분리했습니다.
            </p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: '#555' }}>
              이 경험에서 <strong>비즈니스 요구사항이 복잡할수록 데이터베이스 구조를 먼저 명확히 잡아야 한다</strong>는 것을 배웠습니다.
              코드보다 데이터 모델이 먼저라는 걸 크게 느낀 사례입니다.
            </p>
            <div className="project-tags">
              <span>submitter_id / user_id 분리</span>
              <span>데이터 모델 우선 설계</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
