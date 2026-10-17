"use client";

// components/ExamExplorer.tsx
import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";

import ExamCard, { CountMode } from "./ExamCard";
import { Category, CATEGORY_LABEL, exams } from "@/data/exam";

// আজকের তারিখ (ঢাকা সময়), "YYYY-MM-DD"
function todayInDhaka() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());
}

const CATEGORIES = Object.keys(CATEGORY_LABEL) as Category[];

export default function ExamExplorer() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | "all">("all");
  const [mode, setMode] = useState<CountMode>("untilExam");
  const [today, setToday] = useState<string | null>(null);

  // হাইড্রেশন মিসম্যাচ এড়াতে আজকের তারিখ client এ সেট করছি
  useEffect(() => setToday(todayInDhaka()), []);

  const fuse = useMemo(
    () =>
      new Fuse(exams, {
        keys: ["university", "shortName", "unit", "id"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    []
  );

  const list = useMemo(() => {
    const base = query.trim() ? fuse.search(query.trim()).map((r) => r.item) : exams;
    const filtered = cat === "all" ? base : base.filter((e) => e.category === cat);
    // তারিখ অনুযায়ী সাজানো
    return [...filtered].sort((a, b) => a.dates[0].localeCompare(b.dates[0]));
  }, [query, cat, fuse]);

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
      active
        ? "border-slate-900 bg-slate-900 text-white"
        : "border-slate-300 bg-white text-slate-700 hover:border-slate-500"
    }`;

  return (
    <section>
      {/* সার্চ */}
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          বিশ্ববিদ্যালয় বা ইউনিট খোঁজো
        </label>
        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="বিশ্ববিদ্যালয়ের নাম খোঁজো, যেমন: বুয়েট, DU, জগন্নাথ"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        />
      </div>

      {/* ক্যাটাগরি ফিল্টার */}
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="ক্যাটাগরি">
        <button onClick={() => setCat("all")} className={chip(cat === "all")}>
          সব
        </button>
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={chip(cat === c)}>
            {CATEGORY_LABEL[c]}
          </button>
        ))}
      </div>

      {/* কাউন্টডাউন মোড */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">{list.length}টি পরীক্ষা পাওয়া গেছে</p>
        <div className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-sm">
          <button
            onClick={() => setMode("untilExam")}
            className={`rounded-md px-3 py-1.5 ${
              mode === "untilExam" ? "bg-slate-900 text-white" : "text-slate-700"
            }`}
          >
            আজ থেকে
          </button>
          <button
            onClick={() => setMode("fromResult")}
            className={`rounded-md px-3 py-1.5 ${
              mode === "fromResult" ? "bg-slate-900 text-white" : "text-slate-700"
            }`}
          >
            ফল থেকে
          </button>
        </div>
      </div>

      {/* কার্ড লিস্ট */}
      {list.length > 0 ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e) => (
            <ExamCard key={e.id} exam={e} today={today} mode={mode} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-medium text-slate-800">কিছু পাওয়া যায়নি</p>
          <p className="mt-1 text-sm text-slate-600">
            অন্য বানানে খুঁজে দেখো, অথবা ক্যাটাগরি “সব” করে দাও।
          </p>
          <button
            onClick={() => {
              setQuery("");
              setCat("all");
            }}
            className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
          >
            ফিল্টার মুছে ফেলো
          </button>
        </div>
      )}
    </section>
  );
}