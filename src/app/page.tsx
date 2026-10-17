// app/page.tsx
import ExamExplorer from "@/components/ExamExplorer";
import { LAST_UPDATED, RESULT_DATE } from "@/data/exam";


const fmt = new Intl.DateTimeFormat("bn-BD", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dhaka",
});
const d = (iso: string) => new Date(`${iso}T12:00:00Z`);

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          ভর্তি পরীক্ষার তারিখ, এক জায়গায়
        </h1>
        <p className="mt-3 text-slate-600">
          ২০২৬–২৭ শিক্ষাবর্ষের বিশ্ববিদ্যালয়, ইঞ্জিনিয়ারিং ও মেডিকেল ভর্তি পরীক্ষা।
          HSC ফল প্রকাশের সম্ভাব্য তারিখ {fmt.format(d(RESULT_DATE))}।
        </p>
      </header>

      <ExamExplorer />

      <footer className="mt-12 border-t border-slate-200 pt-5 text-sm text-slate-500">
        সর্বশেষ আপডেট: {fmt.format(d(LAST_UPDATED))}। তারিখ বদলাতে পারে, ভর্তির আগে
        অবশ্যই সংশ্লিষ্ট বিশ্ববিদ্যালয়ের অফিসিয়াল বিজ্ঞপ্তি দেখে নিও।
      </footer>
    </main>
  );
}