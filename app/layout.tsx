import type { ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

export const metadata = {
  title: 'Glow & Bloom - Makeup & Buket Bunga',
  description: 'Jasa makeup artist dan buket bunga profesional',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}