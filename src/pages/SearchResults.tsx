import { Newspaper, Library, Brain, MessageSquare, CheckCircle, User, FlaskConical, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchResults() {
  return (
    <main className="pt-32 pb-20 max-w-screen-2xl mx-auto px-8 flex gap-12">
      <aside className="h-full w-80 sticky top-32 rounded-r-lg hidden lg:flex flex-col gap-y-8">
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-6">
          <div>
            <h3 className="font-headline font-bold text-slate-900 mb-4 text-lg">Filter Results</h3>
            <div className="flex flex-col gap-2">
              <Link to="/search" className="flex items-center justify-between p-3 bg-white text-primary font-semibold rounded-md shadow-sm">
                <div className="flex items-center gap-3">
                  <Newspaper className="w-5 h-5" />
                  <span className="text-sm">Latest Updates</span>
                </div>
                <span className="text-xs font-bold">12</span>
              </Link>
              <Link to="/search" className="flex items-center justify-between p-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Library className="w-5 h-5" />
                  <span className="text-sm">Medical Library</span>
                </div>
                <span className="text-xs">48</span>
              </Link>
              <Link to="/search" className="flex items-center justify-between p-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5" />
                  <span className="text-sm">Expert Insights</span>
                </div>
                <span className="text-xs">15</span>
              </Link>
              <Link to="/search" className="flex items-center justify-between p-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">Community Feed</span>
                </div>
                <span className="text-xs">5</span>
              </Link>
            </div>
          </div>
          
          <div className="pt-6 border-t border-outline-variant/20">
            <h4 className="font-headline font-semibold text-sm text-slate-900 mb-3">Topic Categories</h4>
          <div className="flex flex-wrap gap-2">
            <Link to="/search" className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-medium">Cardiology</Link>
            <Link to="/search" className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-medium">Genetics</Link>
            <Link to="/search" className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-medium">Public Health</Link>
            <Link to="/search" className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-medium">Surgery</Link>
          </div>
          </div>
          
          <div className="mt-4 p-4 bg-editorial-gradient rounded-lg text-white">
            <p className="font-headline font-bold text-sm mb-1">Clinical Circle</p>
            <p className="text-xs opacity-80 mb-4 font-light">Get exclusive access to peer-reviewed pre-prints.</p>
            <button className="w-full bg-white text-primary text-xs font-bold py-2 rounded-md transition-all active:opacity-80">
              Join Clinical Circle
            </button>
          </div>
        </div>
      </aside>

      <section className="flex-1">
        <header className="mb-12">
          <p className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2">Search Query</p>
          <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
            Results for: <span className="text-primary">Cardiovascular Research</span>
          </h1>
          <div className="flex items-center gap-4 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 84 peer-reviewed articles found</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
            <span>Sorted by: <button className="font-semibold text-primary underline decoration-primary/30">Relevance</button></span>
          </div>
        </header>

        <div className="space-y-8">
          <Link to="/article" className="block bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] group cursor-pointer transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://picsum.photos/seed/cardio-res/500/300"
                  alt="Research"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-tertiary uppercase">Medical Library</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span className="text-xs text-on-surface-variant">Oct 24, 2024</span>
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-3">
                    Advancements in Non-Invasive Cardiac Monitoring Systems
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                    New clinical trials demonstrate that wearable biosensors can now detect early-stage atrial fibrillation with 98.4% accuracy compared to traditional clinical ECG monitoring...
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center">
                      <User className="w-3 h-3 text-on-primary-fixed" />
                    </div>
                    <span className="text-xs font-semibold text-on-surface-variant">Dr. Elena Rodriguez</span>
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 pb-0.5 group-hover:border-primary transition-all">
                    Read Analysis
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/article" className="block bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] group cursor-pointer transition-all hover:-translate-y-1 border-l-4 border-primary">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 bg-tertiary text-white text-[10px] font-bold rounded">URGENT</span>
                  <span className="text-xs font-bold text-tertiary uppercase">Latest Updates</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-xs text-on-surface-variant">2 hours ago</span>
                </div>
                <h2 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-3">
                  FDA Approves Novel Small Molecule Inhibitor for Chronic Heart Failure
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  The regulatory body announced the fast-track approval of Zenthrin, a breakthrough therapy that targets cellular regeneration in the left ventricle. Initial phase III results indicate a 14% reduction in hospitalization rates...
                </p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-on-primary-fixed" />
                  </div>
                  <span className="text-xs font-semibold text-on-surface-variant">Regulatory News Desk</span>
                </div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 pb-0.5 group-hover:border-primary transition-all">
                  View Report
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 flex justify-center items-center gap-4">
          <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white font-bold">1</Link>
            <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md text-on-surface-variant hover:bg-surface-container-high font-semibold transition-colors">2</Link>
            <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md text-on-surface-variant hover:bg-surface-container-high font-semibold transition-colors">3</Link>
            <span className="px-2 text-outline-variant">...</span>
            <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md text-on-surface-variant hover:bg-surface-container-high font-semibold transition-colors">8</Link>
          </div>
          <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-md border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
