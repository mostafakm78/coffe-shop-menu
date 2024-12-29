


import ProgressBarr from "@/components/progressbar";
import "./globals.css";



import { Metadata } from "next";

export const metadata: Metadata = {
    title: "کافه جیم",
    description: "سایت کافه جیم",
    icons : "4212NEW.jpg"
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-hero-pattern bg-center bg-cover backdrop-blur-sm backdrop-brightness-50 font-vazir">
        {children}
        <ProgressBarr />
      </body>
    </html>
  );
}
