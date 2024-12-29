
import ProgressBarr from "@/components/progressbar";
import "./globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "کافه جیم",
    description: "سایت کافه جیم",
    icons : "../image/4212NEW.jpg"
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir bg-hero-pattern backdrop-blur-sm bg-center bg-cover scroll-smooth bg-fixed">
        {children}
        <ProgressBarr />
      </body>
    </html>
  );
}
