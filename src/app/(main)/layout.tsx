import { Footer, TopMenu } from "@/components";
import ReduxProvider from "@/providers/redux-provider";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
        <ReduxProvider>
          <TopMenu />
        </ReduxProvider>
        <div className="min-h-screen relative text-[#1e3a58]">{children}</div>
      </PrimeReactProvider>
      <Footer />
    </main>
  );
}
