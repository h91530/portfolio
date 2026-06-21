'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RealEstateContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <img src="/logo.png" alt="부동산 API" style={{ border: '2px solid #333', borderRadius: '8px' }} />
        </div>
        <h1>부동산 월세 vs 매입 비교</h1>
        <p className="about-tagline">국토교통부 실거래가 API로 월세와 매입 비용을 비교하는 웹</p>
        <div className="about-quick-links">
          <a href="https://yangti.shop" target="_blank" rel="noreferrer">
            사이트 방문
          </a>
        </div>
      </section>

      <section className="telemon-images">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="telemon-swiper"
        >
          <SwiperSlide>
            <img src="/api1.png" alt="부동산 API 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/api2.png" alt="부동산 API 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/api3.png" alt="부동산 API 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          월세 거주자가 <strong>&ldquo;지금 월세가 적정한가? 사는 게 이득인가?&rdquo;</strong>를 판단할 객관적 근거가 없다는 문제에서 출발했습니다.
        </p>
        <p style={{ marginTop: '12px' }}>
          <strong>국토교통부 실거래가 API</strong>로 해당 지역·건물의 최근 24개월 거래 데이터를 조회하고, 월세 지출과 매입 평균가를 비교해 객관적인 판단 근거를 제공합니다.
        </p>
      </section>

      <section className="about-section" id="features">
        <h2>핵심 기능 &amp; 설계</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>3단계 조회 &amp; 월세 vs 매입 비교</h3>
              <p>
                &ldquo;시도 → 시군구 → 동&rdquo; 3단계만 선택하면 해당 지역의 24개월 거래 데이터와 건물 목록이 자동으로 조회됩니다.
                입력한 보증금·월세의 <strong>월 지출(보증금 기회비용 포함)</strong>과 건물의 평균 거래가를 비교해 손익을 판단하고, 최근 거래 추세까지 함께 보여줍니다.
              </p>
              <div className="project-tags">
                <span>실시간 데이터 조회</span>
                <span>기회비용 포함 계산</span>
                <span>시장 추세 분석</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/api4.png" alt="3단계 조회" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
              <img src="/api6.png" alt="월세 vs 매입 비교" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>유형별 API 매핑 &amp; 병렬 수집</h3>
              <p>
                국토교통부는 부동산 유형별로 <strong>6개의 서로 다른 API</strong>(아파트·빌라·오피스텔·상가·공장·토지)를 운영하고, 데이터도 <strong>월 단위로만</strong> 제공합니다.
                24개월치를 순차로 요청하면 50초 이상 걸리는데, <strong>PHP cURL Multi로 여러 월을 동시에 병렬 요청</strong>해 응답 시간을 약 2~4초로 단축했습니다.
              </p>
              <div className="project-tags">
                <span>6개 유형별 API 매핑</span>
                <span>cURL Multi 병렬 수집</span>
              </div>
            </div>
            <img src="/api5.png" alt="API 매핑 및 병렬 수집" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담 연결 &amp; 관리</h3>
              <p>
                데이터 비교 후 자연스럽게 <strong>상담 신청 폼으로 연결</strong>되며, 신청 내역은 MySQL에 저장되어 관리자가 상태(접수 → 검토 → 완료)와 메모로 추적·응답할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>상담 전환 플로우</span>
                <span>개인정보 동의</span>
              </div>
            </div>
            <img src="/api7.png" alt="상담 연결" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>

          <article className="project-card admin-page-card">
            <div className="admin-page-content">
              <h3>관리자 페이지</h3>
              <p>
                접수된 상담을 관리자 페이지에서 통합 관리합니다. <strong>상태(접수 → 검토 → 완료) 변경과 단계별 메모</strong>로 진행 상황을 추적·응답하고,
                데이터 조회 → 상담 신청 → 견적 생성으로 이어지는 <strong>전환율과 통계</strong>를 분석해 어떤 지역·유형의 관심도가 높은지 파악할 수 있습니다.
              </p>
              <p>
                전환율은 <strong>건물 조회 시점에 추적 ID를 생성</strong>하고, 이후 <strong>상담이 완료되면 같은 추적 ID로 연결</strong>해 계산합니다. 단순 집계가 아니라 사용자 한 명의 여정(조회 → 상담)을 추적해 정확한 전환율을 산출합니다.
              </p>
              <div className="project-tags">
                <span>상담 상태·메모 관리</span>
                <span>추적 ID 기반 전환율</span>
                <span>통계 대시보드</span>
              </div>
            </div>
            <div className="admin-images-grid">
              <img src="/api11.png" alt="관리자 페이지 - 상태 및 메모 관리" />
              <img src="/api12.png" alt="관리자 페이지 - 전환율" />
              <img src="/api13.png" alt="관리자 페이지 - 상담/견적 통계" />
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
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>MySQL</span>
              <span>cURL Multi</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>API</h3>
            <div className="skill-chips">
              <span>국토교통부 OpenAPI</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
