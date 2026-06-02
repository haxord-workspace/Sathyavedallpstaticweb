import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-brand-green-dark text-primary-foreground text-xs py-2 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>✦ Free delivery on orders over ₹499 ✦ Authentic Kerala Ayurveda</span>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="hidden md:flex items-center gap-2 border border-brand-green rounded-full px-4 py-2 w-72">
          <Search className="h-4 w-4 text-brand-green" />
          <input placeholder="Search for Hair Care" className="bg-transparent text-sm outline-none flex-1" />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}><Menu /></button>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sathyaveda Herbals LLP" className="h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link to="/" className="hover:text-brand-green transition duration-300">Home</Link>
          <span className="text-border">|</span>
          <Link to="/about" className="hover:text-brand-green transition duration-300">About</Link>
          <span className="text-border">|</span>
          <Link to="/products" className="hover:text-brand-green transition duration-300">Products</Link>
          <span className="text-border">|</span>
          <Link to="/wellness" className="hover:text-brand-green transition duration-300">Wellness</Link>
          <span className="text-border">|</span>
          <Link to="/contact" className="hover:text-brand-green transition duration-300">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 text-foreground/80">
          <User className="h-5 w-5 hidden sm:block" />
          <ShoppingBag className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-8 text-sm font-medium">
          <a href="#concern" className="hover:text-brand-green">Shop by Concern</a>
          <a href="#doshas" className="hover:text-brand-green">Shop by Doshas</a>
          <a href="#bundles" className="hover:text-brand-green">Self Care Bundles</a>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-3 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/wellness">Wellness</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </header>
  );
}
