import type { Metadata } from "next";
import { Roboto, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const interTight = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Prepwise",
  description: "Study with AI. Practice more, learn faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${interTight.variable} h-full antialiased`}
    >
      <body>
        <SmoothScroll>
          <Navbar />
          <main className="flex min-h-full flex-col">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
