import Link from "next/link";

import { PublicFooter } from "@/app/(public)/_components/PublicFooter";
import { PublicHeader } from "@/app/(public)/_components/PublicHeader";
import { PublicPageShell } from "@/app/(public)/_components/PublicPageShell";

const TALLY_FORM_URL = "";

const inquiryTypes = [
  {
    title: "공고 문의",
    description: "업무 내용, 근무지, 근무시간, 지원 조건이 궁금할 때",
    icon: "💼",
  },
  {
    title: "지원 문의",
    description: "간편지원 방법이나 접수 이후 안내가 궁금할 때",
    icon: "📝",
  },
  {
    title: "개인정보 문의",
    description: "제공한 정보의 확인, 수정, 삭제를 요청할 때",
    icon: "🔐",
  },
] as const;

const contactSteps = [
  {
    number: "01",
    title: "문의 내용을 남겨요",
    description: "궁금한 공고나 필요한 도움을 편하게 적어주세요.",
  },
  {
    number: "02",
    title: "내용을 확인해요",
    description: "접수된 내용을 확인한 뒤 안내가 필요한 사항을 정리합니다.",
  },
  {
    number: "03",
    title: "답변을 받아요",
    description: "남겨주신 연락 가능한 방법으로 안내드립니다.",
  },
] as const;

export default function ContactPage() {
  const isTallyFormReady = TALLY_FORM_URL.length > 0;

  return (
    <PublicPageShell>
      <PublicHeader />

      <section className="relative overflow-hidden rounded-[32px] border border-[#c9e6fb] bg-white px-5 py-8 shadow-[0_18px_50px_rgba(75,151,204,0.12)] sm:px-8 sm:py-10">
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#d8efff]" />
        <div className="absolute -bottom-20 -left-14 size-44 rounded-full bg-[#fff3b7]" />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f5ff] px-3 py-2 text-sm font-bold text-[#2872a8]">
            <span className="size-2 rounded-full bg-[#58b8ff]" />
            노크업 고객센터
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-[-0.06em] text-[#19354c] sm:text-4xl">
            궁금한 점이 있다면,
            <br />
            편하게 문의를 남겨주세요.
          </h1>

          <p className="mt-4 text-base font-medium leading-7 text-[#587187] sm:text-lg">
            공고 조건, 지원 방법, 개인정보 관련 문의를 접수할 수 있습니다.
            <br className="hidden sm:block" />
            확인 후 남겨주신 연락 가능한 방법으로 안내드립니다.
          </p>

          {isTallyFormReady ? (
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#2d9de8] px-6 text-base font-black text-white shadow-[0_10px_22px_rgba(45,157,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1e5f8f]"
            >
              문의 접수하기
            </a>
          ) : (
            <div className="mt-7 rounded-2xl border border-[#d5eafb] bg-[#f4fbff] px-4 py-4">
              <p className="text-sm font-bold text-[#1e5f8f]">
                문의 접수 폼을 준비하고 있습니다.
              </p>
              <p className="mt-1 text-sm font-medium leading-6 text-[#587187]">
                접수 페이지가 연결되면 이 화면에서 바로 문의를 남길 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5">
          <p className="text-sm font-black text-[#2d9de8]">WHAT CAN WE HELP?</p>
          <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
            이런 내용을 문의할 수 있어요
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {inquiryTypes.map((inquiry) => (
            <article
              key={inquiry.title}
              className="rounded-[28px] border border-[#d5eafb] bg-white p-5 shadow-[0_12px_28px_rgba(75,151,204,0.08)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#eff9ff] text-2xl">
                {inquiry.icon}
              </div>
              <h3 className="mt-4 text-lg font-black text-[#223f56]">
                {inquiry.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#60798c]">
                {inquiry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] border border-[#d5eafb] bg-white px-5 py-7 shadow-[0_12px_28px_rgba(75,151,204,0.08)] sm:px-7">
        <p className="text-sm font-black text-[#2d9de8]">CONTACT PROCESS</p>
        <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
          문의는 이렇게 안내됩니다
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl bg-[#f4fbff] p-5"
            >
              <p className="text-sm font-black text-[#2d9de8]">{step.number}</p>
              <h3 className="mt-3 text-base font-black text-[#223f56]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#60798c]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] bg-[#1e5f8f] px-6 py-8 text-white shadow-[0_18px_40px_rgba(30,95,143,0.22)] sm:px-8">
        <p className="text-sm font-black text-[#bce8ff]">PERSONAL INFORMATION</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
          문의 접수 전,
          <br />
          개인정보 안내를 확인해 주세요.
        </h2>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#d7ecfb]">
          문의 접수에는 필요한 정보만 받고, 요청이 있으면 확인 절차에 따라
          삭제를 안내합니다.
        </p>

        <Link
          href="/privacy"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd75c] px-5 text-sm font-black text-[#23445d] transition hover:-translate-y-0.5 hover:bg-[#ffe58e]"
        >
          개인정보 처리 안내 보기
        </Link>
      </section>

      <div className="mt-10">
        <PublicFooter />
      </div>
    </PublicPageShell>
  );
}