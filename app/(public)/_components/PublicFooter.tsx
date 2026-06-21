import Link from "next/link";

import { BRAND } from "@/shared/config/brand";

const footerLinks = [
  { href: "/", label: "홈" },
  { href: "/jobs", label: "채용공고" },
  { href: "/apply", label: "간편지원" },
  { href: "/contact", label: "문의" },
] as const;

const policyLinks = [
  { href: "/privacy", label: "개인정보 처리 안내" },
  { href: "/faq", label: "자주 묻는 질문" },
] as const;

export function PublicFooter() {
  return (
    <footer className="border-t border-[#d5eafb] bg-white/75">
      <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-extrabold tracking-[-0.04em] text-[#1e5f8f]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#f2bd35] bg-[#ffd75c] shadow-[0_3px_0_#efac26]">
                <span className="h-3 w-3 rounded-full border-2 border-[#1e5f8f]" />
              </span>
              {BRAND.serviceName}
            </Link>

            <p className="mt-3 text-sm font-medium leading-6 text-[#587187]">
              {BRAND.operatorNotice}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-7 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-[#1f3347]">바로가기</p>
              <ul className="mt-3 space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-[#587187] transition-colors hover:text-[#1e5f8f]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-[#1f3347]">안내</p>
              <ul className="mt-3 space-y-2.5">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-[#587187] transition-colors hover:text-[#1e5f8f]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-sm font-bold text-[#1f3347]">문의</p>
              <a
                href={`mailto:${BRAND.contactEmail}`}
                className="mt-3 block break-all text-sm font-medium text-[#2d9de8] transition-colors hover:text-[#1e5f8f]"
              >
                {BRAND.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-[#e7f5ff] pt-5">
          <p className="text-xs leading-5 text-[#71879a]">
            {BRAND.footerNotice}
          </p>
          <p className="mt-2 text-xs font-medium text-[#8aa0b1]">
            © {new Date().getFullYear()} {BRAND.serviceName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;