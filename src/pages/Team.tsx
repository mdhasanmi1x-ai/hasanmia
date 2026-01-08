import Layout from "@/components/layout/Layout";
import { Facebook, Twitter, Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "আহমেদ হাসান",
    role: "ফাউন্ডার ও লিড ডেভেলপার",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "৭+ বছরের অভিজ্ঞতা সহ ফুলস্ট্যাক ডেভেলপার। React, Node.js এবং ক্লাউড টেকনোলজিতে বিশেষজ্ঞ।",
    skills: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
    projectCount: 45,
    email: "ahmed@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 2,
    name: "ফাতেমা আক্তার",
    role: "সিনিয়র UI/UX ডিজাইনার",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "ক্রিয়েটিভ ডিজাইনার যিনি ব্যবহারকারী-কেন্দ্রিক ডিজাইনে বিশ্বাস করেন। ৫+ বছরের অভিজ্ঞতা।",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    projectCount: 38,
    email: "fatema@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 3,
    name: "করিম উদ্দিন",
    role: "মোবাইল অ্যাপ ডেভেলপার",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "iOS এবং Android অ্যাপ ডেভেলপমেন্টে বিশেষজ্ঞ। Flutter এবং React Native-এ দক্ষ।",
    skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    projectCount: 32,
    email: "karim@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 4,
    name: "সাবরিনা ইসলাম",
    role: "ডিজিটাল মার্কেটিং স্পেশালিস্ট",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "SEO এবং সোশ্যাল মিডিয়া মার্কেটিং-এ ৪+ বছরের অভিজ্ঞতা। গুগল সার্টিফাইড।",
    skills: ["SEO", "Google Ads", "Social Media", "Content Strategy", "Analytics"],
    projectCount: 28,
    email: "sabrina@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 5,
    name: "রাফি আহমেদ",
    role: "ব্যাকএন্ড ডেভেলপার",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "স্কেলেবল ব্যাকএন্ড সিস্টেম তৈরিতে অভিজ্ঞ। মাইক্রোসার্ভিস আর্কিটেকচার স্পেশালিস্ট।",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Kubernetes"],
    projectCount: 25,
    email: "rafi@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 6,
    name: "নাফিসা খানম",
    role: "গ্রাফিক ডিজাইনার",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "ক্রিয়েটিভ গ্রাফিক ডিজাইনার। ব্র্যান্ডিং এবং ভিজ্যুয়াল আইডেন্টিটিতে বিশেষজ্ঞ।",
    skills: ["Illustrator", "Photoshop", "After Effects", "Branding", "Print Design"],
    projectCount: 40,
    email: "nafisa@freelancehub.com",
    social: { facebook: "#", twitter: "#", linkedin: "#", github: "#" },
  },
];

const Team = () => {
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
              আমাদের টিম
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              প্রতিভাবান <span className="text-secondary">বিশেষজ্ঞরা</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              আমাদের অভিজ্ঞ এবং দক্ষ টিম মেম্বারদের সাথে পরিচিত হোন যারা 
              আপনার প্রজেক্টকে সাফল্যের দিকে নিয়ে যাবে।
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-2xl overflow-hidden card-elevated group"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 hero-gradient/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={member.social.facebook}
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-secondary"
                    >
                      <Facebook size={18} className="text-primary" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-secondary"
                    >
                      <Twitter size={18} className="text-primary" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:bg-secondary"
                    >
                      <Linkedin size={18} className="text-primary" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-250 hover:bg-secondary"
                    >
                      <Github size={18} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">{member.projectCount}</span>
                      <span className="text-muted-foreground"> প্রজেক্ট</span>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                    >
                      <Mail size={14} />
                      যোগাযোগ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">
            আমাদের <span className="gold-text">টিমে</span> যোগ দিন
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            আপনি কি একজন দক্ষ ফ্রিল্যান্সার? আমাদের টিমে যোগ দিয়ে 
            আপনার ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যান।
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            আবেদন করুন <ExternalLink size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
