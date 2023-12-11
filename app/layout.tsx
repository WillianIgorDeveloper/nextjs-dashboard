import '@/app/ui/global.css';
import { firaSans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
