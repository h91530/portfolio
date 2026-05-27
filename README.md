# 양태현 포트폴리오

개인 포트폴리오 웹사이트입니다. Next.js와 TypeScript를 사용하여 만들었습니다.

## 🚀 기능

- **홈페이지**: 간단한 자기소개와 CTA 버튼
- **소개 섹션**: 개인 소개 및 경력 설명
- **프로젝트 섹션**: 진행했던 프로젝트 소개
- **기술 스택**: 보유한 기술과 도구 리스트
- **연락처**: 이메일, GitHub, LinkedIn 등 연락처 정보

## 🛠️ 기술 스택

- **Frontend**: React, Next.js 15, TypeScript
- **Styling**: CSS3
- **Build Tool**: Next.js
- **Deployment**: Vercel 추천

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 포트폴리오를 확인할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 폴더 구조

```
.
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   └── globals.css         # 전역 스타일
├── public/                 # 정적 파일
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## ✏️ 커스터마이징

### 프로젝트 정보 수정
`app/page.tsx`의 `projects` 배열을 수정하여 프로젝트 정보를 업데이트할 수 있습니다.

### 기술 스택 수정
`app/page.tsx`의 `skills` 배열을 수정하여 기술 스택을 업데이트할 수 있습니다.

### 스타일 변경
`app/globals.css`를 수정하여 색상, 폰트, 레이아웃을 커스터마이징할 수 있습니다.

## 📝 라이센스

MIT License - 자유롭게 수정하고 사용할 수 있습니다.

## 👨‍💻 개발자

양태현 - [h915300@gmail.com](mailto:h915300@gmail.com)
