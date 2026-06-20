import Link from "next/link";

import { PublicHeader } from "@/app/(public)/_components/PublicHeader";
import { PublicPageShell } from "@/app/(public)/_components/PublicPageShell";
import { BRAND } from "@/shared/config/brand";

const comfortPoints = [
  {
    icon: "🌱",
    title: "초보도 부담 없이",
    description: "교육 여부와 실제 업무 내용을 먼저 확인할 수 있어요.",
  },
  {
    icon: "🕒",
    title: "근무조건 먼저 확인",
    description: "근무시간, 야근, 고용형태를 한눈에 살펴보세요.",
  },
  {
    icon: "💬",
    title: "1분 간편지원",
    description: "복잡한 회원가입 없이 관심 공고에 빠르게 지원해요.",
  },
];

const featuredJobs = [
  {
    label: "초보 가능",
    title: "고객 상담·전산 입력",
    location: "서울 · 역 도보 5분",
    detail: "교육 제공 · 정시 퇴근 중심",
    tone: "bg-[#fff6c7]",
  },
  {
    label: "빠른 안내",
    title: "채팅 상담 운영",
    location: "경기 · 대중교통 편리",
    detail: "매뉴얼 제공 · 팀 근무",
    tone: "bg-[#e7f4ff]",
  },
  {
    label: "경력 무관",
    title: "사무보조·데이터 정리",
    location: "대전 · 자차 출퇴근 가능",
    detail: "전산 입력 중심 · 식대 지원",
    tone: "bg-[#eef0ff]",
  },
];

export default function Home() {
  return (
    <PublicPageShell>
      <PublicHeader />

      <section className="relative overflow-hidden rounded-[32px] border border-[#c9e6fb] bg-white px-5 py-8 shadow-[0_18px_50px_rgba(75,151,204,0.14)] sm:px-8 sm:py-10">
        <div className="absolute -right-20 -top-24 size-56 rounded-full bg-[#d8efff]" />
        <div className="absolute -bottom-24 -left-20 size-56 rounded-full bg-[#fff3b7]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e7f5ff] px-3 py-2 text-sm font-bold text-[#2872a8]">
              <span className="size-2 rounded-full bg-[#58b8ff]" />
              오늘도 새로운 기회가 열려 있어요
            </div>

            <h2 className="text-4xl font-black tracking-[-0.06em] text-[#19354c] sm:text-5xl">
              내게 맞는 일자리에
              <br />
              가볍게 <span className="text-[#efac26]">노크</span>하세요.
            </h2>

            <p className="mt-5 text-base font-medium leading-7 text-[#537187] sm:text-lg">
              초보 가능 공고부터 상담, CS, 채팅상담, 사무보조까지.
              <br className="hidden sm:block" />
              근무조건을 확인하고 마음에 드는 공고에 바로 지원해 보세요.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/jobs"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#2d9de8] px-6 text-base font-black text-white shadow-[0_10px_22px_rgba(45,157,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[#238bd0]"
              >
                채용공고 둘러보기
              </Link>

              <Link
                href="/apply"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#b9dcf5] bg-white px-6 text-base font-black text-[#28628c] transition hover:-translate-y-0.5 hover:bg-[#f4fbff]"
              >
                1분 간편지원
              </Link>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-sm justify-center">
            <div className="relative flex aspect-square w-full max-w-[320px] items-center justify-center rounded-[44px] border border-[#d5ebfb] bg-[#f7fcff] shadow-[inset_0_-12px_0_rgba(190,226,250,0.45)]">
              <div className="absolute left-8 top-9 size-14 rounded-2xl bg-[#fff1a4] shadow-[0_10px_20px_rgba(240,186,43,0.22)]" />
              <div className="absolute right-8 top-14 size-10 rounded-full bg-[#bce6ff]" />
              <div className="absolute bottom-10 left-9 size-12 rounded-full bg-[#d9f1ff]" />

              <div className="relative flex h-48 w-32 flex-col items-center justify-end rounded-t-[28px] bg-[#ffd85f] pb-6 shadow-[0_18px_0_#eab63b,0_24px_30px_rgba(143,104,19,0.2)]">
                <div className="absolute -top-4 flex size-12 items-center justify-center rounded-full border-4 border-[#fff8d4] bg-[#ffbf3f] text-2xl shadow-md">
                  ✦
                </div>

                <div className="flex h-28 w-20 items-center justify-center rounded-t-[18px] border-x-4 border-t-4 border-[#df9d27] bg-[#fff3ba] shadow-inner">
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-2xl">👋</span>
                    <span className="rounded-full bg-[#2e6790] px-2 py-1 text-[10px] font-black text-white">
                      KNOCK
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 rounded-full bg-white px-4 py-2 text-sm font-black text-[#35627f] shadow-sm">
                기회의 문을 열어볼까요?
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black text-[#2d9de8]">KNOCK POINT</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
              지원 전, 이런 점부터 확인하세요
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {comfortPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[28px] border border-[#d5eafb] bg-white p-5 shadow-[0_12px_28px_rgba(75,151,204,0.08)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#eff9ff] text-2xl">
                {point.icon}
              </div>
              <h3 className="mt-4 text-lg font-black text-[#223f56]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#60798c]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black text-[#2d9de8]">OPEN JOBS</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#19354c]">
              지금 확인할 수 있는 공고
            </h2>
          </div>

          <Link
            href="/jobs"
            className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#2b79ac] shadow-sm ring-1 ring-[#cfe6f8] transition hover:bg-[#f8fcff]"
          >
            전체 보기
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <article
              key={job.title}
              className="overflow-hidden rounded-[28px] border border-[#d4e8f8] bg-white shadow-[0_12px_28px_rgba(75,151,204,0.08)]"
            >
              <div className={`${job.tone} flex items-center justify-between px-5 py-4`}>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black text-[#365d77]">
                  {job.label}
                </span>
                <span className="text-xl">✦</span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black tracking-[-0.04em] text-[#203c53]">
                  {job.title}
                </h3>
                <p className="mt-3 text-sm font-bold text-[#51708a]">{job.location}</p>
                <p className="mt-2 text-sm font-medium text-[#71879a]">{job.detail}</p>

                <Link
                  href="/jobs"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-[#edf8ff] px-4 text-sm font-black text-[#2675aa] transition hover:bg-[#dff2ff]"
                >
                  공고 자세히 보기
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[30px] bg-[#1e5f8f] px-6 py-8 text-white shadow-[0_18px_40px_rgba(30,95,143,0.22)] sm:px-8">
        <p className="text-sm font-black text-[#bce8ff]">READY TO KNOCK?</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">
          마음에 드는 공고가 있다면,
          <br />
          지금 간편하게 지원해 보세요.
        </h2>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-[#d7ecfb]">
          지원 내용을 확인한 뒤, 공고별 안내를 받을 수 있습니다.
        </p>

        <Link
          href="/apply"
          className="mt-6 inline-flex min-h-13 items-center justify-center rounded-2xl bg-[#ffd75c] px-6 text-base font-black text-[#23445d] shadow-[0_10px_20px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-[#ffe58e]"
        >
          1분 간편지원 시작하기
        </Link>
      </section>

      <footer className="mt-10 border-t border-[#cfe6f8] py-7 text-center text-sm font-medium leading-6 text-[#668197]">
        <p className="font-black text-[#38698c]">{BRAND.serviceName}</p>
        <p className="mt-1">{BRAND.footerNotice}</p>
      </footer>
    </PublicPageShell>
  );
}