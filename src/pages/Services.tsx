import Layout from "@/components/layout/Layout";
import { Code, Palette, TrendingUp, Megaphone, Smartphone, Search, Database, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট তৈরি করি যা আপনার ব্যবসাকে অনলাইনে সফল করবে।",
    features: ["কাস্টম ওয়েব অ্যাপ", "ই-কমার্স সাইট", "CMS ডেভেলপমেন্ট", "API ইন্টিগ্রেশন"],
    price: "৳৫০,০০০ থেকে শুরু",
  },
  {
    icon: Palette,
    title: "UI/UX ডিজাইন",
    description: "ব্যবহারকারী-বান্ধব এবং আকর্ষণীয় ইন্টারফেস ডিজাইন যা আপনার গ্রাহকদের মুগ্ধ করবে।",
    features: ["ওয়্যারফ্রেমিং", "প্রোটোটাইপিং", "ইউজার রিসার্চ", "ডিজাইন সিস্টেম"],
    price: "৳৩০,০০০ থেকে শুরু",
  },
  {
    icon: Smartphone,
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    description: "iOS এবং Android প্ল্যাটফর্মের জন্য উচ্চমানের মোবাইল অ্যাপ্লিকেশন।",
    features: ["নেটিভ অ্যাপ", "ক্রস-প্ল্যাটফর্ম", "অ্যাপ মেইনটেন্যান্স", "পুশ নোটিফিকেশন"],
    price: "৳১,০০,০০০ থেকে শুরু",
  },
  {
    icon: Search,
    title: "SEO অপ্টিমাইজেশন",
    description: "সার্চ ইঞ্জিনে আপনার ওয়েবসাইটের র‍্যাংকিং বাড়ান এবং বেশি ভিজিটর পান।",
    features: ["কীওয়ার্ড রিসার্চ", "অন-পেজ SEO", "লিংক বিল্ডিং", "টেকনিক্যাল SEO"],
    price: "৳২০,০০০/মাস থেকে শুরু",
  },
  {
    icon: Megaphone,
    title: "ডিজিটাল মার্কেটিং",
    description: "সোশ্যাল মিডিয়া, PPC এবং কন্টেন্ট মার্কেটিং-এ পূর্ণাঙ্গ সেবা।",
    features: ["সোশ্যাল মিডিয়া", "গুগল অ্যাডস", "ইমেইল মার্কেটিং", "কন্টেন্ট স্ট্র্যাটেজি"],
    price: "৳২৫,০০০/মাস থেকে শুরু",
  },
  {
    icon: TrendingUp,
    title: "ব্র্যান্ডিং",
    description: "আপনার ব্র্যান্ডের জন্য লোগো, বিজনেস কার্ড এবং সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি।",
    features: ["লোগো ডিজাইন", "ব্র্যান্ড গাইডলাইন", "বিজনেস কার্ড", "সোশ্যাল মিডিয়া কিট"],
    price: "৳১৫,০০০ থেকে শুরু",
  },
  {
    icon: Database,
    title: "ডাটাবেজ ম্যানেজমেন্ট",
    description: "দক্ষ ডাটাবেজ ডিজাইন এবং ম্যানেজমেন্ট সলিউশন।",
    features: ["ডাটাবেজ ডিজাইন", "পারফরম্যান্স অপ্টিমাইজেশন", "ব্যাকআপ সিস্টেম", "মাইগ্রেশন"],
    price: "৳৪০,০০০ থেকে শুরু",
  },
  {
    icon: Shield,
    title: "সাইবার সিকিউরিটি",
    description: "আপনার ওয়েবসাইট এবং ডাটার নিরাপত্তা নিশ্চিত করুন।",
    features: ["সিকিউরিটি অডিট", "SSL সার্টিফিকেট", "ম্যালওয়্যার রিমুভাল", "ফায়ারওয়াল সেটআপ"],
    price: "৳১৫,০০০ থেকে শুরু",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              আমাদের সার্ভিস
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              আপনার <span className="text-secondary">ব্যবসার</span> জন্য সেরা সমাধান
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              আমরা বিভিন্ন ধরনের ডিজিটাল সেবা প্রদান করি যা আপনার অনলাইন উপস্থিতি শক্তিশালী করবে।
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 card-elevated border border-border/50 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-semibold gold-text">
                        {service.price}
                      </span>
                      <Link to="/contact" className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm font-medium">
                        বিস্তারিত <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient relative">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            কাস্টম সলিউশন দরকার?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            আপনার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টম সার্ভিস প্যাকেজ তৈরি করতে পারি। 
            আমাদের সাথে যোগাযোগ করুন!
          </p>
          <Link to="/contact">
            <Button className="btn-secondary">
              ফ্রি কনসালটেশন নিন
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
