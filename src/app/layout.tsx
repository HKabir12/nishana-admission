// app/layout.tsx
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "নিশানা ভর্তি ক্যালেন্ডার | ২০২৬–২৭ ভর্তি পরীক্ষার তারিখ",
  description:
    "বুয়েট, ঢাকা বিশ্ববিদ্যালয়, মেডিকেল, গুচ্ছসহ সব ভর্তি পরীক্ষার তারিখ ও কাউন্টডাউন এক জায়গায়।",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className={`${hind.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}