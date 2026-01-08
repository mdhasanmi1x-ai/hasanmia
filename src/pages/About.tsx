import Layout from "@/components/layout/Layout";
import { CheckCircle, Users, Target, Award } from "lucide-react";

const stats = [
  { number: "৫+", label: "বছরের অভিজ্ঞতা" },
  { number: "১৫০+", label: "সম্পন্ন প্রজেক্ট" },
  { number: "৫০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { number: "১০+", label: "টিম মেম্বার" },
];

const values = [
  {
    icon: Users,
    title: "ক্লায়েন্ট ফোকাস",
    description: "আমরা সবসময় ক্লায়েন্টদের সন্তুষ্টিকে সর্বোচ্চ প্রাধান্য দিই।",
  },
  {
    icon: Target,
    title: "মানসম্মত কাজ",
    description: "প্রতিটি প্রজেক্টে আমরা সর্বোচ্চ মান বজায় রাখি।",
  },
  {
    icon: Award,
    title: "সময়মত ডেলিভারি",
    description: "আমরা সবসময় নির্ধারিত সময়ের মধ্যে প্রজেক্ট সম্পন্ন করি।",
  },
];

const About = () => {
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
              আমাদের সম্পর্কে
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              আমরা <span className="text-secondary">ফ্রিল্যান্সহাব</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              বাংলাদেশের একটি শীর্ষস্থানীয় ফ্রিল্যান্সার টিম যারা ওয়েব ডেভেলপমেন্ট, 
              গ্রাফিক ডিজাইন এবং ডিজিটাল মার্কেটিং-এ বিশ্বমানের সেবা প্রদান করে।
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gold-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                আমাদের গল্প
              </span>
              <h2 className="heading-secondary mb-6">
                ২০১৯ থেকে আমরা <span className="gold-text">স্বপ্ন</span> বাস্তবায়ন করছি
              </h2>
              <p className="text-body mb-6">
                ফ্রিল্যান্সহাব শুরু হয়েছিল কয়েকজন উৎসাহী তরুণ ফ্রিল্যান্সারের হাত ধরে। 
                আমরা বিশ্বাস করি যে বাংলাদেশের প্রতিভাবান তরুণরা বিশ্বমানের কাজ করতে সক্ষম।
              </p>
              <p className="text-body mb-6">
                আজ আমরা একটি পূর্ণাঙ্গ টিম হিসেবে দেশ-বিদেশের বিভিন্ন ক্লায়েন্টদের সেবা দিচ্ছি। 
                আমাদের লক্ষ্য হলো বাংলাদেশকে আইটি সেক্টরে বিশ্বের মানচিত্রে উজ্জ্বল করা।
              </p>
              <ul className="space-y-3">
                {[
                  "উচ্চমানের কাস্টম সলিউশন",
                  "সাশ্রয়ী মূল্যে সেবা",
                  "২৪/৭ সাপোর্ট",
                  "দক্ষ ও অভিজ্ঞ টিম",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="আমাদের টিম"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gold-gradient rounded-2xl flex items-center justify-center">
                <div className="text-center text-secondary-foreground">
                  <div className="text-3xl font-bold">৫+</div>
                  <div className="text-sm">বছর</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              আমাদের মূল্যবোধ
            </span>
            <h2 className="heading-secondary">
              যে নীতিতে আমরা <span className="gold-text">বিশ্বাস</span> করি
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 card-elevated text-center"
              >
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
