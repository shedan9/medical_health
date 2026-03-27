import { Newspaper, Library, Brain, MessageSquare, ClipboardList, Calendar, Timer, ThumbsUp, Reply, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleDetail() {
  return (
    <main className="pt-20 max-w-screen-2xl mx-auto flex flex-col lg:flex-row min-h-screen">
      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="hidden lg:flex flex-col p-6 gap-y-4 h-full w-80 sticky top-20 bg-surface-container-low rounded-r-lg">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img
              className="w-12 h-12 rounded-full object-cover editorial-shadow"
              src="https://picsum.photos/seed/doctor-female/100/100"
              alt="Editorial Curator"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-headline font-bold text-slate-900">Health Education</p>
              <p className="text-xs text-slate-500">The Authoritative Curator</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-y-2">
          <Link to="/" className="flex items-center gap-3 p-3 bg-white text-primary font-semibold rounded-md shadow-sm hover:translate-x-1 transition-transform duration-300">
            <Newspaper className="w-5 h-5" />
            <span>Latest Updates</span>
          </Link>
          <Link to="/education" className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-200 rounded-md hover:translate-x-1 transition-transform duration-300">
            <Library className="w-5 h-5" />
            <span>Medical Library</span>
          </Link>
          <Link to="/search" className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-200 rounded-md hover:translate-x-1 transition-transform duration-300">
            <Brain className="w-5 h-5" />
            <span>Expert Insights</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-200 rounded-md hover:translate-x-1 transition-transform duration-300">
            <MessageSquare className="w-5 h-5" />
            <span>Community Feed</span>
          </Link>
        </div>
        
        <div className="mt-auto pt-10">
          <div className="bg-primary-fixed p-6 rounded-xl">
            <p className="text-on-primary-fixed font-headline font-bold mb-2">Clinical Circle</p>
            <p className="text-xs text-on-surface-variant mb-4">Exclusive access to peer-reviewed datasets.</p>
            <Link to="/search" className="block w-full bg-white text-primary py-2 rounded-md font-bold text-sm shadow-sm active:opacity-80 transition-opacity text-center">
              Join Clinical Circle
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 px-6 lg:px-12 py-12 bg-surface">
        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase">
              Cardiology Update
            </span>
          </div>
          
          <h1 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
            Advancements in Non-Invasive Cardiac Monitoring: A Longitudinal Study of AI Integration
          </h1>
          
          <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/20 pb-8">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://picsum.photos/seed/doctor-male/100/100"
                alt="Dr. Smith"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-on-surface">Dr. Alexander Smith</p>
                <p className="text-xs text-slate-500">Chief of Cardiology, St. Jude Medical</p>
              </div>
            </div>
            <div className="h-8 w-px bg-outline-variant/30"></div>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Published: Oct 24, 2024</span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <Timer className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
          
          <figure className="mb-12">
            <div className="rounded-xl overflow-hidden editorial-shadow">
              <img
                className="w-full aspect-video object-cover"
                src="https://picsum.photos/seed/heart-monitor/1200/800"
                alt="Modern Medical Display"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="mt-4 text-xs italic text-slate-400 text-center">
              Fig 1. Real-time neural processing of cardiovascular rhythm fluctuations using AI-augmented displays.
            </figcaption>
          </figure>
          
          <div className="prose prose-slate max-w-none text-on-surface-variant font-body leading-relaxed">
            <p className="text-lg leading-relaxed mb-8 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-primary">
              The intersection of artificial intelligence and cardiovascular medicine has transitioned from a theoretical concept to a clinical necessity. In our recent longitudinal study involving over 5,000 patients, we observed a 24% increase in early-stage detection of arrhythmia when utilizing AI-driven monitoring systems compared to traditional methods.
            </p>
            
            <h2 className="font-headline text-2xl font-bold text-on-surface mt-12 mb-6">Methodological Shift in Diagnostics</h2>
            <p className="mb-6">
              Traditionally, cardiac monitoring was limited by the snapshot nature of clinical visits. Even ambulatory Holter monitors provide a finite window of data. The modern paradigm shifts towards continuous, ambient monitoring—integrating data from consumer wearables with clinical-grade analytical engines.
            </p>
            
            <div className="my-10 p-8 bg-surface-container-low rounded-xl border-l-4 border-primary">
              <p className="text-xl font-headline font-medium text-primary italic leading-snug">
                "The goal is not to replace the clinician, but to provide them with a high-fidelity map of the patient's physiological terrain that was previously invisible."
              </p>
            </div>
          </div>

          <section className="mt-20 pt-12 border-t border-outline-variant/30">
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-10">Comments (24)</h3>
            
            <div className="bg-surface-container-low p-6 rounded-xl mb-12">
              <div className="flex gap-4">
                <User className="w-10 h-10 rounded-full bg-white p-2 text-slate-400" />
                <div className="flex-1">
                  <textarea
                    className="w-full bg-white border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 outline-none"
                    placeholder="Share your clinical perspective..."
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <button className="bg-primary text-white px-8 py-2 rounded-md font-bold text-sm hover:bg-primary-container transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <img
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                  src="https://picsum.photos/seed/doctor-sarah/100/100"
                  alt="Dr. Sarah Chen"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-sm text-on-surface">Dr. Sarah Chen</h4>
                    <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-600 font-bold uppercase tracking-wider">
                      Verified Expert
                    </span>
                    <span className="text-xs text-slate-400">2 hours ago</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Excellent summary of the AI integration landscape. I'm particularly curious about the specific false-positive rates you observed in the ambulatory phase of the study. Did the synthetic data training account for motion artifacts in younger patients?
                  </p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                      <Reply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </section>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-96 p-8 bg-surface-container-low">
        <h4 className="font-headline font-extrabold text-lg text-on-surface mb-8">Related Research</h4>
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <Link key={i} to="/article" className="group block">
              <img
                className="w-full aspect-[16/9] object-cover rounded-lg mb-4 editorial-shadow grayscale group-hover:grayscale-0 transition-all duration-500"
                src={`https://picsum.photos/seed/research-${i}/400/225`}
                alt="Research"
                referrerPolicy="no-referrer"
              />
              <h5 className="font-headline font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                {i === 1 ? "Impact of Genomic Sequencing on Personalized Oncology Plans" : "Neuro-Regenerative Therapies: A Review of Current Trials"}
              </h5>
              <p className="text-xs text-slate-500 mt-2">{i === 1 ? "6 min read • Oncology" : "15 min read • Neurology"}</p>
            </Link>
          ))}
          
          <div className="pt-8">
            <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow">
              <Mail className="text-tertiary w-8 h-8 mb-4" />
              <h4 className="font-headline font-bold text-on-surface mb-2">The Weekly Clinical</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Get peer-reviewed insights delivered directly to your inbox every Tuesday morning.
              </p>
              <input
                className="w-full text-xs p-3 bg-surface border-none rounded-md mb-3 outline-none focus:ring-1 focus:ring-primary/20"
                placeholder="Your work email"
                type="email"
              />
              <Link to="/search" className="block w-full bg-primary text-white py-2 rounded-md font-bold text-xs hover:opacity-90 transition-opacity text-center">
                Join 40,000+ Professionals
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
