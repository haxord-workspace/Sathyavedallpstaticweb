import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/wellness", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        visible
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sathyaveda Herbals LLP" className="h-9 w-auto lg:h-11" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide text-foreground/75">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-brand-green-dark transition-colors duration-300">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-brand-green-dark px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-brand-green"
          >
            Get in Touch
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-brand-green-dark">
              {l.label}
            </Link>
          ))}
         
        </div>
      )}
    </header>
  );
}
