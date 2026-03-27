import { Brain, Verified, MessageSquare, Library } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const tweets = [
    {
      category: "Expert Insights",
      content: '"Circadian rhythm alignment isn\'t just about sleep. It influences metabolic health and hormone regulation. Try eating within a 10-hour window."',
      author: "Dr. Elena Vance",
      icon: Verified,
    },
    {
      category: "Prevention Tip",
      content: '"The 20-20-20 rule for digital eye strain: every 20 minutes, look 20 feet away for 20 seconds. Simple clinical ergonomics that work."',
      author: "Clinical Community",
      icon: MessageSquare,
    },
    {
      category: "Nutrition Tech",
      content: '"Probiotics are most effective when consumed with prebiotic fibers. Think of them as the \'fuel\' for your gut flora\'s \'engine\'."',
      author: "Medical Library",
      icon: Library,
    },
  ];

  return (
    <aside className="lg:w-80 flex flex-col gap-8">
      <div className="bg-surface-container-low rounded-xl p-6 sticky top-28">
        <header className="mb-8">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Brain className="w-6 h-6" />
            <h3 className="font-headline font-bold text-slate-900">Health Education Tweets</h3>
          </div>
          <p className="text-xs text-slate-500 font-medium">Daily authoritative health capsules</p>
        </header>
        
        <div className="space-y-6">
          {tweets.map((tweet, idx) => (
            <div key={idx} className="relative pl-4 border-l-2 border-primary/30 group">
              <span className="text-[10px] font-bold text-tertiary uppercase mb-1 block">
                {tweet.category}
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {tweet.content}
              </p>
              <div className="flex items-center gap-2 mt-3 text-[10px] font-semibold text-primary/70">
                <tweet.icon className="w-3.5 h-3.5" />
                {tweet.author}
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/search" className="block w-full mt-10 py-3 bg-white border border-outline-variant/30 text-primary font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors text-center">
          Join Clinical Circle
        </Link>
      </div>
      
      <div className="bg-primary-container p-6 rounded-xl text-white">
        <h4 className="font-headline font-bold text-lg mb-2">Editorial Guidelines</h4>
        <p className="text-xs opacity-80 leading-relaxed mb-6">
          Learn about our rigorous peer-review and verification process that keeps our information authoritative.
        </p>
        <Link to="/education" className="text-xs font-bold underline underline-offset-4 uppercase tracking-widest hover:opacity-80 transition-opacity">
          Learn More
        </Link>
      </div>
    </aside>
  );
}
