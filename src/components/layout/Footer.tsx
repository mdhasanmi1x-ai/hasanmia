import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">ফ</span>
              </div>
              <span className="text-xl font-bold">
                ফ্রিল্যান্স<span className="text-secondary">হাব</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              আমরা উচ্চমানের ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন এবং ডিজিটাল মার্কেটিং সেবা প্রদান করি।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">হোম</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">সার্ভিস</Link></li>
              <li><Link to="/projects" className="text-primary-foreground/80 hover:text-secondary transition-colors">প্রজেক্ট</Link></li>
              <li><Link to="/team" className="text-primary-foreground/80 hover:text-secondary transition-colors">টিম</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">সার্ভিস</h4>
            <ul className="space-y-3">
              <li><span className="text-primary-foreground/80">ওয়েব ডেভেলপমেন্ট</span></li>
              <li><span className="text-primary-foreground/80">UI/UX ডিজাইন</span></li>
              <li><span className="text-primary-foreground/80">গ্রাফিক ডিজাইন</span></li>
              <li><span className="text-primary-foreground/80">SEO অপ্টিমাইজেশন</span></li>
              <li><span className="text-primary-foreground/80">ডিজিটাল মার্কেটিং</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <span className="text-primary-foreground/80">+৮৮০ ১৭XX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-secondary" />
                <span className="text-primary-foreground/80">contact@freelancehub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} ফ্রিল্যান্সহাব। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">প্রাইভেসি পলিসি</a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">ব্যবহারের শর্তাবলী</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
