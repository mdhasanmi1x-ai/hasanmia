import { Code, Palette, TrendingUp, Megaphone, Smartphone, Search, Database, Shield, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useServices } from "@/hooks/useServices";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  Smartphone,
  Search,
  Megaphone,
  TrendingUp,
  Database,
  Shield,
};

const ServicesSection = () => {
  const { data: services } = useServices();

  if (!services || services.length === 0) {
    return (
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              আমাদের সার্ভিস
            </span>
            <h2 className="heading-primary mb-6">
              আপনার <span className="gold-text">ব্যবসার</span> জন্য সেরা সমাধান
            </h2>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            কোনো সার্ভিস পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে সার্ভিস যোগ করুন।
          </div>
        </div>
      </section>
    );
  }

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
          {services.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.icon || "Code"] || Code;
            return (
              <div
                key={service.id}
                className="group bg-card rounded-2xl p-8 card-elevated border border-border/50"
              >
                <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
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
