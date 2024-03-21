/* eslint-disable no-restricted-imports */
import "./globals.css";

/* eslint-enable no-restricted-imports */
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import { Footer } from "@/components/footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  description: "Task Nest",
  title: "Task Nest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <div className="h-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
