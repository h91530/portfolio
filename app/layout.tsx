import { Metadata } from 'next';
import ClientLayout from './client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '양태현 포트폴리오',
  // referrer에 전체 경로(path)까지 포함되도록 정책 완화 (기본값은 경로를 떼고 origin만 보냄)
  referrer: 'no-referrer-when-downgrade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
