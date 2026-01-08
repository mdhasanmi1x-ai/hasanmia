import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground/90 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              বাংলাদেশের সেরা ফ্রিল্যান্স টিম
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              আপনার স্বপ্নের
              <br />
              <span className="text-secondary">প্রজেক্ট</span> বাস্তবায়ন করুন
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              আমরা ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, UI/UX এবং ডিজিটাল মার্কেটিং-এ 
              বিশ্বমানের সেবা প্রদান করি। আপনার ব্যবসার জন্য সঠিক সমাধান খুঁজে পান।
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="btn-secondary text-base px-8 py-6 group">
                  এখনই শুরু করুন
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
                  <Play className="mr-2" size={20} />
                  আমাদের কাজ দেখুন
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">১৫০+</div>
                <div className="text-primary-foreground/70 text-sm">সম্পন্ন প্রজেক্ট</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">৫০+</div>
                <div className="text-primary-foreground/70 text-sm">সন্তুষ্ট ক্লায়েন্ট</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">৫+</div>
                <div className="text-primary-foreground/70 text-sm">বছরের অভিজ্ঞতা</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 w-48 h-32 bg-card rounded-xl shadow-2xl p-4 animate-float">
                <div className="w-8 h-8 gold-gradient rounded-lg mb-2" />
                <div className="h-2 bg-muted rounded w-3/4 mb-2" />
                <div className="h-2 bg-muted rounded w-1/2" />
              </div>

              <div className="absolute bottom-20 left-0 w-52 h-36 bg-card rounded-xl shadow-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex gap-2 mb-3">
                  <div className="w-10 h-10 hero-gradient rounded-full" />
                  <div>
                    <div className="h-2 bg-muted rounded w-20 mb-1" />
                    <div className="h-2 bg-muted rounded w-16" />
                  </div>
                </div>
                <div className="h-2 bg-muted rounded w-full mb-2" />
                <div className="h-2 bg-muted rounded w-3/4" />
              </div>

              <div className="absolute top-1/2 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />

              {/* Main Card */}
              <div className="relative mx-auto w-80 h-96 bg-card rounded-2xl shadow-2xl overflow-hidden">
                <div className="hero-gradient h-24 flex items-end p-4">
                  <div className="w-16 h-16 bg-card rounded-full border-4 border-card translate-y-8" />
                </div>
                <div className="p-6 pt-12">
                  <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-3 bg-muted rounded w-1/2 mb-6" />
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                  </div>
                  <div className="h-10 gold-gradient rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
