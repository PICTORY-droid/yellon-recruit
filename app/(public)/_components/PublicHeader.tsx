import Link from "next/link";

import { BRAND } from "@/shared/config/brand";

const publicNavigationItems = [
  { label: "홈", href: "/" },
  { label: "채용공고", href: "/jobs" },
  { label: "간편지원", href: "/apply" },
  { label: "문의", href: "/contact" },
];

export function PublicHeader() {
  return (
    <header className="mb-6 rounded-[28px] border border-[#f0dfb8] bg-white/85 px-4 py-4 shadow-sm backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#ffd45a] text-xl font-black text-[#3b2a12] shadow-sm transition group-hover:scale-105">
            옐
          </div>

          <div>
            <p className="text-xs font-bold text-[#b07518]">
              {BRAND.pageTitle}
            </p>
            <h1 className="text-lg font-black tracking-[-0.03em] text-[#2f261d]">
              {BRAND.serviceName}
            </h1>
          </div>
        </Link>

        <nav aria-label="공개 화면 메뉴" className="flex flex-wrap gap-2">
          {publicNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[#f0dfb8] bg-[#fffaf0] px-4 py-2 text-sm font-bold text-[#5a4632] transition hover:border-[#f4bf35] hover:bg-[#ffe8a8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}