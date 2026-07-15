import { Link, useLocation } from "react-router-dom";
import { Sparkles, Search, MessageCircle, Grid } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Discover", path: "/discover" },
  { label: "Projects", path: "/projects" },
  { label: "Assistant", path: "/assistant" },
  { label: "Profile", path: "/profile" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 text-white">
          <Sparkles className="h-8 w-8 text-violet-400" />
          <div>
            <p className="text-lg font-semibold">SkillSwap</p>
            <p className="text-xs text-slate-400">AI teammate discovery</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                location.pathname === item.path
                  ? "bg-violet-500/15 text-violet-100"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400">
            Login
          </button>
          <button className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-400 hover:text-white md:inline-flex">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
