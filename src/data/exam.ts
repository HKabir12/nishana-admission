// data/exams.ts
// নিশানা ভর্তি ক্যালেন্ডার — ২০২৬–২৭ শিক্ষাবর্ষ

export type Category =
  | "engineering"
  | "medical"
  | "public"
  | "cluster"
  | "military";

export type UnitType = "science" | "humanities" | "business" | "arts" | "other";

export type Exam = {
  id: string;
  university: string; // বাংলা নাম
  shortName: string; // DU, BUET ...
  unit?: string; // ইউনিটের নাম
  unitType: UnitType;
  category: Category;
  dates: string[]; // ISO (YYYY-MM-DD), একাধিক দিন হলে একাধিক
  endDate?: string; // একটানা কয়েকদিন চললে শেষ দিন (যেমন HSTU)
  tentative?: boolean; // তারিখ সম্ভাব্য হলে true
  note?: string;
  link?: string; // অফিসিয়াল ওয়েবসাইট (পরে বসাও)
};

// HSC ফল প্রকাশের সম্ভাব্য তারিখ — বদলালে শুধু এখানে বদলাও
export const RESULT_DATE = "2026-10-29";
export const LAST_UPDATED = "2026-10-17";

export const CATEGORY_LABEL: Record<Category, string> = {
  engineering: "ইঞ্জিনিয়ারিং",
  medical: "মেডিকেল",
  public: "পাবলিক বিশ্ববিদ্যালয়",
  cluster: "গুচ্ছ",
  military: "সামরিক",
};

export const exams: Exam[] = [
  { id: "medical-dental", university: "মেডিকেল-ডেন্টাল ভর্তি পরীক্ষা", shortName: "Medical", unitType: "science", category: "medical", dates: ["2026-12-04"], tentative: true, note: "তারিখটি সম্ভাব্য" },
  { id: "du-iba", university: "ঢাকা বিশ্ববিদ্যালয়", shortName: "DU", unit: "IBA", unitType: "business", category: "public", dates: ["2026-12-05"] },
  { id: "aaub", university: "অ্যাভিয়েশন অ্যান্ড অ্যারোস্পেস বিশ্ববিদ্যালয়", shortName: "AAUB", unitType: "science", category: "public", dates: ["2026-12-05"] },
  { id: "du-science", university: "ঢাকা বিশ্ববিদ্যালয়", shortName: "DU", unit: "বিজ্ঞান ইউনিট", unitType: "science", category: "public", dates: ["2026-12-12"] },
  { id: "ku-cd", university: "খুলনা বিশ্ববিদ্যালয়", shortName: "KU", unit: "C+D ইউনিট", unitType: "other", category: "public", dates: ["2026-12-17"] },
  { id: "mist-c", university: "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি", shortName: "MIST", unit: "C ইউনিট", unitType: "science", category: "military", dates: ["2026-12-18"] },
  { id: "ku-ab", university: "খুলনা বিশ্ববিদ্যালয়", shortName: "KU", unit: "A+B ইউনিট", unitType: "other", category: "public", dates: ["2026-12-18"] },
  { id: "du-humanities", university: "ঢাকা বিশ্ববিদ্যালয়", shortName: "DU", unit: "B ইউনিট (মানবিক)", unitType: "humanities", category: "public", dates: ["2026-12-19"] },
  { id: "mist-ab", university: "মিলিটারি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি", shortName: "MIST", unit: "A+B ইউনিট", unitType: "science", category: "military", dates: ["2026-12-19"] },
  { id: "du-arts", university: "ঢাকা বিশ্ববিদ্যালয়", shortName: "DU", unit: "E ইউনিট (চারুকলা)", unitType: "arts", category: "public", dates: ["2026-12-22"] },
  { id: "du-business", university: "ঢাকা বিশ্ববিদ্যালয়", shortName: "DU", unit: "C ইউনিট (ব্যবসায় শিক্ষা)", unitType: "business", category: "public", dates: ["2026-12-26"] },
  { id: "bup-fbs", university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস", shortName: "BUP", unit: "FBS", unitType: "business", category: "military", dates: ["2027-01-01", "2027-01-09"] },
  { id: "agri-cluster", university: "কৃষি গুচ্ছ", shortName: "Agri Cluster", unitType: "science", category: "cluster", dates: ["2027-01-02"] },
  { id: "bup-fass", university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস", shortName: "BUP", unit: "FASS", unitType: "humanities", category: "military", dates: ["2027-01-02"] },
  { id: "jnu-a", university: "জগন্নাথ বিশ্ববিদ্যালয়", shortName: "JnU", unit: "A ইউনিট (বিজ্ঞান)", unitType: "science", category: "public", dates: ["2027-01-03"] },
  { id: "jnu-e", university: "জগন্নাথ বিশ্ববিদ্যালয়", shortName: "JnU", unit: "E ইউনিট (চারুকলা)", unitType: "arts", category: "public", dates: ["2027-01-08"] },
  { id: "ru-b", university: "রাজশাহী বিশ্ববিদ্যালয়", shortName: "RU", unit: "B ইউনিট (ব্যবসায় শিক্ষা)", unitType: "business", category: "public", dates: ["2027-01-08"] },
  { id: "kuet", university: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "KUET", unitType: "science", category: "engineering", dates: ["2027-01-08"] },
  { id: "bup-fst", university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস", shortName: "BUP", unit: "FST+FET+FMS", unitType: "science", category: "military", dates: ["2027-01-08"] },
  { id: "bup-fsss", university: "বাংলাদেশ ইউনিভার্সিটি অব প্রফেশনালস", shortName: "BUP", unit: "FSSS", unitType: "humanities", category: "military", dates: ["2027-01-08"] },
  { id: "ru-c", university: "রাজশাহী বিশ্ববিদ্যালয়", shortName: "RU", unit: "C ইউনিট (বিজ্ঞান)", unitType: "science", category: "public", dates: ["2027-01-09"] },
  { id: "ruet", university: "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "RUET", unitType: "science", category: "engineering", dates: ["2027-01-14"] },
  { id: "jnu-b", university: "জগন্নাথ বিশ্ববিদ্যালয়", shortName: "JnU", unit: "B ইউনিট (মানবিক)", unitType: "humanities", category: "public", dates: ["2027-01-15"] },
  { id: "buet", university: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়", shortName: "BUET", unitType: "science", category: "engineering", dates: ["2027-01-16"] },
  { id: "ru-a", university: "রাজশাহী বিশ্ববিদ্যালয়", shortName: "RU", unit: "A ইউনিট (মানবিক)", unitType: "humanities", category: "public", dates: ["2027-01-16"] },
  { id: "cu-c", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "C ইউনিট (ব্যবসায় শিক্ষা)", unitType: "business", category: "public", dates: ["2027-01-19"] },
  { id: "jnu-c", university: "জগন্নাথ বিশ্ববিদ্যালয়", shortName: "JnU", unit: "C ইউনিট (ব্যবসায় শিক্ষা)", unitType: "business", category: "public", dates: ["2027-01-22"] },
  { id: "cuet", university: "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "CUET", unitType: "science", category: "engineering", dates: ["2027-01-23"] },
  { id: "jnu-d", university: "জগন্নাথ বিশ্ববিদ্যালয়", shortName: "JnU", unit: "D ইউনিট (সামাজিক বিজ্ঞান)", unitType: "humanities", category: "public", dates: ["2027-01-23"] },
  { id: "hstu", university: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "HSTU", unitType: "science", category: "public", dates: ["2027-01-24"], endDate: "2027-01-28" },
  { id: "sust-a", university: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "SUST", unit: "A ইউনিট", unitType: "science", category: "public", dates: ["2027-01-26"] },
  { id: "butex", university: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়", shortName: "BUTEX", unitType: "science", category: "engineering", dates: ["2027-01-29"] },
  { id: "sust-b", university: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", shortName: "SUST", unit: "B ইউনিট", unitType: "science", category: "public", dates: ["2027-01-29"] },
  { id: "cu-a", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "A ইউনিট (বিজ্ঞান)", unitType: "science", category: "public", dates: ["2027-01-30"] },
  { id: "cu-b1", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "B1 উপ-ইউনিট", unitType: "humanities", category: "public", dates: ["2027-02-03"] },
  { id: "cu-b2", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "B2 উপ-ইউনিট", unitType: "humanities", category: "public", dates: ["2027-02-04"] },
  { id: "cu-b", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "B ইউনিট (মানবিক)", unitType: "humanities", category: "public", dates: ["2027-02-05"] },
  { id: "cu-d", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "D ইউনিট (বিভাগ পরিবর্তন)", unitType: "other", category: "public", dates: ["2027-02-06"] },
  { id: "cu-d1", university: "চট্টগ্রাম বিশ্ববিদ্যালয়", shortName: "CU", unit: "D1 উপ-ইউনিট", unitType: "other", category: "public", dates: ["2027-02-08"] },
  { id: "gst-a", university: "GST গুচ্ছ", shortName: "GST", unit: "A ইউনিট (বিজ্ঞান)", unitType: "science", category: "cluster", dates: ["2027-03-12"] },
  { id: "gst-b", university: "GST গুচ্ছ", shortName: "GST", unit: "B ইউনিট (মানবিক)", unitType: "humanities", category: "cluster", dates: ["2027-03-19"] },
  { id: "gst-c", university: "GST গুচ্ছ", shortName: "GST", unit: "C ইউনিট (ব্যবসায় শিক্ষা)", unitType: "business", category: "cluster", dates: ["2027-03-20"] },
  { id: "gst-d", university: "GST গুচ্ছ", shortName: "GST", unit: "D ইউনিট", unitType: "other", category: "cluster", dates: ["2027-03-20"], tentative: true, note: "ছবিতে উল্লেখিত তারিখ, যাচাই করে নিও" },
];

// ---------- হেল্পার ----------

const DAY = 24 * 60 * 60 * 1000;

const toUTC = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
};

/** দুই তারিখের মধ্যে কত দিন (to - from) */
export function daysBetween(fromIso: string, toIso: string): number {
  return Math.round((toUTC(toIso) - toUTC(fromIso)) / DAY);
}

/** HSC ফল থেকে পরীক্ষা পর্যন্ত প্রস্তুতির সময়, যেমন "১ মাস ৫ দিন" */
export function prepTime(examIso: string, fromIso: string = RESULT_DATE): string {
  const a = new Date(toUTC(fromIso));
  const b = new Date(toUTC(examIso));
  let months =
    (b.getUTCFullYear() - a.getUTCFullYear()) * 12 +
    (b.getUTCMonth() - a.getUTCMonth());
  let anchor = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth() + months, a.getUTCDate()));
  if (anchor.getTime() > b.getTime()) {
    months -= 1;
    anchor = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth() + months, a.getUTCDate()));
  }
  const days = Math.round((b.getTime() - anchor.getTime()) / DAY);
  const bn = (n: number) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]);
  const parts: string[] = [];
  if (months) parts.push(`${bn(months)} মাস`);
  if (days || !months) parts.push(`${bn(days)} দিন`);
  return parts.join(" ");
}