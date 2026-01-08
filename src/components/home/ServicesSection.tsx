import { Code, Palette, TrendingUp, Megaphone, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট তৈরি করি যা আপনার ব্যবসাকে অনলাইনে সফল করবে।",
  },
  {
    icon: Palette,
    title: "UI/UX ডিজাইন",
    description: "ব্যবহারকারী-বান্ধব এবং আকর্ষণীয় ইন্টারফেস ডিজাইন যা আপনার গ্রাহকদের মুগ্ধ করবে।",
  },
  {
    icon: Smartphone,
    title: "মোবাইল অ্যাপ",
    description: "iOS এবং Android প্ল্যাটফর্মের জন্য উচ্চমানের মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট।",
  },
  {
    icon: Search,
    title: "SEO অপ্টিমাইজেশন",
    description: "সার্চ ইঞ্জিনে আপনার ওয়েবসাইটের র‍্যাংকিং বাড়ান এবং বেশি ভিজিটর পান।",
  },
  {
    icon: Megaphone,
    title: "ডিজিটাল মার্কেটিং",
    description: "সোশ্যাল মিডিয়া, PPC এবং কন্টেন্ট মার্কেটিং-এ পূর্ণাঙ্গ সেবা।",
  },
  {
    icon: TrendingUp,
    title: "ব্র্যান্ডিং",
    description: "আপনার ব্র্যান্ডের জন্য লোগো, বিজনেস কার্ড এবং সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি।",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            আমাদের সার্ভিস
          </span>
          <h2 className="heading-primary mb-6">
            আপনার <span className="gold-text">ব্যবসার</span> জন্য সেরা সমাধান
          </h2>
          <p className="text-body">
            আমরা বিভিন্ন ধরনের ডিজিটাল সেবা প্রদান করি যা আপনার অনলাইন উপস্থিতি শক্তিশালী করবে।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-elevated border border-border/50"
            >
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline inline-flex items-center gap-2">
            সব সার্ভিস দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
