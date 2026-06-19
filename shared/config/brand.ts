export const BRAND = {
  serviceName: "옐론 리크루트",
  pageTitle: "옐론서치 채용 안내",
  adminTitle: "옐론 리크루트 관리자",
  description:
    "상담, CS, 인바운드, 채팅상담 등 지원 가능한 채용공고를 안내하는 잡매니저 운영 페이지입니다.",
  shortDescription: "지원 가능한 채용공고를 쉽고 빠르게 확인하세요.",
  operatorNotice:
    "본 페이지는 옐론서치 채용공고를 안내하는 잡매니저 운영 페이지입니다.",
  footerNotice:
    "공고 조건은 채용사 사정에 따라 일부 변경될 수 있으며, 지원 후 상담 과정에서 다시 확인해드립니다.",
  contactEmail: "oceanlumes@gmail.com",
} as const;

export type BrandConfig = typeof BRAND;