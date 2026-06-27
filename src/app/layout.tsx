import type { Metadata } from "next";
import { Bebas_Neue, Open_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phoenix Fitness - Train Smarter, Get Stronger, Transform Better",
  description:
    "Experience premium fitness services with Phoenix Fitness. We offer Strength, Cardio, Functional, and Personal Training programs tailored for your ultimate transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
