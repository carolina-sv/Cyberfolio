import { Header } from "@/components/header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,20,147,0.3),rgba(255,255,255,0))]"></div>
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-16 grid gap-12 md:gap-16">
          <Skills />
        </div>
      </main>
    </div>
  );
}
