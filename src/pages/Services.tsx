import Layout from "@/components/layout/Layout";
import { Code, Palette, TrendingUp, Megaphone, Smartphone, Search, Database, Shield, ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

const Services = () => {
  const { data: services, isLoading } = useServices();

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
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              লোড হচ্ছে...
            </div>
          ) : !services || services.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              কোনো সার্ভিস পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে সার্ভিস যোগ করুন।
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon || "Code"] || Code;
                return (
                  <div
                    key={service.id}
                    className="bg-card rounded-2xl p-8 card-elevated border border-border/50 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="text-primary-foreground" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-end pt-4 border-t border-border">
                          <Link to="/contact" className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm font-medium">
                            বিস্তারিত <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
