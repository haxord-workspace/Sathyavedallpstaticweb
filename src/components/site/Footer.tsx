import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-green-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-4 grid gap-3 md:grid-cols-4 md:gap-4 lg:py-6">
        <div>
          <img src={logo} alt="Sathyaveda Herbals" className="h-10 w-auto bg-background/95 rounded-lg p-1.5 lg:h-12" />
          <p className="text-[11px] mt-2 opacity-70 leading-snug">
            Authentic ayurvedic wellness from the heart of Kerala. Crafted with tradition, trusted by generations.
          </p>
            <div className="flex gap-2.5 mt-3">
            <Facebook className="h-3.5 w-3.5" />
            <Instagram className="h-3.5 w-3.5" />
            <Youtube className="h-3.5 w-3.5" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-1.5 text-sm"><Link to="/products">Shop</Link></h4>
          <ul className="space-y-1 text-[11px] opacity-75">
            <li><Link to="/product/$productId" params={{ productId: "abc-powder" }}>ABC Capsules</Link></li>
            <li><Link to="/product/$productId" params={{ productId: "veda-chargex" }}>Veda ChargeX</Link></li>
            <li><Link to="/product/$productId" params={{ productId: "badam" }}>Almonds</Link></li>
            <li><Link to="/product/$productId" params={{ productId: "cashew" }}>Cashew</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1.5 text-sm">Company</h4>
          <ul className="space-y-1 text-[11px] opacity-75">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/journals">Journals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1.5 text-sm">Reach Us</h4>
          <ul className="space-y-1.5 text-[11px] opacity-75">
            <li className="flex gap-2"><MapPin className="h-3 w-3 mt-0.5 shrink-0" /> Pokkotumbadam, Kerala, India</li>
            <li className="flex gap-2 items-start"><Phone className="h-3 w-3 mt-0.5 shrink-0" /><span><span className="opacity-60 text-[9px] uppercase tracking-wider">Office</span><br />04931 237003</span></li>
            <li className="flex gap-2 items-start"><Phone className="h-3 w-3 mt-0.5 shrink-0" /><span><span className="opacity-60 text-[9px] uppercase tracking-wider">WhatsApp</span><br />7481 031 003<br />9061 936 003</span></li>
            <li className="flex gap-2"><Mail className="h-3 w-3 mt-0.5 shrink-0" /> sathyavedaherbals@gmail.com</li>
          </ul>
        
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-2.5 text-center text-[9px] opacity-50 tracking-widest">
        © {new Date().getFullYear()} Sathyaveda Herbals LLP. All rights reserved.
      </div>
    </footer>
  );
}
