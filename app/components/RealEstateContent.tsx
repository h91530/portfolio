'use client';

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

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>
        <p>
          <strong>부동산 월세 vs 매입 비교 플랫폼</strong>은 국토교통부 실거래가 API를 활용하여 사용자가 현재 월세로 지출하는 비용과 매입 시 월 지출액을 실시간으로 비교할 수 있는 웹 플랫폼입니다.
          사용자가 관심 있는 부동산의 위치, 유형, 임대 조건을 입력하면 최근 거래 데이터를 바탕으로 월세 손해 여부를 판단하고, 구입이 이득인지 즉시 확인할 수 있습니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          많은 임차인들은 현재의 월세가 합리적인지, 구입이 더 나은 선택지인지 판단하기 어렵습니다.
          이 플랫폼은 정부 공개 데이터(실거래가)를 활용하여 객관적인 시장 데이터를 제공하고,
          사용자가 더 현명한 부동산 투자 결정을 내릴 수 있도록 돕습니다.
          세션 기반의 안전한 데이터 관리와 봇 탐지 시스템으로 서비스 무결성을 보장합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>기술 아키텍처:</strong> PHP와 MySQL로 백엔드를 구축하고, 국토교통부의 부동산 실거래가 OpenAPI와 통합합니다.
          아파트, 빌라, 오피스텔, 단독주택, 상가, 공장, 토지 등 8가지 부동산 유형별로 서로 다른 API 엔드포인트를 사용하여 정확한 거래 데이터를 조회합니다.
          클라이언트 측에서 지역 코드(lawd_cd)를 전송하여 정확한 동 단위 데이터 조회를 보장하며,
          User-Agent 검증으로 봇과 자동화 도구의 남용을 차단합니다.
        </p>

        <p style={{ marginTop: '20px', marginBottom: '20px' }}>
          <strong>주요 기능:</strong> 동적 주소 선택(시도 → 시군구 → 동), 실시간 건물 검색 및 필터링, 부동산 유형별 실거래가 데이터 조회,
          월세 vs 매입 비용 자동 계산, 세션 기반 단계별 데이터 저장(타임아웃 5분), 상담신청 폼 작성 및 DB 저장, 반응형 디자인(데스크톱/태블릿/모바일) 지원.
        </p>

        <p>
          <strong>주요 사용자:</strong> 월세 거주자, 부동산 투자 관심층, 전월세 전환을 검토 중인 임차인
          <br />
          <strong>핵심 목표:</strong> 정부 데이터 기반 객관적 비교 제공, 투명한 부동산 시장 정보 공개, 사용자의 현명한 투자 결정 지원
        </p>
      </section>

      <section className="about-section">
        <h2>주요 기능 및 프로세스</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <h3>동적 주소 선택 시스템</h3>
              <p>
                사용자가 시도(광역시) → 시군구 → 동 순서로 선택하면 각 단계가 순차적으로 활성화됩니다.
                클라이언트에서 지역 코드(lawd_cd)를 전송하여 정확한 동 단위 구분을 보장하고,
                마스킹된 지번은 하단에 배치하여 사용자 경험을 최적화합니다.
              </p>
              <div className="project-tags">
                <span>계층형 드롭다운</span>
                <span>지역 코드 기반</span>
                <span>순차적 활성화</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>부동산 유형별 실거래가 API</h3>
              <p>
                국토교통부의 부동산 유형별 공개 API를 정확하게 매핑하여 구현했습니다.
                지원하는 부동산 유형은 아파트, 빌라, 오피스텔, 사무실, 상가, 숙박, 공장, 토지 8가지이며,
                각 유형에 따라 서로 다른 API 엔드포인트를 활용합니다:
              </p>
              <ul style={{ marginTop: '12px', marginBottom: '12px', paddingLeft: '20px' }}>
                <li><strong>아파트:</strong> RTMSDataSvcAptTradeDev</li>
                <li><strong>빌라/연립주택:</strong> RTMSDataSvcSHTrade</li>
                <li><strong>오피스텔:</strong> RTMSDataSvcOffiTrade</li>
                <li><strong>단독주택/사무실/상가/숙박:</strong> RTMSDataSvcNrgTrade</li>
                <li><strong>공장/창고:</strong> RTMSDataSvcInduTrade</li>
                <li><strong>토지:</strong> RTMSDataSvcLandTrade</li>
              </ul>
              <p>
                선택한 주소와 부동산 유형에 맞는 API를 호출하여 최근 24개월의 실거래가 데이터를 조회합니다.
                조회된 데이터에서 건물명을 자동 추출하고, 정확도 순으로 정렬하여 드롭다운 목록으로 생성합니다.
                사용자가 건물을 선택하면 해당 부동산의 최근 거래가를 바탕으로 월세 vs 매입 비교 계산을 수행합니다.
              </p>
              <div className="project-tags">
                <span>아파트·빌라·오피스텔·사무실·상가·숙박·공장·토지</span>
                <span>24개월 거래 데이터</span>
                <span>자동 건물 추출</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>월세 vs 매입 비용 비교</h3>
              <p>
                사용자가 보증금과 월세를 입력하면 시스템이 자동으로 월 지출액을 계산합니다.
                실거래가 데이터의 평균 거래가와 비교하여 현재 월세가 손해인지, 구입이 이득인지를 즉시 판단할 수 있습니다.
                이를 통해 사용자는 객관적인 데이터 기반으로 전월세 전환 여부를 검토할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>자동 계산</span>
                <span>비용 비교</span>
                <span>투자 판단</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>세션 기반 보안 & 봇 탐지</h3>
              <p>
                단계별 사용자 입력값을 세션에 저장하며, 5분 타임아웃으로 데이터 보안을 보장합니다.
                User-Agent 검증을 통해 봇과 자동화 도구의 남용을 차단하고, 의심 활동을 로깅하여 403 Forbidden을 반환합니다.
                이는 API 남용 방지와 서비스 안정성 확보를 동시에 달성합니다.
              </p>
              <div className="project-tags">
                <span>세션 관리</span>
                <span>User-Agent 검증</span>
                <span>봇 탐지</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>상담신청 & 데이터 관리</h3>
              <p>
                비교 결과 후 사용자는 이름, 연락처, 업종, 상담 내용을 입력하여 상담을 신청할 수 있습니다.
                개인정보 수집 동의 체크박스로 법적 요건을 충족하고, 모든 상담 데이터는 MySQL 데이터베이스에 저장되어
                관리자가 체계적으로 관리하고 응답할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>상담 신청</span>
                <span>개인정보 동의</span>
                <span>DB 저장</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>반응형 디자인 & 최적화</h3>
              <p>
                데스크톱(1920px 이상), 태블릿(768px), 모바일(480px) 3가지 뷰포트에 최적화된 반응형 디자인을 제공합니다.
                파란색(#4299e1)을 메인 컬러로 하는 미니멀한 UI/UX로 사용자가 직관적으로 서비스를 이용할 수 있으며,
                Nginx 기반 SSL 보안과 Let's Encrypt 인증서로 HTTPS 보안을 보장합니다.
              </p>
              <div className="project-tags">
                <span>반응형 디자인</span>
                <span>CSS 최적화</span>
                <span>HTTPS 보안</span>
              </div>
            </div>
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

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>기술적 구현 방식</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>법정동코드(LAWD_CD) 활용:</strong> 자체 legal_dong 테이블에서 법정동코드를 조회하여 정확한 지역 단위 데이터 조회</li>
            <li><strong>병렬 요청 최적화:</strong> PHP cURL Multi를 활용하여 24개월 데이터를 병렬로 수집하여 응답시간 최소화</li>
            <li><strong>지번 마스킹 처리:</strong> API 응답의 마스킹된 지번을 정확도 순으로 정렬하여 사용자에게 최우선 건물명 제시</li>
            <li><strong>거래가 통계 계산:</strong> 선택된 건물의 최근 24개월 거래데이터를 집계하여 평균 거래가 산출</li>
            <li><strong>XML 파싱:</strong> 정부 API 응답(XML)을 PHP SimpleXML로 파싱하여 구조화된 데이터로 변환</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#fff3cd', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
          <strong>주요 장점:</strong> 공식 정부 API로 높은 신뢰성, 실시간 실거래가 데이터, 부동산 유형별 상세 정보 제공
          <br />
          <strong>기술적 도전:</strong> 지번 마스킹(정확도 정렬로 해결), 월단위 데이터만 제공, API 응답시간(병렬 요청으로 최적화)
        </div>
      </section>

      <section className="about-section">
        <h2>기술 스택</h2>
        <div className="about-skills">
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skill-chips">
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-chips">
              <span>Vanilla JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>API & Infrastructure</h3>
            <div className="skill-chips">
              <span>국토교통부 OpenAPI</span>
              <span>Nginx</span>
              <span>Let's Encrypt SSL</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
