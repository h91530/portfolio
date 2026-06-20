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
          단순 게시판이 아니라 <strong>본인인증·결제·실시간 알림까지 갖춘 실제 서비스</strong>가 필요했고, PC 웹과 모바일 웹 환경을 모두 지원해야 했습니다.
        </p>

        <p>
          이를 위해 <strong>PC 버전과 모바일 버전을 각각 구축</strong>하고, 회원·공고·지원·결제·관리자 기능을 하나의 플랫폼으로 통합했습니다.
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
                <strong>PHP(MVC 구조):</strong> 회원·공고·검색·결제 등 <strong>모든 기능을 절차적 레거시 코드가 아닌 MVC 패턴으로 구조화</strong>했습니다. 요청 라우팅(Controller)·비즈니스 로직(Model)·화면(View)을 분리해 코드의 재사용성과 유지보수성을 높였습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>세션 인증:</strong> 로그인 시 세션에 회원 정보·유형을 저장하고, 요청마다 서버에서 권한을 검증하는 구조로 구성했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>MySQL:</strong> 검색·정렬이 잦은 채용공고 특성에 맞춰 인덱스를 설계하고, 사용자 입력은 <strong>Prepared Statement(파라미터 바인딩)</strong>로 처리해 SQL 인젝션을 방지했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>외부 API 연동:</strong> 본인인증(PASS)·SMS·이메일은 서버-서버 통신과 콜백/리다이렉트로 연동하고, 인증 결과를 서버에서 검증해 위·변조를 차단했습니다.
              </p>
              <p>
                <strong>PC · 모바일 이원화:</strong> 공통 백엔드를 두고 디바이스에 따라 뷰를 분기해, 각 환경에 맞는 화면과 인터랙션을 최적화했습니다.
              </p>
              <div className="project-tags">
                <span>PHP</span>
                <span>MVC 구조</span>
                <span>MySQL</span>
                <span>세션 인증</span>
                <span>Prepared Statement</span>
              </div>
            </div>
            <img src="/telemon1.png" alt="기술 아키텍처" className="project-image" />
          </article>
        </div>
      </section>

      <section className="about-section" id="design">
        <h2>핵심 설계 — 회원 · 공고 · 노출 구조</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p>
                이 플랫폼의 핵심은 <strong>회원 유형별 권한과 채용공고의 노출 우선순위를 규칙으로 분리해 설계</strong>한 것입니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>권한 분리:</strong> 비로그인 방문자·구직자·기업 회원·관리자로 접근 범위를 나눴습니다. 비로그인 방문자도 공고 검색과 비회원 지원이 가능하되, 회원·결제·관리 기능은 세션의 회원 유형을 기준으로 서버에서 검증했습니다. 화면에서 메뉴를 숨기는 데 그치지 않고 요청 단에서 다시 검증해 우회를 막았습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>공고 노출 로직:</strong> 공고에 등급·노출 우선순위 값을 두고, 결제 상태와 등급(HOT · 추천 · 플래티넘)에 따라 <strong>정렬 가중치를 적용한 쿼리</strong>로 주요 영역에 우선 노출되도록 했습니다.
              </p>
              <p>
                <strong>검색:</strong> 지역·업종·직무·경력 등 선택된 조건만 <strong>동적으로 WHERE 절을 조합</strong>하고, 자주 쓰이는 조건에 인덱스를 걸어 응답 속도를 확보했습니다.
              </p>
              <div className="project-tags">
                <span>세션 기반 권한 검증</span>
                <span>정렬 가중치 쿼리</span>
                <span>동적 검색 쿼리</span>
              </div>
            </div>
            <img src="/telemon8.png" alt="회원 및 공고 노출 구조" className="project-image" />
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
                인증 요청 후 돌아오는 <strong>콜백 결과를 서버에서 검증</strong>하고 세션과 연계해, 실명·연령·휴대폰 인증을 한 번에 안전하게 처리했습니다. 그 결과 회원가입 전환율을 개선했습니다.
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
                <strong>비회원이 채용공고에 지원할 때</strong> 인증번호를 발급하고 만료 시간 내 입력값과 대조해 휴대폰 번호를 검증합니다.
                인증이 끝나면 <strong>지원 저장과 담당자 자동 문자 발송이 이어지는 흐름</strong>으로 처리해, 기업의 신청 현황 관리를 실시간으로 지원합니다.
              </p>
              <div className="project-tags">
                <span>SMS 인증</span>
                <span>자동 발송</span>
                <span>실시간 알림</span>
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
              <h3>이메일 상담 답변 시스템</h3>
              <p>
                사용자의 <strong>상담 신청</strong>이 들어오면 관리자가 <strong>스마트에디터</strong>로 답변을 작성하고,
                발송 시 실제 사용자 이메일로 답변이 전송됩니다. 효율적인 상담 관리와 고객 만족도 향상을 함께 달성했습니다.
              </p>
              <div className="project-tags">
                <span>스마트에디터</span>
                <span>이메일 자동 발송</span>
                <span>상담 관리</span>
              </div>
            </div>
            <div className="project-images-group">
              <img src="/telemon6.png" alt="이메일 상담 답변 시스템 1" className="project-image" />
              <img src="/telemon7.png" alt="이메일 상담 답변 시스템 2" className="project-image" />
            </div>
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>스마트한 채용공고 검색</h3>
              <p>
                지역·업종·직무·경력 등 선택된 조건만 <strong>동적으로 쿼리에 반영</strong>하는 다중 필터 검색을 구현했습니다.
                인기공고·HOT 리워드·플래티넘 등급 등 공고 타입을 노출 우선순위와 함께 정렬해 제공합니다.
              </p>
              <div className="project-tags">
                <span>동적 다중 필터</span>
                <span>인덱스 최적화</span>
                <span>우선순위 정렬</span>
              </div>
            </div>
            <img src="/telemon2.png" alt="채용공고 검색" className="project-image" />
          </article>

          <article className="project-card">
            <div className="project-content">
              <h3>유료 공고 광고 시스템</h3>
              <p>
                기업 회원이 <strong>유료 광고 서비스</strong>를 결제하면 해당 공고가 주요 노출 영역(HOT · 추천 공고 등)에 우선 표시됩니다.
                기업의 채용 성공률을 높이는 동시에 플랫폼 수익화를 달성했습니다.
              </p>
              <div className="project-tags">
                <span>광고 노출</span>
                <span>결제 연동</span>
                <span>우선순위</span>
              </div>
            </div>
            <img src="/telemon8.png" alt="유료 공고 광고 시스템" className="project-image" />
          </article>

          <article className="project-card admin-page-card">
            <div className="admin-page-content">
              <h3>관리자 페이지</h3>
              <p>
                전체 플랫폼 운영을 위한 관리자 페이지를 직접 구축했습니다.
                회원 관리·공고 승인·결제 현황·상담 관리를 통합적으로 다루며, <strong>집계 쿼리 기반 통계 대시보드</strong>로 주요 지표를 한눈에 파악할 수 있습니다.
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
        </div>
      </section>

      <section className="about-section" id="learning">
        <h2>어려웠던 점과 해결</h2>
        <div className="about-projects">
          <article className="project-card">
            <div className="project-content">
              <p style={{ marginBottom: '12px' }}>
                가장 까다로웠던 부분은 <strong>본인인증(PASS)·문자·이메일 같은 외부 서비스 연동</strong>이었습니다. 각 서비스의 응답 형식과 실패 케이스가 달라, 인증 콜백이 중간에 끊기거나 문자가 중복·누락 발송되는 상황을 처리해야 했습니다.
              </p>
              <p style={{ marginBottom: '12px' }}>
                그래서 <strong>인증 상태를 세션으로 관리</strong>하고, 인증번호의 만료 시간과 검증 단계를 명확히 나눴습니다. 특히 <strong>비회원 지원 → 문자 인증 → 지원 저장 → 담당자 자동 발송</strong>으로 이어지는 흐름에서, 인증을 통과한 요청만 다음 단계로 넘어가도록 처리해 <strong>중복 지원과 발송을 방지</strong>했습니다.
              </p>
              <p>
                또한 외부 응답의 성공/실패를 명확히 구분해, 실패 시 사용자에게 안내하고 재시도할 수 있게 했습니다. 그 결과 외부 서비스 장애 상황에서도 <strong>인증과 알림이 일관되게 동작</strong>하도록 만들 수 있었습니다.
              </p>
              <p style={{ marginTop: '16px', marginBottom: '16px' }}>
                <strong>배운 점</strong>
              </p>
              <p>
                직접 통제할 수 없는 <strong>외부 서비스를 다룰 때는 정상 흐름보다 실패·예외 처리를 먼저 설계하는 것</strong>이 안정적인 서비스의 핵심이라는 점을 배웠습니다.
              </p>
              <div className="project-tags">
                <span>세션 기반 인증 상태</span>
                <span>중복 요청 방지</span>
                <span>예외 처리 설계</span>
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
