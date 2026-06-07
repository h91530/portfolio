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
        <p className="about-tagline">실거래가 API로 월세와 매입 비용을 실시간 비교하는 웹 플랫폼</p>
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
          <strong>핵심 문제:</strong> 월세 거주자들이 "지금 월세가 정상인가? 구입하는 게 이득인가?"를 판단할 객관적 근거가 없습니다.
          부동산 중개소 정보는 편향되어 있고, 공식 거래 데이터는 접근이 어렵습니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>솔루션:</strong> 국토교통부 공개 API(실거래가)를 정확하게 매핑하여, 사용자가 <strong>해당 지역·부동산의 최근 24개월 거래 데이터</strong>를 즉시 조회할 수 있게 했습니다.
          월세 지출액과 매입 후 월 거래 평균가를 자동 계산하여 비교하므로, 사용자는 객관적 근거 위에서 투자 결정을 내릴 수 있습니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>기술적 핵심:</strong> 국토교통부는 부동산 유형별로 <strong>6개의 서로 다른 API 엔드포인트</strong>를 운영합니다 (아파트/빌라/오피스텔/기타/공장/토지).
          이 API들을 정확하게 매핑하고, 24개월 데이터를 조회해야 하는데, 정부 API는 월별로만 데이터를 제공합니다.
          순차적으로 요청하면 24회 × 1-2초 = 약 50초 이상이 필요하지만, <strong>PHP cURL Multi로 병렬 수집</strong>하여 여러 월을 동시에 요청하면 응답시간을 2-4초로 단축합니다.
          마스킹된 지번은 정확도 순으로 정렬하고, <strong>User-Agent 검증과 세션 기반 데이터 관리</strong>로 API 남용을 방지하며 사용자 데이터를 보호합니다.
        </p>

        <p>
          <strong>결과:</strong> 사용자는 3단계(주소 선택 → 부동산 유형 → 건물 선택) 만으로 과거 24개월 거래 통계를 얻을 수 있으며,
          월세 손익분기점을 즉시 파악할 수 있습니다.
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능 및 프로세스</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>3단계 주소 선택 후 거래 데이터 조회</h3>
              <p>
                사용자는 "시도 → 시군구 → 동" 3단계를 차례로 선택합니다.
                각 단계 선택이 완료되면 정부 API에서 해당 지역의 최근 24개월 거래 데이터를 조회하고,
                건물 목록이 자동으로 생성됩니다.
                사용자는 건물을 선택하기만 하면 되고, 나머지 조회는 모두 자동으로 처리됩니다.
              </p>
              <div className="project-tags">
                <span>주소 자동 완성</span>
                <span>실시간 데이터 조회</span>
                <span>건물 자동 검색</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/api4.png" alt="주소 선택 1" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
              <img src="/api5.png" alt="주소 선택 2" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>데이터 기반 투자 의사결정 지원</h3>
              <p>
                <strong>핵심 로직:</strong> 사용자가 입력한 "보증금"과 "월세"에서 월 지출액을 계산합니다.
                (예: 보증금 5천만원 + 월세 100만원 = 보증금 기회비용 포함 월 지출액 약 155만원)
                <br />
                그 다음 API로 조회한 최근 24개월 거래 데이터에서 해당 건물의 평균 거래가를 산출합니다.
                평균 거래가 대비 "월세가 손해인가?"를 객관적으로 판단할 수 있습니다.
                <br />
                <strong>중요한 점:</strong> 단순 평균이 아니라, 최근 거래 추세도 함께 표시하므로
                "가격이 오르는 시장인가? 내리는 시장인가?"도 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>기회비용 포함 계산</span>
                <span>통계 기반 비교</span>
                <span>시장 추세 파악</span>
              </div>
            </div>
            <img src="/api6.png" alt="투자 의사결정 지원" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>비즈니스 연결: 상담신청 플로우</h3>
              <p>
                데이터 비교만으로는 부족합니다. 사용자가 "실제로 전월세 전환을 고려한다"면,
                공인중개사나 자산관리사의 상담이 필요합니다.
                <br />
                데이터 분석 후 상담 신청 폼으로 자연스럽게 연결되어,
                사용자 정보(이름, 연락처, 업종, 상담 내용)를 수집합니다.
                개인정보 수집 동의 체크박스로 법적 요건을 만족하고,
                모든 상담 신청은 MySQL에 저장되어 관리자가 추적하고 응답할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>고객 전환 플로우</span>
                <span>개인정보 보호</span>
                <span>CRM 연계</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <img src="/api7.png" alt="상담신청 1" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
              <img src="/api8.png" alt="상담신청 2" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
              <img src="/api9.png" alt="상담신청 3" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담신청 전: 사용자 전환율 추적</h3>
              <p>
                데이터 비교를 완료한 사용자 중 몇 명이 상담을 신청했는지 실시간으로 추적합니다.
                "상담 전환된 사용자"와 "미전환 사용자"를 구분하여 관리하고,
                어떤 지역·부동산 유형의 전환율이 높은지 분석할 수 있습니다.
                이를 통해 마케팅 전략을 최적화할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>전환율 분석</span>
                <span>사용자 세그먼테이션</span>
                <span>마케팅 인사이트</span>
              </div>
            </div>
            <img src="/api12.png" alt="상담신청 전 전환율" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담신청 후: 상태 변화 및 메모 관리</h3>
              <p>
                상담 신청 후 진행 상태를 추적합니다.
                "접수 → 검토 중 → 상담 완료 → 계약 진행" 같은 상태 변화를 기록하고,
                각 단계에서 담당자의 메모를 남길 수 있습니다.
                사용자와 관리자 모두 실시간으로 진행 상황을 파악할 수 있으며,
                메모를 통해 구체적인 피드백을 주고받을 수 있습니다.
              </p>
              <div className="project-tags">
                <span>상태 추적</span>
                <span>메모 관리</span>
                <span>실시간 커뮤니케이션</span>
              </div>
            </div>
            <img src="/api11.png" alt="상담신청 후 상태변화" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담신청 및 견적 생성 통계</h3>
              <p>
                부동산 정보 조회 → 상담신청 → 견적 생성으로 이어지는 사용자의 여정을 분석합니다.
                각 단계별 전환율을 파악하여 어떤 조건의 부동산이 관심도가 높은지,
                상담신청 후 견적까지 생성하는 사용자의 비율이 얼마나 되는지 추적합니다.
              </p>
              <div className="project-tags">
                <span>상담신청 통계</span>
                <span>견적 생성 분석</span>
                <span>전환율 추적</span>
              </div>
            </div>
            <img src="/api13.png" alt="상담신청 및 견적 생성 통계" className="project-image" style={{ maxHeight: '700px', objectFit: 'contain' }} />
          </article>
        </div>
      </section>

      <section className="about-section">
        <h2>사용된 API 상세 분석</h2>
        <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ marginTop: 0, fontSize: '16px', fontWeight: '600' }}>정부 API (국토교통부 실거래가 OpenAPI)</h3>
          <p style={{ margin: '8px 0', fontSize: '14px' }}>
            <strong>제공자:</strong> 국토교통부 (data.go.kr)
            <br />
            <strong>인증 방식:</strong> API 서비스 키(serviceKey) 기반 인증
            <br />
            <strong>데이터 범위:</strong> 최근 24개월 부동산 실거래가 정보
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>부동산 유형별 API 엔드포인트</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>아파트</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcAptTradeDev</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcAptTradeDev/getRTMSDataSvcAptTradeDev</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>빌라/연립</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcSHTrade</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcSHTrade/getRTMSDataSvcSHTrade</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>오피스텔</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcOffiTrade</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcOffiTrade/getRTMSDataSvcOffiTrade</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>사무실/상가/숙박</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcNrgTrade</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcNrgTrade/getRTMSDataSvcNrgTrade</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>공장/창고</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcInduTrade</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcInduTrade/getRTMSDataSvcInduTrade</span></td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: '600', backgroundColor: '#f9f9f9' }}>토지</td>
                <td style={{ padding: '10px' }}><strong>RTMSDataSvcLandTrade</strong><br /><span style={{ fontSize: '12px', color: '#666' }}>https://apis.data.go.kr/1613000/RTMSDataSvcLandTrade/getRTMSDataSvcLandTrade</span></td>
              </tr>
            </tbody>
          </table>
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
