import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
  featured?: boolean;
}

export default function ArticleCard({ category, title, excerpt, image, readTime, featured }: ArticleCardProps) {
  if (featured) {
    return (
      <Link to="/article" className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:translate-y-[-4px] transition-all flex flex-col md:flex-row h-full group">
        <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={image}
            alt={title}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-3">
            {category}
          </span>
          <h3 className="font-headline text-2xl font-bold mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            {excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/20">
            <span className="text-xs text-slate-400 font-medium">{readTime}</span>
            <span className="text-primary font-bold text-sm uppercase tracking-tighter">
              Read Article
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/article" className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:translate-y-[-4px] transition-all group">
      <div className="aspect-video mb-6 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-primary-container text-[10px] font-bold uppercase tracking-widest mb-2 block">
        {category}
      </span>
      <h4 className="font-headline text-lg font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-on-surface-variant text-sm line-clamp-2">
        {excerpt}
      </p>
    </Link>
  );
}
