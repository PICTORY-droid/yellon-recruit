import Link from "next/link";

import { PublicFooter } from "@/app/(public)/_components/PublicFooter";
import { PublicHeader } from "@/app/(public)/_components/PublicHeader";
import { PublicPageShell } from "@/app/(public)/_components/PublicPageShell";
import { BRAND } from "@/shared/config/brand";

const collectionItems = [
  {
    service: "간편지원",
    purpose: "지원 의사 확인, 공고 안내, 채용 상담 진행",
    items: "이름, 연락처, 희망 근무지역, 관심 공고, 상담 가능 시간",
    retention: "채용 상담 종료 후 6개월 또는 삭제 요청 시까지",
  },
  {
    service: "문의 접수",
    purpose: "문의 확인, 답변, 서비스 개선",
    items: "이름 또는 닉네임, 연락 가능한 방법, 문의 내용",
    retention: "문의 처리 종료 후 6개월 또는 삭제 요청 시까지",
  },
] as const;

const privacySections = [
  {
    number: "01",
    title: "개인정보 처리 목적",
    content:
      "노크업은 채용공고 안내, 간편지원 접수, 채용 상담, 문의 확인과 답변을 위해 필요한 범위에서만 개인정보를 처리합니다.",
  },
  {
    number: "02",
    title: "개인정보 처리 및 보유 기간",
    content:
      "개인정보는 수집 목적이 달성된 뒤 지체 없이 삭제합니다. 다만 이용자의 삭제 요청, 분쟁 대응, 관련 법령상 보관 의무가 있는 경우에는 해당 기간 동안 필요한 범위에서 보관할 수 있습니다.",
  },
  {
    number: "03",
    title: "개인정보의 제3자 제공",
    content:
      "노크업은 이용자의 별도 동의 또는 법령상 근거가 있는 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다. 실제 채용사에 지원 정보를 전달해야 하는 경우에는 전달 전 필요한 내용을 안내하고 동의 절차를 마련합니다.",
  },
  {
    number: "04",
    title: "개인정보 처리 위탁",
    content:
      "문의 접수 도구, 데이터베이스, 호스팅 서비스 등 외부 서비스를 이용하게 되는 경우에는 실제 운영 구조에 맞춰 수탁자, 처리 목적, 처리 항목을 이 안내에 업데이트합니다.",
  },
  {
    number: "05",
    title: "이용자의 권리와 행사 방법",
    content:
      "이용자는 본인의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 노크업 문의 페이지를 통해 접수할 수 있으며, 본인 확인이 필요한 경우 필요한 절차를 안내합니다.",
  },
  {
    number: "06",
    title: "안전한 개인정보 관리",
    content:
      "노크업은 개인정보 접근 권한을 필요한 범위로 제한하고, 서비스 운영 단계에 맞춰 접근 통제와 보관 관리 절차를 마련합니다. 주민등록번호, 건강정보, 신분증, 통장 사본 등은 초기 간편지원에서 받지 않습니다.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <PublicPageShell>
      <PublicHeader />

      <section className="relative overflow-hidden rounded-[32px] border border-[#c9e6fb] bg-white px-5 py-8 shadow-[0_18px_50px_rgba(75,151,204,0.12)] sm:px-8 sm:py-10">
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#d8efff]" />
        <div className="absolute -bottom-20 -left-14 size-44 rounded-full bg-[#fff3b7]" />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f5ff] px-3 py-2 text-sm font-bold text-[#2872a8]">
            <span className="size-2 rounded-full bg-[#58b8ff]" />
            개인정보 처리 안내
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-[-0.06em] text-[#19354c] sm:text-4xl">
            필요한 정보만 받고,
            <br />
            확인 가능한 기준으로 관리합니다.
          </h1>

          <p className="mt-4 text-base font-medium leading-7 text-[#587187] sm:text-lg">
            {BRAND.serviceName}은 공고 안내와 지원 상담에 필요한 정보만
            처리합니다. 서비스 운영 방식이 바뀌면 이 안내도 함께
            업데이트합니다.
          </p>

          <div className="mt-6 inline-flex rounded-2xl border border-[#d5eafb] bg-[#f4fbff] px-4 py-3 text-sm font-bold text-[#1e5f8f]">
            시행일 2026년 6월 21일
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5">
          <p className="text-sm font-black text-[#2d9de8]">COLLECTION GUIDE</p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
            서비스별 수집 정보 안내
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {collectionItems.map((item) => (
            <article
              key={item.service}
              className="rounded-[28px] border border-[#d5eafb] bg-white p-5 shadow-[0_12px_28px_rgba(75,151,204,0.08)]"
            >
              <p className="text-sm font-black text-[#2d9de8]">{item.service}</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-black text-[#223f56]">처리 목적</dt>
                  <dd className="mt-1 font-medium leading-6 text-[#60798c]">
                    {item.purpose}
                  </dd>
                </div>
                <div>
                  <dt className="font-black text-[#223f56]">수집 항목</dt>
                  <dd className="mt-1 font-medium leading-6 text-[#60798c]">
                    {item.items}
                  </dd>
                </div>
                <div>
                  <dt className="font-black text-[#223f56]">보유 기간</dt>
                  <dd className="mt-1 font-medium leading-6 text-[#60798c]">
                    {item.retention}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5">
          <p className="text-sm font-black text-[#2d9de8]">PRIVACY POLICY</p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
            개인정보 처리 기준
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {privacySections.map((section) => (
            <article
              key={section.number}
              className="rounded-[28px] border border-[#d5eafb] bg-white p-5 shadow-[0_12px_28px_rgba(75,151,204,0.08)]"
            >
              <p className="text-sm font-black text-[#2d9de8]">{section.number}</p>
              <h3 className="mt-3 text-lg font-black text-[#223f56]">
                {section.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-[#60798c]">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] bg-[#1e5f8f] px-6 py-8 text-white shadow-[0_18px_40px_rgba(30,95,143,0.22)] sm:px-8">
        <p className="text-sm font-black text-[#bce8ff]">PRIVACY REQUEST</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
          개인정보 확인이나 삭제가 필요하다면,
          <br />
          문의 접수로 요청해 주세요.
        </h2>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#d7ecfb]">
          요청 내용을 확인한 뒤 필요한 본인 확인 절차와 처리 방법을
          안내드립니다.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd75c] px-5 text-sm font-black text-[#23445d] transition hover:-translate-y-0.5 hover:bg-[#ffe58e]"
        >
          개인정보 문의 접수하기
        </Link>
      </section>

      <div className="mt-10">
        <PublicFooter />
      </div>
    </PublicPageShell>
  );
}