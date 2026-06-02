import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-green-dark text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Sathyaveda Herbals" className="h-20 w-auto bg-background/95 rounded-lg p-2" />
          <p className="text-sm mt-4 opacity-80">
            Authentic ayurvedic wellness from the heart of Kerala. Crafted with tradition, trusted by generations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Shop</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/products">Skin Care</Link></li>
            <li><Link to="/products">Hair Care</Link></li>
            <li><Link to="/products">Pain Relief</Link></li>
            <li><Link to="/products">Immunity</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/wellness">Ayurvedic Wisdom</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Pokkotumbadam, Kerala, India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 00000 00000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@sathyavedaherbals.com</li>
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
