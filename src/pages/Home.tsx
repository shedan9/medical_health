import Hero from "@/src/components/Hero";
import ArticleCard from "@/src/components/ArticleCard";
import Sidebar from "@/src/components/Sidebar";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="pt-20 max-w-screen-2xl mx-auto px-8">
      <Hero />
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-12">
          <header className="flex justify-between items-end">
            <div>
              <span className="text-tertiary font-bold text-xs uppercase tracking-widest">
                Medical Journal Feed
              </span>
              <h2 className="font-headline text-3xl font-black text-on-surface mt-2 tracking-tight">
                Latest Clinical Updates
              </h2>
            </div>
            <button className="text-primary text-sm font-bold flex items-center gap-1 group">
              View Archive
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArticleCard
              featured
              category="Neurology"
              title="AI-Driven Diagnostics: Reducing Error Rates in Neuropathology."
              excerpt="A comparative study of 50,000 cases shows a 14% improvement in early-stage detection using integrated neural networks."
              image="https://picsum.photos/seed/neurology/800/600"
              readTime="8 min read"
            />
            <ArticleCard
              category="Immunology"
              title="Next-Generation mRNA Delivery Systems for Rare Genetic Disorders."
              excerpt="Standardization of lipid nanoparticles across multi-site trials shows promising stability results."
              image="https://picsum.photos/seed/immunology/600/400"
            />
            <ArticleCard
              category="Cardiology"
              title="Telemedicine's Impact on Chronic Heart Failure Management."
              excerpt="Recent data highlights a significant drop in rehospitalization rates for remote-monitored patients."
              image="https://picsum.photos/seed/cardiology/600/400"
            />
          </div>
        </div>
        
        <Sidebar />
      </div>
    </main>
  );
}
