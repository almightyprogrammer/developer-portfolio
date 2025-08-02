import './globals.css'; // Your global styles
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// This is the correct way to define and export the component
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} graph-grid-background mx-2`}>
        {children}
      </body>
    </html>
  );
}