import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Nav from "@/components/nav";

import "@/styles/globals.css";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Osama Mohammed | Junior Front-end Developer",
  description: "Osama Mohammed Junior Front-end Developer (open to work)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} antialiased`}>
        <main className="max-w-3xl px-4 mx-auto flex flex-col gap-4">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
