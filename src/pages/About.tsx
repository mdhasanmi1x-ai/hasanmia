import Layout from "@/components/layout/Layout";
import { CheckCircle, Users, Target, Award } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

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
  const { data: settings, isLoading } = useSiteSettings();

  // Get about page content from settings
  const title = settings?.about_title as string || "আমাদের সম্পর্কে";
  const subtitle = settings?.about_subtitle as string || "আমরা ফ্রিল্যান্সহাব";
  const description = settings?.about_description as string || "বাংলাদেশের একটি শীর্ষস্থানীয় ফ্রিল্যান্সার টিম যারা ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন এবং ডিজিটাল মার্কেটিং-এ বিশ্বমানের সেবা প্রদান করে।";
  const storyTitle = settings?.about_story_title as string || "আমাদের গল্প";
  const storyDescription1 = settings?.about_story_description1 as string || "";
  const storyDescription2 = settings?.about_story_description2 as string || "";
  const imageUrl = settings?.about_image_url as string || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop";
  
  // Parse features - can be stored as JSON array in settings
  let features: string[] = [];
  if (settings?.about_features) {
    if (Array.isArray(settings.about_features)) {
      features = settings.about_features as string[];
    } else if (typeof settings.about_features === 'string') {
      try {
        features = JSON.parse(settings.about_features as string);
      } catch {
        features = (settings.about_features as string).split(',').map(f => f.trim());
      }
    }
  }

  // Get stats from hero settings
  const stat1Number = settings?.hero_stat1_number as string || "";
  const stat1Label = settings?.hero_stat1_label as string || "";
  const stat2Number = settings?.hero_stat2_number as string || "";
  const stat2Label = settings?.hero_stat2_label as string || "";
  const stat3Number = settings?.hero_stat3_number as string || "";
  const stat3Label = settings?.hero_stat3_label as string || "";

  const stats = [
    { number: stat1Number, label: stat1Label },
    { number: stat2Number, label: stat2Label },
    { number: stat3Number, label: stat3Label },
  ].filter(s => s.number && s.label);

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
              {title}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {subtitle}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats.length > 0 && (
        <section className="py-12 bg-card border-b border-border">
          <div className="container-custom">
            <div className={`grid grid-cols-${Math.min(stats.length, 4)} gap-8`}>
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
      )}

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                {storyTitle || "আমাদের গল্প"}
              </span>
              <h2 className="heading-secondary mb-6">
                আমাদের <span className="gold-text">যাত্রা</span>
              </h2>
              {storyDescription1 ? (
                <>
                  <p className="text-body mb-6">{storyDescription1}</p>
                  {storyDescription2 && <p className="text-body mb-6">{storyDescription2}</p>}
                </>
              ) : (
                <p className="text-muted-foreground mb-6">
                  আমাদের সম্পর্কে তথ্য এখনো যোগ করা হয়নি। অ্যাডমিন প্যানেল থেকে যোগ করুন।
                </p>
              )}
              
              {features.length > 0 && (
                <ul className="space-y-3">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-secondary" size={20} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={imageUrl}
                  alt="আমাদের টিম"
                  className="w-full h-full object-cover"
                />
              </div>
              {stat1Number && (
                <div className="absolute -bottom-6 -left-6 w-32 h-32 gold-gradient rounded-2xl flex items-center justify-center">
                  <div className="text-center text-secondary-foreground">
                    <div className="text-3xl font-bold">{stat1Number}</div>
                    <div className="text-sm">{stat1Label}</div>
                  </div>
                </div>
              )}
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
