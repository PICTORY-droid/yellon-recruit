import { PublicBottomNavigation } from "@/app/(public)/_components/PublicBottomNavigation";

type PublicPageShellProps = {
  children: React.ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <main className="min-h-screen bg-[#eef8ff] text-[#1f3347]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-8">
        {children}
      </div>

      <PublicBottomNavigation />
    </main>
  );
}