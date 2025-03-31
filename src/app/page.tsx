import BlogSection from "@/components/BlogSection";
import CategorySection from "@/components/CategorySection";
import { InvitationsSection } from "@/components/InvitationsSection";
// import { Accessories } from "@/components/Accessories";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <h1 className="text-center p-3 bg-primary color-white text-white uppercase">
        Prezentowy Świat - Eleganckie zaproszenia i wspaniałe dekoracje - Twoje marzenia
      </h1>
      <div className="max-w-1400 mx-auto">
        <CategorySection />
        <InvitationsSection />
        {/* <Accessories /> */}
        <BlogSection />
      </div>
    </main>
  );
}
