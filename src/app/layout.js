import './globals.css'; // Your global styles
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: 'Juwon Han Developer Portfolio',
  description: 'A short run down of my professional career.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} graph-grid-background`}>
        {children}
      </body>
    </html>
  );
}