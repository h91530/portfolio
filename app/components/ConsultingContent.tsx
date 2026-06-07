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
        <p className="about-tagline">사업 자금 흐름을 정확히 파악하고 다음 단계를 명확하게 안내하는 무료 컨설팅 플랫폼</p>
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
          <strong>핵심 전략:</strong> 자영업자들이 겪는 실제 통증(매출은 많지만 이익은 적다)에 공감하여 관심을 유도합니다.
          "20분이면 현황을 명확히 파악할 수 있다"는 메시지로 상담신청 유입을 확보하는 것이 목표입니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>구조:</strong> 홈페이지에서 Pain Point(사용자가 겪는 문제)를 시각적으로 제시하고, 간편한 상담신청 폼으로 유입을 받습니다.
          사용자의 상담신청 정보를 데이터베이스에 저장하여 관리자가 체계적으로 추적하고 응대할 수 있습니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>기술 구현:</strong> 상담신청 폼 데이터를 MySQL에 저장하고, 관리자 대시보드에서 신청 현황과 통계를 확인할 수 있도록 구축했습니다.
          신청 건수, 지역별 분포 등을 통해 마케팅 효과를 측정합니다.
        </p>

        <p>
          <strong>운영 현황:</strong> 현재 실제 광고를 돌리고 있는 사이트로, 지속적으로 방문자와 상담 신청을 수집하고 데이터를 분석합니다.
        </p>

        <p>
          <strong>결과:</strong> 낮은 진입장벽으로 자영업자의 상담신청을 확보하고, 데이터 기반으로 서비스를 개선할 수 있습니다.
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>Pain Point(사용자가 겪는 문제) 기반 랜딩 페이지</h3>
              <p>
                홈페이지에서 자영업자가 겪는 4가지 실제 문제(수익 구조 파악, 자금 조달, 금융상품 선택, 현황 파악)를 명확하게 제시합니다.
                각 문제에 대해 "신청 후 20분이면 해결된다"는 메시지로 신뢰도를 확보하고, 상담신청으로 유도합니다.
              </p>
              <div className="project-tags">
                <span>공감대 형성</span>
                <span>문제 정의</span>
                <span>가치 제시</span>
                <span>신뢰 구축</span>
              </div>
            </div>
            <img src="/consulting2.png" alt="Pain Point 기반 랜딩 페이지" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>간편 상담신청 폼</h3>
              <p>
                사용자가 기본 정보(이름, 연락처, 사업 현황 등)를 간단히 입력하여 상담을 신청합니다.
                복잡한 과정 없이 5분 안에 완료할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>간편 입력</span>
                <span>빠른 처리</span>
              </div>
            </div>
            <img src="/consulting6.png" alt="간편 상담신청 폼" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담신청 데이터 관리</h3>
              <p>
                사용자의 상담 신청 정보를 데이터베이스에 저장하고, 진행 상태(접수 → 상담 → 완료)를 추적합니다.
                관리자는 각 신청에 메모를 남기고 상담 이력을 기록하여 지속적인 고객 관리가 가능합니다.
              </p>
              <div className="project-tags">
                <span>데이터 저장</span>
                <span>상태 추적</span>
                <span>고객 관리</span>
              </div>
            </div>
            <img src="/consulting7.png" alt="상담신청 데이터 관리" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담 통계 대시보드</h3>
              <p>
                전체 방문자 수, 오늘 방문 수, 상담 신청 수, 전환율(방문자 대비 신청 비율)을 실시간으로 추적합니다.
                디바이스별 분포(FB 인앱, Windows, iPhone, Android 등), IP별 방문 통계, 상세 방문 기록(IP, 디바이스, 유입 경로, 방문 시간)을 분석하여
                마케팅 전략 수립과 서비스 개선에 활용됩니다.
              </p>
              <div className="project-tags">
                <span>실시간 통계</span>
                <span>전환율 분석</span>
                <span>디바이스별 분석</span>
                <span>방문 로그 추적</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/consulting8.png" alt="상담 통계 대시보드 - 방문 통계" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
              <img src="/consulting9.png" alt="상담 통계 대시보드 - 방문 기록" className="project-image" style={{ maxHeight: '600px', objectFit: 'contain' }} />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
