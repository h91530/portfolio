import { Metadata } from 'next';
import ClientLayout from './client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '양태현 포트폴리오',
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
