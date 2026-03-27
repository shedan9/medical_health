import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mt-8 mb-16 relative rounded-xl overflow-hidden aspect-[21/9] group bg-slate-900">
      <img
        className="w-full h-full object-cover opacity-60"
        src="https://picsum.photos/seed/medical-lab/1920/1080"
        alt="Modern medical laboratory"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
            Flash Report
          </span>
          <span className="text-slate-300 text-xs font-medium">October 24, 2024</span>
        </div>
        <h1 className="font-headline text-5xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
          The Future of Oncology: Precision Medicine and Genomic Sequencing breakthroughs.
        </h1>
        <p className="text-slate-200 text-lg leading-relaxed mb-8 opacity-90">
          How emerging CRISPR technologies are redefining patient outcomes in late-stage clinical trials across the European Union.
        </p>
        <Link to="/article" className="inline-flex bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-slate-100 transition-colors items-center gap-2">
          Read Full Analysis
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="absolute bottom-12 right-12 flex gap-2">
        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
