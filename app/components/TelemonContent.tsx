'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TelemonContent() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-avatar telemon-avatar">
          <img src="/telemon.svg" alt="Telemon" />
        </div>
        <h1>TELEMON</h1>
        <p className="about-tagline">PHP 기반 구인구직 플랫폼 (PC · 모바일)</p>
        <div className="about-quick-links">
          <a href="https://telemon.co.kr/" target="_blank" rel="noreferrer">
            PC버전
          </a>
          <a href="https://telemon.co.kr/mo" target="_blank" rel="noreferrer">
            모바일버전
          </a>
        </div>
        <p style={{ margin: '16px auto 0', fontSize: '16px', color: '#666', maxWidth: '640px', textAlign: 'center', lineHeight: '1.7' }}>
          실제 운영 중인 서비스입니다. PC 웹과 모바일 웹을 각각 구축했습니다.
        </p>
      </section>

      <section className="telemon-images">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="telemon-swiper"
        >
          <SwiperSlide>
            <img src="/telemon1.png" alt="Telemon 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/telemon2.png" alt="Telemon 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/telemon3.png" alt="Telemon 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="about-section" id="overview">
        <h2>프로젝트 개요</h2>

        <p>
          <strong>TELEMON(텔레몬)</strong>은 구직자와 기업을 연결하는 종합 구인구직 플랫폼입니다. 지역·업종·직무 등 다양한 조건으로 채용공고를 검색하고, 온라인·전화 지원 또는 콜백 신청으로 기업에 지원할 수 있습니다.
        </p>

        <p>
          <strong>본인인증·실시간 알림 등 실제 서비스에 필요한 기능</strong>을 갖춘 상용 플랫폼으로, <strong>PC 웹과 모바일 웹을 각각 구축</strong>해 두 환경을 모두 지원합니다.
        </p>

        <p style={{ marginTop: '16px', marginBottom: '12px' }}>
          <strong>담당 역할:</strong><br />
          프로젝트에 풀스택으로 참여하여 퍼블리싱·프론트엔드·백엔드 직무를 담당했으며, PC·모바일 버전 개발에 참여했습니다.
        </p>

        <p style={{ marginTop: '12px', marginBottom: '12px' }}>
          <strong>주요 사용자:</strong><br />
          비로그인 방문자 / 구직자 / 기업 회원 / 운영 관리자
        </p>

        <p style={{ marginBottom: '16px' }}>
          <strong>핵심 목표:</strong><br />
          안전한 본인인증 기반 회원 시스템 · 효율적인 채용공고 검색 · 광고 수익화 · 운영 자동화
        </p>

        <p>
          현재 PC·모바일 양쪽에서 실제 서비스로 운영되고 있습니다.
        </p>
      </section>

      <section className="about-section" id="tech">
        <h2>기술 선택 &amp; 아키텍처</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                안정적인 운영과 빠른 기능 확장을 위해 검증된 <strong>PHP · MySQL 기반 서버 구조</strong>를 선택했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>PHP(MVC 구조):</strong> 회원·공고·검색·지원 등 <strong>모든 기능을 절차적 레거시 코드가 아닌 MVC 패턴으로 구조화</strong>했습니다. 요청 라우팅(Controller)·비즈니스 로직(Model)·화면(View)을 분리해 코드의 재사용성과 유지보수성을 높였습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>세션 인증:</strong> 로그인 시 세션에 회원 정보·유형을 저장하고, 요청마다 서버에서 권한을 검증하는 구조로 구성했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>MySQL:</strong> 조회가 잦은 컬럼에 인덱스를 설계하고, 사용자 입력값을 SQL 쿼리에 직접 넣지 않고 <strong>Prepared Statement를 사용해 파라미터로 분리한 뒤 바인딩 처리</strong>하여 SQL 인젝션을 방지했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>외부 API 연동:</strong> 본인인증(PASS)·SMS·이메일은 서버-서버 통신과 콜백/리다이렉트로 연동하고, 인증 결과를 서버에서 검증해 위·변조를 차단했습니다.
              </p>
              <p>
                <strong>PC · 모바일 각각 구축:</strong> 서버는 공통으로 사용하고, PC와 모바일 화면을 각각 만들어 각 환경에 맞게 최적화했습니다.
              </p>
              <div className="project-tags">
                <span>PHP</span>
                <span>MVC 구조</span>
                <span>MySQL</span>
                <span>세션 인증</span>
                <span>Prepared Statement</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="design">
        <h2>핵심 설계 — 회원 유형별 권한 구조</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                이 플랫폼의 핵심은 <strong>회원 유형별로 접근 범위와 권한을 규칙으로 분리해 설계</strong>한 것입니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>권한 분리:</strong> 비로그인 방문자·구직자·기업 회원·관리자로 접근 범위를 나눴습니다. 비로그인 방문자도 공고 검색과 비회원 지원이 가능하되, 회원·관리 기능은 세션의 회원 유형을 기준으로 서버에서 검증했습니다.
              </p>
              <p>
                특히 화면에서 메뉴를 숨기는 데 그치지 않고 <strong>요청 단에서 서버가 다시 검증</strong>하도록 해, 직접 요청을 보내더라도 권한이 없으면 차단되도록 우회를 막았습니다.
              </p>
              <div className="project-tags">
                <span>회원 유형별 권한</span>
                <span>세션 기반 검증</span>
                <span>서버 측 우회 차단</span>
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
              <h3>PASS &amp; 소셜 로그인 연동</h3>
              <p>
                통신사 본인인증 서비스 <strong>PASS</strong>와 소셜 로그인을 연동했습니다.
                인증 요청 후 돌아오는 <strong>콜백 결과를 서버에서 검증</strong>하고 세션과 연계해, 실명·연령·휴대폰 인증을 한 번에 안전하게 처리했습니다. 그 결과 인증 완료 이후 별도 재입력 없이 회원가입 흐름이 자연스럽게 이어지도록 개선했습니다.
              </p>
              <div className="project-tags">
                <span>PASS API</span>
                <span>소셜 로그인</span>
                <span>본인인증</span>
              </div>
            </div>
            <img src="/telemon4.png" alt="PASS 및 소셜 로그인 연동" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>문자 인증 및 자동 발송 시스템</h3>
              <p>
                <strong>비회원이 채용공고에 지원할 때</strong> 서버에서 인증번호를 생성하고 <strong>CoolSMS로 문자를 발송</strong>한 뒤, 사용자가 입력한 인증번호를 만료 시간 내에 대조해 검증합니다.
                인증이 끝나면 <strong>지원 저장과 담당자 자동 문자 발송이 이어지는 흐름</strong>으로 처리해, 공고 신청 현황 관리를 실시간으로 지원합니다.
              </p>
              <div className="project-tags">
                <span>CoolSMS</span>
                <span>SMS 인증</span>
                <span>자동 발송</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{ width: '700px' }}>
                <img src="/telemon5.png" alt="문자 인증 및 발송 시스템" className="project-image" />
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>스마트한 채용공고 검색</h3>
              <p>
                지역·업종·직무·경력 등 다양한 조건으로 채용공고를 검색할 수 있도록 구현했습니다.
                페이지 진입 시 공고 데이터를 불러온 뒤, <strong>조건이 바뀌면 서버에 다시 요청하지 않고 브라우저에서 JavaScript로 필터링</strong>해 결과를 즉시 화면에 반영합니다. 인기공고·HOT 리워드·플래티넘 등급 등 공고 타입도 노출 우선순위에 따라 정렬해 제공합니다.
              </p>
              <div className="project-tags">
                <span>클라이언트 필터링</span>
                <span>JavaScript</span>
                <span>우선순위 정렬</span>
              </div>
            </div>
            <img src="/telemon2.png" alt="채용공고 검색" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>공고 광고 노출 시스템</h3>
              <p>
                <strong>유료 광고로 등록된 공고</strong>를 주요 노출 영역(HOT · 추천 공고 등)에 우선 표시하는 기능을 구현했습니다.
                공고 등급에 따라 노출 우선순위를 다르게 적용해, <strong>상위 노출을 원하는 기업이 자연스럽게 유료 광고를 선택하도록 유도</strong>하고, 이를 통해 플랫폼 수익으로 이어지는 구조를 만들었습니다.
              </p>
              <div className="project-tags">
                <span>광고 노출</span>
                <span>노출 우선순위</span>
                <span>광고 수익화</span>
              </div>
            </div>
            <img src="/telemon8.png" alt="유료 공고 광고 시스템" className="project-image" />
          </article>

          <article className="project-card admin-page-card">
            <div className="admin-page-content">
              <h3>관리자 페이지</h3>
              <p>
                전체 플랫폼 운영을 위한 관리자 페이지를 직접 구축했습니다.
                회원 관리·공고 승인·상담 관리를 통합적으로 다루며, <strong>집계 쿼리 기반 통계 대시보드</strong>로 주요 지표를 한눈에 파악할 수 있습니다.
              </p>
              <div className="project-tags">
                <span>회원 관리</span>
                <span>공고 승인</span>
                <span>통계 대시보드</span>
              </div>
            </div>
            <div className="admin-images-grid">
              <img src="/telemon9.png" alt="관리자 페이지 1" />
              <img src="/telemon10.png" alt="관리자 페이지 2" />
              <img src="/telemon11.png" alt="관리자 페이지 3" />
              <img src="/telemon12.png" alt="관리자 페이지 4" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>외부 공고 자동 수집 — URL 크롤링/파싱</h3>
              <p>
                플랫폼 오픈 이벤트의 일환으로, <strong>기업 대신 공고를 등록해주고 유료 광고 상품을 미리 체험</strong>할 수 있게 하는 기능을 구현했습니다.
                다른 플랫폼에 올라온 공고 <strong>URL만 입력하면, PHP 크롤러가 해당 페이지를 파싱해 제목·근무 조건·상세 내용 등을 텔레몬 양식에 맞게 자동으로 채워줍니다.</strong>
                관리자가 공고를 하나하나 직접 옮겨 적던 <strong>수작업을 없애 등록 업무를 크게 줄였고</strong>, 오픈 이벤트로 다량의 공고를 빠르게 올려 유료 서비스 전환을 자연스럽게 유도했습니다.
              </p>
              <div className="project-tags">
                <span>PHP 크롤러</span>
                <span>자동 파싱</span>
                <span>공고 자동 등록</span>
              </div>
            </div>
            <div className="project-images-group">
              <img src="/telemon13.png" alt="외부 공고 자동 수집 1" className="project-image" />
              <img src="/telemon15.png" alt="외부 공고 자동 수집 2" className="project-image" />
              <img src="/telemon14.png" alt="외부 공고 자동 수집 3" className="project-image" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>이메일 상담 답변 시스템</h3>
              <p>
                사용자의 <strong>상담 신청</strong>이 들어오면 관리자가 <strong>스마트에디터(WYSIWYG)</strong>로 답변을 작성하고,
                작성된 HTML 본문을 <strong>PHPMailer</strong>로 실제 사용자 이메일에 발송합니다. 효율적인 상담 관리와 고객 만족도 향상을 함께 달성했습니다.
              </p>
              <div className="project-tags">
                <span>스마트에디터</span>
                <span>PHPMailer</span>
                <span>이메일 발송</span>
              </div>
            </div>
            <div className="project-images-group">
              <img src="/telemon6.png" alt="이메일 상담 답변 시스템 1" className="project-image" />
              <img src="/telemon7.png" alt="이메일 상담 답변 시스템 2" className="project-image" />
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
                가장 까다로웠던 부분은 <strong>PASS 본인인증을 앱 웹뷰(WebView) 환경에서 동작시키는 것</strong>이었습니다. PC·모바일 웹에서는 정상 동작했지만, 특히 <strong>iOS 앱 웹뷰에서는 인증 완료 후 돌아와야 할 콜백이 호출되지 않아</strong> 인증을 마쳐도 결과가 화면으로 전달되지 않는 문제가 있었습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                원인은 iOS 웹뷰가 PASS 인증에서 사용하는 <strong>새 창(window.open) 기반 콜백을 정상적으로 처리하지 못하는 것</strong>이었습니다. 그래서 웹뷰 환경을 감지해, 새 창 방식 대신 <strong>같은 화면에서 이동(리다이렉트)하는 인증 방식으로 분기</strong>했습니다. 인증 결과는 서버 세션에 저장해두고, 인증 후 돌아온 페이지에서 세션의 결과를 읽어 화면에 반영하도록 처리했습니다.
              </p>
              <p>
                그 결과 PC·모바일 웹은 물론 <strong>iOS 앱 웹뷰에서도 콜백이 누락되지 않고</strong> 인증 결과가 안정적으로 화면에 이어지도록 만들 수 있었습니다.
              </p>
              <p style={{ marginTop: '16px', marginBottom: '16px' }}>
                <strong>배운 점</strong>
              </p>
              <p>
                이 경험을 통해 인증 문제는 단순한 상태 관리가 아니라, <strong>실행 환경에 따라 인증 흐름 자체를 설계해야 해결된다</strong>는 점을 배웠습니다.
              </p>
              <div className="project-tags">
                <span>PASS 본인인증</span>
                <span>웹뷰(WebView) 대응</span>
                <span>환경별 분기</span>
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
              <span>Apache</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>External API</h3>
            <div className="skill-chips">
              <span>PASS 본인인증</span>
              <span>SMS 인증</span>
              <span>이메일 발송</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
