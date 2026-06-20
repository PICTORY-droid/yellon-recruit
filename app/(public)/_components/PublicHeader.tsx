import Link from "next/link";

import { BRAND } from "@/shared/config/brand";

const navigationItems = [
  { href: "/", label: "홈" },
  { href: "/jobs", label: "채용공고" },
  { href: "/apply", label: "간편지원" },
  { href: "/contact", label: "문의" },
] as const;

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d5eafb] bg-[#eef8ff]/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label={`${BRAND.serviceName} 홈`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#f2bd35] bg-[#ffd75c] shadow-[0_5px_0_#efac26] transition-transform duration-200 group-hover:-translate-y-0.5">
            <svg
              viewBox="0 0 48 48"
              className="h-6 w-6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 39V12.5C13 10.57 14.57 9 16.5 9h15C33.43 9 35 10.57 35 12.5V39"
                stroke="#1E5F8F"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 39h28"
                stroke="#1E5F8F"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="28.5" cy="24.5" r="2.4" fill="#1E5F8F" />
              <path
                d="M8 15.5c-2.2 1.9-3.5 4.7-3.5 7.7"
                stroke="#1E5F8F"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M40 15.5c2.2 1.9 3.5 4.7 3.5 7.7"
                stroke="#1E5F8F"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="min-w-0">
            <span className="block text-lg font-extrabold tracking-[-0.04em] text-[#1e5f8f]">
              {BRAND.serviceName}
            </span>
            <span className="hidden text-xs font-medium text-[#587187] sm:block">
              가볍게 노크하고 바로 지원하세요
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-[#d5eafb] bg-white/80 p-1 md:flex"
          aria-label="공개 메뉴"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-[#49657a] transition-colors hover:bg-[#e7f5ff] hover:text-[#1e5f8f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/apply"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#2d9de8] px-3.5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#1e5f8f] sm:px-4"
        >
          <span className="hidden sm:inline">1분 간편지원</span>
          <span className="sm:hidden">지원하기</span>
        </Link>
      </div>
    </header>
  );
}

export default PublicHeader;