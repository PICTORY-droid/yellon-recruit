import Link from "next/link";

import { PublicFooter } from "@/app/(public)/_components/PublicFooter";
import { PublicHeader } from "@/app/(public)/_components/PublicHeader";
import { PublicPageShell } from "@/app/(public)/_components/PublicPageShell";

const faqGroups = [
  {
    title: "공고 확인",
    items: [
      {
        question: "공고에 적힌 조건은 어디까지 확정된 내용인가요?",
        answer:
          "노크업에는 운영자가 확인한 공고 조건을 먼저 안내합니다. 근무시간, 급여, 고용형태, 근무지 등은 지원 전과 안내 과정에서 다시 확인할 수 있습니다.",
      },
      {
        question: "재택근무, 역세권, 4대보험 같은 태그는 무엇인가요?",
        answer:
          "공고에서 확인된 조건을 빠르게 찾을 수 있도록 붙이는 안내 태그입니다. 실제 적용 조건은 공고 상세 내용과 지원 안내에서 다시 확인해 주세요.",
      },
      {
        question: "마음에 드는 공고가 없어도 지원할 수 있나요?",
        answer:
          "현재는 관심 있는 공고를 확인한 뒤 간편지원하는 방식으로 운영합니다. 원하는 조건이 있는 경우 문의 페이지에 남겨주시면 확인 가능한 범위에서 안내드립니다.",
      },
    ],
  },
  {
    title: "간편지원",
    items: [
      {
        question: "회원가입 없이 지원할 수 있나요?",
        answer:
          "네. 초기 노크업은 복잡한 회원가입 없이 필요한 정보만으로 간편지원을 받을 예정입니다.",
      },
      {
        question: "간편지원할 때 어떤 정보를 입력하나요?",
        answer:
          "이름, 연락처, 희망 근무지역, 관심 공고, 상담 가능 시간과 개인정보 수집 및 이용 동의를 기본으로 받습니다.",
      },
      {
        question: "지원한 뒤에는 어떻게 되나요?",
        answer:
          "접수 내용을 확인한 뒤 공고별 안내가 필요한 경우 남겨주신 연락 가능한 방법으로 안내드립니다.",
      },
    ],
  },
  {
    title: "개인정보와 문의",
    items: [
      {
        question: "주민등록번호나 사진도 제출해야 하나요?",
        answer:
          "아니요. 초기 간편지원에서는 주민등록번호, 건강정보, 가족관계, 신분증, 통장 사본, 사진을 받지 않습니다.",
      },
      {
        question: "입력한 개인정보를 삭제하고 싶어요.",
        answer:
          "문의 페이지에서 개인정보 확인, 수정 또는 삭제 요청을 접수할 수 있습니다. 필요한 본인 확인 절차와 처리 방법을 안내드립니다.",
      },
      {
        question: "공고나 지원 관련 문의는 어디에 남기면 되나요?",
        answer:
          "노크업 문의 페이지에서 공고 조건, 지원 방법, 개인정보 관련 내용을 접수할 수 있습니다.",
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <PublicPageShell>
      <PublicHeader />

      <section className="relative overflow-hidden rounded-[32px] border border-[#c9e6fb] bg-white px-5 py-8 shadow-[0_18px_50px_rgba(75,151,204,0.12)] sm:px-8 sm:py-10">
        <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#d8efff]" />
        <div className="absolute -bottom-20 -left-14 size-44 rounded-full bg-[#fff3b7]" />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e7f5ff] px-3 py-2 text-sm font-bold text-[#2872a8]">
            <span className="size-2 rounded-full bg-[#58b8ff]" />
            자주 묻는 질문
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-[-0.06em] text-[#19354c] sm:text-4xl">
            공고 확인부터 간편지원까지,
            <br />
            자주 묻는 내용을 모았어요.
          </h1>

          <p className="mt-4 text-base font-medium leading-7 text-[#587187] sm:text-lg">
            궁금한 내용을 먼저 확인해 보세요.
            <br className="hidden sm:block" />
            찾는 답변이 없으면 문의 페이지에서 접수할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-10">
        {faqGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-5">
              <p className="text-sm font-black text-[#2d9de8]">FAQ</p>
              <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
                {group.title}
              </h2>
            </div>

            <div className="grid gap-4">
              {group.items.map((item, index) => (
                <article
                  key={item.question}
                  className="rounded-[28px] border border-[#d5eafb] bg-white p-5 shadow-[0_12px_28px_rgba(75,151,204,0.08)] sm:p-6"
                >
                  <div className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#e7f5ff] text-sm font-black text-[#1e5f8f]">
                      Q{index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-black leading-6 text-[#223f56] sm:text-lg">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm font-medium leading-6 text-[#60798c]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-[30px] bg-[#1e5f8f] px-6 py-8 text-white shadow-[0_18px_40px_rgba(30,95,143,0.22)] sm:px-8">
        <p className="text-sm font-black text-[#bce8ff]">STILL NEED HELP?</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
          원하는 답변을 찾지 못했다면,
          <br />
          문의를 남겨주세요.
        </h2>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#d7ecfb]">
          공고 조건, 간편지원, 개인정보 관련 내용을 확인한 뒤 안내드립니다.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd75c] px-5 text-sm font-black text-[#23445d] transition hover:-translate-y-0.5 hover:bg-[#ffe58e]"
        >
          문의 페이지로 이동
        </Link>
      </section>

      <div className="mt-10">
        <PublicFooter />
      </div>
    </PublicPageShell>
  );
}