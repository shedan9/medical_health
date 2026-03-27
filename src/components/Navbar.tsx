import { Link, useLocation } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: "Latest News", path: "/" },
    { name: "Health Education", path: "/education" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] h-20">
      <div className="flex justify-between items-center px-8 h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 uppercase font-headline">
            The Clinical Editorial
          </Link>
          <div className="hidden md:flex gap-8 items-center font-headline font-medium text-sm tracking-tight">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-all pb-1",
                  location.pathname === item.path
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative group hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-slate-400 w-4 h-4" />
            </div>
            <input
              className="block w-64 pl-10 pr-3 py-2 bg-surface-container-low border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="Search clinical insights..."
              type="text"
            />
          </div>
          <button className="editorial-gradient text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Subscribe
          </button>
          <button className="md:hidden text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
