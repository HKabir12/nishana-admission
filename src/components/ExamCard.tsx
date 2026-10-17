// components/ExamCard.tsx

import { Category, CATEGORY_LABEL, daysBetween, Exam, prepTime } from "@/data/exam";

export type CountMode = "untilExam" | "fromResult";

const bn = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);

const fmt = new Intl.DateTimeFormat("bn-BD", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dhaka",
});

const fmtShort = new Intl.DateTimeFormat("bn-BD", {
  day: "numeric",
  month: "long",
  timeZone: "Asia/Dhaka",
});

const fmtDay = new Intl.DateTimeFormat("bn-BD", {
  weekday: "long",
  timeZone: "Asia/Dhaka",
});

// ISO "YYYY-MM-DD" -> Date (UTC noon, যাতে টাইমজোনে দিন না বদলায়)
const d = (iso: string) => new Date(`${iso}T12:00:00Z`);

const STRIPE: Record<Category, string> = {
  engineering: "bg-sky-600",
  medical: "bg-rose-600",
  public: "bg-emerald-700",
  cluster: "bg-amber-600",
  military: "bg-slate-700",
};

const BADGE: Record<Category, string> = {
  engineering: "bg-sky-50 text-sky-800 ring-sky-200",
  medical: "bg-rose-50 text-rose-800 ring-rose-200",
  public: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  cluster: "bg-amber-50 text-amber-900 ring-amber-200",
  military: "bg-slate-100 text-slate-800 ring-slate-300",
};

function dateLabel(exam: Exam) {
  if (exam.endDate) {
    return `${fmtShort.format(d(exam.dates[0]))} – ${fmt.format(d(exam.endDate))}`;
  }
  return exam.dates.map((x) => fmt.format(d(x))).join(" ও ");
}

function countdown(exam: Exam, today: string | null, mode: CountMode) {
  const first = exam.dates[0];
  const last = exam.endDate ?? exam.dates[exam.dates.length - 1];

  if (mode === "fromResult") {
    return { big: prepTime(first), small: "ফল প্রকাশের পর প্রস্তুতির সময়", past: false };
  }
  if (!today) return { big: "—", small: "", past: false };

  const left = daysBetween(today, first);
  if (daysBetween(today, last) < 0) return { big: "শেষ", small: "পরীক্ষা হয়ে গেছে", past: true };
  if (left <= 0) return { big: "চলছে", small: "আজ পরীক্ষা", past: false };
  return { big: `${bn(left)} দিন`, small: "বাকি", past: false };
}

export default function ExamCard({
  exam,
  today,
  mode,
}: {
  exam: Exam;
  today: string | null;
  mode: CountMode;
}) {
  const c = countdown(exam, today, mode);

  return (
    <article
      className={`relative flex overflow-hidden rounded-xl border border-slate-200 bg-white ${
        c.past ? "opacity-60" : ""
      }`}
    >
      <div className={`w-1.5 shrink-0 ${STRIPE[exam.category]}`} aria-hidden />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold leading-snug text-slate-900">
              {exam.university}
            </h3>
            {exam.unit && (
              <p className="mt-0.5 text-sm text-slate-600">
                {exam.shortName} · {exam.unit}
              </p>
            )}
            {!exam.unit && (
              <p className="mt-0.5 text-sm text-slate-600">{exam.shortName}</p>
            )}
          </div>

          <div className="shrink-0 text-right">
            <p className="text-lg font-bold leading-tight text-slate-900">{c.big}</p>
            <p className="text-xs text-slate-500">{c.small}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${BADGE[exam.category]}`}
          >
            {CATEGORY_LABEL[exam.category]}
          </span>
          {exam.tentative && (
            <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-800 ring-1 ring-inset ring-orange-200">
              সম্ভাব্য তারিখ
            </span>
          )}
        </div>

        <div className="mt-auto border-t border-slate-100 pt-3 text-sm">
          <p className="font-medium text-slate-800">{dateLabel(exam)}</p>
          {!exam.endDate && exam.dates.length === 1 && (
            <p className="text-slate-500">{fmtDay.format(d(exam.dates[0]))}</p>
          )}
          {exam.note && <p className="mt-1 text-xs text-slate-500">{exam.note}</p>}
          {exam.link && (
            <a
              href={exam.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs font-medium text-emerald-800 underline underline-offset-2"
            >
              অফিসিয়াল সাইট
            </a>
          )}
        </div>
      </div>
    </article>
  );
}