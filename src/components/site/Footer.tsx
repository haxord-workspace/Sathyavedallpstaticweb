import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-green-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-8 grid gap-3 md:grid-cols-4 md:gap-8 lg:py-14 lg:gap-10">
        <div>
          <img src={logo} alt="Sathyaveda Herbals" className="h-16 w-auto bg-background/95 rounded-lg p-2 lg:h-20" />
          <p className="text-sm mt-3 opacity-80">
            Authentic ayurvedic wellness from the heart of Kerala. Crafted with tradition, trusted by generations.
          </p>
        </div>
        <div>
          <Link to="/products"><h4 className="font-semibold text-base sm:text-lg">Shop</h4></Link>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/wellness">Ayurvedic Wisdom</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Pokkotumbadam, Kerala, India</li>
            <li className="flex gap-2 items-start"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span><span className="opacity-60 text-xs">Office</span><br />04931 237003</span></li>
            <li className="flex gap-2 items-start"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span><span className="opacity-60 text-xs">WhatsApp</span><br />7481 031 003<br />9061 936 003</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> sathyavedaherbals@gmail.com</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Sathyaveda Herbals LLP. All rights reserved.
      </div>
    </footer>
  );
}
