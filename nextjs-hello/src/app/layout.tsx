import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tản học lập trình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='font-primary'
      >
        {children}
      </body>
    </html>
  );
}
