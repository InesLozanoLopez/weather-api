import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'weather app to know the weather on a specific location',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/appIcon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
