'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ConsultingContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar">
          <img src="/logo1.png" alt="자영업자 컨설팅" style={{ border: '2px solid #333', borderRadius: '8px' }} />
        </div>
        <h1>자영업자 무료 컨설팅</h1>
        <p className="about-tagline">자영업자의 자금 흐름 고민에 공감해 상담 신청을 유도하는 컨설팅 랜딩 플랫폼</p>
        <div className="about-quick-links">
          <a href="https://yangti.shop/consulting/" target="_blank" rel="noreferrer">
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
            <img src="/consulting1.png" alt="컨설팅 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/consulting2.png" alt="컨설팅 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/consulting3.png" alt="컨설팅 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/consulting4.png" alt="컨설팅 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/consulting5.png" alt="컨설팅 5" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>&ldquo;매출은 많은데 이익은 적다&rdquo;</strong>는 자영업자의 실제 고민에 공감해, 상담 신청 유입을 만드는 컨설팅 랜딩 플랫폼입니다.
        </p>
        <p style={{ marginTop: '12px' }}>
          홈에서 자영업자가 겪는 문제(Pain Point)를 제시해 공감을 끌어내고, 간편 상담 폼으로 신청을 받습니다. 신청 데이터는 MySQL에 저장되어 <strong>관리자 페이지에서 추적·응대하고, 방문·전환 통계로 마케팅 효과를 측정</strong>합니다. 현재 실제 광고를 운영하며 데이터를 수집·분석하고 있습니다.
        </p>
      </section>

      <section className="about-section" id="tech">
        <h2>기술 선택 &amp; 아키텍처</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                상담 폼·데이터 저장·관리자 통계를 빠르게 구축하기 위해 <strong>PHP · MySQL 기반</strong>으로 만들었습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>PHP · MySQL:</strong> 상담 신청 데이터를 저장하고, 관리자 페이지의 현황·통계를 직접 제어했습니다.
              </p>
              <p>
                <strong>방문 분석:</strong> 외부 분석 도구 대신, 방문 시 IP·디바이스·유입 경로를 <strong>직접 수집·저장</strong>해 전환율과 통계를 자체적으로 집계했습니다.
              </p>
              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>자체 방문 분석</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="features">
        <h2>핵심 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>Pain Point 기반 랜딩 &amp; 상담 유입</h3>
              <p>
                자영업자가 겪는 실제 문제(수익 구조 파악·자금 조달·금융상품 선택·현황 파악)를 명확히 제시해 공감을 끌어내고,
                부담 없이 작성할 수 있는 <strong>간편 상담 폼으로 자연스럽게 신청을 유도</strong>합니다.
              </p>
              <div className="project-tags">
                <span>Pain Point 제시</span>
                <span>낮은 진입장벽</span>
                <span>상담 전환 유도</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
              <img src="/consulting2.png" alt="Pain Point 랜딩" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
              <img src="/consulting6.png" alt="간편 상담신청 폼" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
            </div>
          </article>

          <article className="project-card admin-page-card">
            <div className="admin-page-content">
              <h3>관리자 페이지 &amp; 통계</h3>
              <p>
                상담 신청을 DB에 저장하고 <strong>진행 상태(접수 → 상담 → 완료)와 메모로 추적·응대</strong>합니다.
                전체·당일 방문 수, 상담 신청 수와 <strong>전환율(방문 대비 신청)</strong>, 디바이스별 분포, IP·유입 경로·방문 시간 등 상세 로그를 분석해 마케팅 전략과 서비스 개선에 활용합니다.
              </p>
              <div className="project-tags">
                <span>상담 상태·메모 관리</span>
                <span>전환율 분석</span>
                <span>방문 로그·디바이스 분석</span>
              </div>
            </div>
            <div className="admin-images-grid">
              <img src="/consulting7.png" alt="상담 데이터 관리" />
              <img src="/consulting8.png" alt="방문 통계" />
              <img src="/consulting9.png" alt="방문 기록" />
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
            </div>
          </div>
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
