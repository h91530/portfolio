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
          실제 기업에서 운영 중인 사이트입니다. 위 링크는 데모용으로 데이터베이스만 별도로 옮긴 환경입니다.
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
          <strong>2FitReport</strong>는 기업 대출 심사 과정에서 발생하는 서류 처리 업무를 디지털화한 기업 내부용 웹 애플리케이션입니다.
        </p>

        <p>
          기존에는 문서 전달과 검수가 카카오톡·이메일 중심으로 이루어져 진행 상태 추적이 어렵고 누락 문제가 발생했습니다.
        </p>

        <p>
          이를 해결하기 위해 문서 제출부터 검수·처리·승인까지 전 과정을 하나의 플랫폼에서 관리할 수 있도록 설계했습니다.
        </p>

        <p style={{ marginTop: '16px', marginBottom: '12px' }}>
          <strong>담당 역할:</strong><br />
          프리랜서로 참여하여 디자인·퍼블리싱부터 프론트엔드 개발, API 설계, DB 설계까지 단독으로 수행했으며, 워크플로우와 권한 구조를 직접 설계했습니다.
        </p>

        <p style={{ marginTop: '12px', marginBottom: '12px' }}>
          <strong>주요 사용자:</strong><br />
          영업자 / 검수자 / 대표실무자 / 실무자 / 대표자
        </p>

        <p style={{ marginBottom: '16px' }}>
          <strong>핵심 목표:</strong><br />
          서류 처리 디지털화 · 진행 상태 실시간 추적 · 직책 기반 권한 통제
        </p>

        <p>
          기존에 분산되어 있던 서류 처리 과정을 하나의 시스템으로 통합했고, 현재 실제 업무 환경에서 운영되고 있습니다.
        </p>
      </section>

      <section className="about-section" id="tech">
        <h2>기술 선택 &amp; 아키텍처</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                권한과 상태 전이를 안정적으로 관리하기 위해 Next.js 기반 풀스택 구조를 선택했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Next.js:</strong> 프론트엔드와 API를 하나의 레포지토리에서 관리하도록 구성했습니다. 기능 수정 시 프론트와 서버 변경을 함께 관리할 수 있어 개발 및 운영 복잡도를 줄였습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Supabase:</strong> 인증·데이터베이스·스토리지를 통합 구성해 인프라 관리 부담을 줄였습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>상태관리:</strong> 전역 상태는 인증 정보만 Context API로 관리하고, 문서 데이터와 화면 상태는 페이지 단위 로컬 상태로 분리했습니다. 전역 상태를 최소화해 상태 변경 범위를 줄이고 데이터 흐름을 단순하게 유지했습니다.
              </p>
              <p>
                <strong>Vercel:</strong> GitHub에 푸시하면 자동으로 빌드·배포되도록 구성해, 코드 변경이 곧바로 운영 환경에 반영되는 흐름을 만들었습니다.
              </p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>Context API</span>
                <span>Vercel</span>
              </div>
            </div>
            <img src="/2fit4.png" alt="기술 아키텍처" className="project-image" />
          </article>
        </div>
      </section>

      <section className="about-section" id="design">
        <h2>핵심 설계 — 상태 전이와 권한 제어 구조</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                이 프로젝트의 핵심은 복잡한 문서 처리 규칙을 상태(State)와 권한(Role)으로 분리해 관리하는 워크플로우 구조를 설계한 것입니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                문서는 7단계 상태를 기준으로 진행되며, 각 단계에서 수행 가능한 작업은 사용자 역할과 조건에 따라 결정됩니다.
              </p>
              <div style={{ marginBottom: '12px', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '13px', color: '#666', fontWeight: '500' }}>
                상담요청 → 서류요청 → 분석 → 심사 → 진행 → 승인요청 → 승인
              </div>
              <p style={{ marginBottom: '12px' }}>
                각 단계는 자유롭게 이동할 수 없으며, 현재 상태와 사용자 권한, 조건을 만족할 때만 다음 단계로 전환됩니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                예를 들어 분석 단계에서 심사 단계로 이동하려면 실무자 배정이 완료되어 있어야 하며 권한을 가진 사용자만 수행할 수 있습니다. 최종 승인은 대표자만 수행합니다.
              </p>
              <p>
                이를 통해 업무 규칙을 시스템 구조에 반영하고, 권한에 맞는 작업만 수행되도록 제한해 잘못된 상태 변경을 방지했습니다.
              </p>
              <div className="project-tags">
                <span>7단계 워크플로우</span>
                <span>조건 기반 상태 전이</span>
                <span>역할 기반 권한</span>
              </div>
            </div>
            <img src="/2fit100.png" alt="7단계 문서 진행 워크플로우" className="project-image" />
          </article>
        </div>
      </section>

      <section className="about-section" id="features">
        <h2>핵심 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>문서 협업 &amp; 실시간 피드백</h3>
              <p>
                메모와 댓글을 통해 검수자와 영업자가 실시간으로 피드백을 주고받을 수 있습니다.
                모든 대화가 자동으로 기록되어 이후 참조가 가능하며, 수정 이력 관리로 커뮤니케이션 오류를 줄였습니다.
              </p>
              <div className="project-tags">
                <span>메모 및 댓글</span>
                <span>실시간 피드백</span>
                <span>수정 이력</span>
              </div>
            </div>
            <img src="/2fit1.png" alt="문서 협업 및 실시간 피드백" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>PDF 자동화 — 텍스트·이미지 자동 추출</h3>
              <p>
                PDF.js로 브라우저에서 문서를 직접 열람하고, 파일 업로드 시 텍스트가 자동으로 추출되어 입력 필드에 채워집니다.
                PDF 내 이미지도 자동으로 감지되어 서버에 업로드되므로, 반복 입력 작업을 줄이고 문서 등록 시간을 단축했습니다.
              </p>
              <div className="project-tags">
                <span>PDF.js 뷰어</span>
                <span>자동 텍스트 추출</span>
                <span>자동 입력</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
              <img src="/2fit98.png" alt="PDF 자동화 1" className="project-image" />
              <img src="/2fit97.png" alt="PDF 자동화 2" className="project-image" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>파일 관리 — ZIP 일괄 다운로드</h3>
              <p>
                여러 문서를 선택해 ZIP 파일로 일괄 다운로드할 수 있습니다.
                JSZip을 활용해 클라이언트에서 압축 파일을 생성하고, 일괄 삭제 기능으로 대량의 문서를 효율적으로 관리합니다.
              </p>
              <div className="project-tags">
                <span>ZIP 다운로드</span>
                <span>일괄 삭제</span>
                <span>파일 관리</span>
              </div>
            </div>
            <img src="/2fit96.png" alt="파일 관리 및 ZIP 다운로드" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>시스템 추적 — 활동 로그 &amp; 감사 이력</h3>
              <p>
                문서 생성·수정·제출·검수·승인 등 모든 작업이 타임스탬프와 담당자 정보와 함께 자동으로 기록됩니다.
                누가 언제 무엇을 했는지 추적할 수 있어 규정 준수와 감사 대응이 용이하며, 문제 발생 시 전체 히스토리로 원인을 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>활동 로그</span>
                <span>변경 이력</span>
                <span>규정 준수</span>
              </div>
            </div>
            <img src="/2fit95.png" alt="활동 로그 및 감사 이력" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>분석 — 통계 대시보드 &amp; 실적 시각화</h3>
              <p>
                Chart.js로 문서 제출·검수·승인 현황을 시각화하고, 개인별·팀별 실적을 분석합니다.
                조직의 업무 현황을 한눈에 파악할 수 있어 데이터 기반 의사결정을 지원합니다.
              </p>
              <div className="project-tags">
                <span>Chart.js 시각화</span>
                <span>실적 분석</span>
                <span>통계 대시보드</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/2fit94.png" alt="통계 대시보드 1" className="project-image" />
              <img src="/2fit93.png" alt="통계 대시보드 2" className="project-image" />
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="learning">
        <h2>어려웠던 점과 해결</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p style={{ marginBottom: '12px' }}>
                초기에는 각 화면에서 필요한 권한을 개별적으로 처리했습니다. 그런데 기능이 늘어날수록 같은 규칙이 여러 곳에 흩어졌고, 서버 검증과 어긋나 동작이 달라지는 경우가 생겼습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                단순히 버그를 그때그때 수정하기보다, <strong>권한을 어디서 판단할지에 대한 기준 자체를 다시 잡기로 했습니다.</strong> 판단 로직을 한 곳으로 모으고, 화면은 ‘무엇을 보여줄지’, 서버는 ‘무엇을 허용할지’로 책임을 명확히 나눴습니다.
              </p>
              <p>
                그 결과 권한 규칙 변경 시 수정 범위를 줄였고, 화면과 서버가 동일한 기준으로 동작하도록 유지할 수 있었습니다.
              </p>
              <p style={{ marginTop: '16px', marginBottom: '16px' }}>
                <strong>배운 점</strong>
              </p>
              <p style={{ marginBottom: '12px' }}>
                기능을 먼저 구현하고 규칙을 끼워 맞추기보다, 업무 규칙을 먼저 정의하고 이를 화면·서버·DB에 일관되게 반영하는 순서가 변경 대응과 유지보수에 훨씬 유리하다는 것을 체감했습니다.
              </p>
              <p>
                특히 <strong>‘어디서 무엇을 책임질지’를 명확히 정하는 것</strong>이 기능 자체를 구현하는 것만큼 중요하다는 점을 배웠습니다.
              </p>
              <div className="project-tags">
                <span>권한 설계</span>
                <span>책임 분리</span>
                <span>유지보수성</span>
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
              <span>CSS3</span>
              <span>Context API</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>Next.js API</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Libraries</h3>
            <div className="skill-chips">
              <span>PDF.js</span>
              <span>Chart.js</span>
              <span>JSZip</span>
              <span>Swiper</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
