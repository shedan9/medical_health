import { Link } from "react-router-dom";
import { Newspaper, Globe, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Privacy Policy", path: "/" },
    { name: "Terms of Service", path: "/" },
    { name: "Medical Disclaimer", path: "/" },
    { name: "Contact Info", path: "/" },
    { name: "Editorial Guidelines", path: "/" },
  ];

  return (
    <footer className="w-full mt-20 border-t border-slate-200/20 bg-surface">
      <div className="py-16 px-8 flex flex-col items-center gap-8 max-w-screen-2xl mx-auto">
        <span className="font-headline font-black text-lg text-slate-900 uppercase tracking-tighter">
          The Clinical Editorial
        </span>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs font-light text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 items-center">
          <Newspaper className="text-slate-400 cursor-pointer hover:text-primary transition-colors w-5 h-5" />
          <Globe className="text-slate-400 cursor-pointer hover:text-primary transition-colors w-5 h-5" />
          <Mail className="text-slate-400 cursor-pointer hover:text-primary transition-colors w-5 h-5" />
        </div>
        <p className="text-xs font-light text-slate-500 text-center max-w-xl">
          © 2024 The Clinical Editorial. Curating Medical Knowledge with Authority. All information provided is for educational purposes and does not constitute medical advice.
        </p>
      </div>
    </footer>
  );
}
