import { TopMenu } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <TopMenu />
      <div className="flex min-h-screen flex-col items-center justify-between relative text-[#1e3a58]">
        {children}
      </div>
    </main>
  );
}
