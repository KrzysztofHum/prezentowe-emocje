import BlogSection from "@/components/BlogSection";
import CategorySection from "@/components/CategorySection";
import { InvitationsSection } from "@/components/InvitationsSection";
import ThanksSection from "@/components/ThanksSection";
import { WeddingAccessories } from "@/components/WeddingAccessories";

export default function Home() {
  return (
    <main className="bg-slate-50	">
      <h1>
        Prezentowe Emocje - Sklep z akcesoriami ślubnymi, pudełkami
        prezentowymi.
      </h1>
      <div>
        <CategorySection />
        <InvitationsSection />
        <WeddingAccessories />
        <ThanksSection />
        <BlogSection />
      </div>
    </main>
  );
}
