import { Library, Newspaper, Brain, MessageSquare, ClipboardList, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function HealthEducation() {
  const disciplines = [
    { name: "Heart Health", articles: 124, image: "https://picsum.photos/seed/heart/400/400" },
    { name: "Nutrition", articles: 89, image: "https://picsum.photos/seed/nutrition/400/400" },
    { name: "Mental Health", articles: 215, image: "https://picsum.photos/seed/mental/400/400" },
    { name: "Sports Science", articles: 56, image: "https://picsum.photos/seed/sports/400/400" },
  ];

  const series = [
    {
      part: "Part 4 of 6",
      title: "The Bio-Circuit: Mapping Brain-Body Interaction",
      desc: "Investigating the electrochemical signals that dictate our physical performance and emotional resilience.",
      image: "https://picsum.photos/seed/brain/600/400",
    },
    {
      part: "Part 1 of 8",
      title: "The Microbiome Frontier: Internal Ecosystems",
      desc: "A deep dive into the 30 trillion microbes living within you and their role in immunity and longevity.",
      image: "https://picsum.photos/seed/micro/600/400",
    },
    {
      part: "Part 2 of 5",
      title: "Vascular Vitality: The Circulatory Engine",
      desc: "Understanding arterial elasticity and the preventative measures that define heart health in modern medicine.",
      image: "https://picsum.photos/seed/vascular/600/400",
    },
  ];

  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-screen-2xl mx-auto flex gap-0">
        <aside className="hidden lg:flex flex-col p-6 gap-y-4 h-[calc(100vh-5rem)] w-80 sticky top-20 rounded-r-lg bg-surface-container-low">
          <div className="mb-8">
            <h2 className="font-headline font-bold text-slate-900 text-lg">Health Education</h2>
            <p className="text-xs text-slate-500 font-light mt-1">The Authoritative Curator</p>
          </div>
          
          <div className="space-y-2">
            <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm">Latest Updates</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 bg-white text-primary font-semibold rounded-md shadow-sm transition-transform duration-300 hover:translate-x-1">
              <Library className="w-5 h-5" />
              <span className="text-sm">Medical Library</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1">
              <Brain className="w-5 h-5" />
              <span className="text-sm">Expert Insights</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200 rounded-md transition-transform duration-300 hover:translate-x-1">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">Community Feed</span>
            </Link>
          </div>
          
          <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-primary">Pro Access</p>
                <p className="text-xs text-slate-700 font-semibold">Join Clinical Circle</p>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-2 rounded text-xs font-bold hover:bg-primary-container transition-colors active:opacity-80">
              Upgrade Now
            </button>
          </div>
        </aside>

        <div className="flex-1 px-8 py-12">
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-8 relative overflow-hidden rounded-xl bg-slate-900 group min-h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  src="https://picsum.photos/seed/glycemic/1200/800"
                  alt="Featured Tip"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-tertiary text-white px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-4">
                    Featured Tip of the Day
                  </div>
                  <h1 className="text-white font-headline text-4xl font-extrabold leading-tight mb-4">
                    Understanding the Glycemic Index: A Doctor's Guide to Stable Energy.
                  </h1>
                  <p className="text-slate-200 text-sm font-light leading-relaxed mb-6">
                    Discover how managing blood sugar fluctuations through editorial-curated nutrition can transform your cognitive performance and metabolic health.
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                    READ FULL ARTICLE
                    <TrendingUp className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-[0_20px_40px_rgba(25,28,29,0.03)] h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-headline font-bold text-xl">Quick Insights</h3>
                    <Lightbulb className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-6">
                    {[
                      "Hydration improves spinal disc elasticity and reduces chronic lower back pain by up to 15%.",
                      "Exposure to natural sunlight within 30 minutes of waking regulates circadian rhythms for better sleep.",
                      "Intermittent fasting supports cellular autophagy, a critical process for biological rejuvenation."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="text-primary font-black text-2xl opacity-20">0{i+1}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-slate-900">Health Disciplines</h2>
                <p className="text-slate-500 text-sm mt-1">Scientific perspectives on human longevity.</p>
              </div>
              <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline decoration-primary/30">
                View All Categories
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {disciplines.map((d) => (
                <div key={d.name} className="group cursor-pointer">
                  <div className="aspect-square bg-surface-container-low rounded-xl mb-4 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      src={d.image}
                      alt={d.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="font-headline font-bold text-slate-900">{d.name}</h4>
                  <p className="text-xs text-slate-500">{d.articles} Articles</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-container-low -mx-8 px-8 py-20 rounded-2xl">
            <div className="max-w-screen-xl mx-auto">
              <div className="mb-12 text-center">
                <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase">Curated Collections</span>
                <h2 className="text-4xl font-headline font-extrabold text-slate-900 mt-4">Editorial Series</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {series.map((s) => (
                  <div key={s.title} className="flex flex-col">
                    <div className="bg-surface-container-lowest p-1 rounded-lg shadow-sm mb-6">
                      <img
                        className="w-full h-56 object-cover rounded-md"
                        src={s.image}
                        alt={s.title}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-tertiary font-bold text-[10px] uppercase mb-2">{s.part}</span>
                    <h3 className="font-headline font-bold text-xl text-slate-900 mb-3 leading-tight">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                    <Link to="#" className="mt-auto text-primary font-bold text-xs flex items-center gap-2 group">
                      START SERIES <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
