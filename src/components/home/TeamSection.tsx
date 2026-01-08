import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "আহমেদ হাসান",
    role: "ফুলস্ট্যাক ডেভেলপার",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    skills: ["React", "Node.js", "MongoDB"],
    projectCount: 45,
  },
  {
    id: 2,
    name: "ফাতেমা আক্তার",
    role: "UI/UX ডিজাইনার",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    skills: ["Figma", "Adobe XD", "Sketch"],
    projectCount: 38,
  },
  {
    id: 3,
    name: "করিম উদ্দিন",
    role: "মোবাইল ডেভেলপার",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    skills: ["Flutter", "React Native", "Swift"],
    projectCount: 32,
  },
  {
    id: 4,
    name: "সাবরিনা ইসলাম",
    role: "ডিজিটাল মার্কেটার",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    skills: ["SEO", "Google Ads", "Social Media"],
    projectCount: 28,
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            আমাদের টিম
          </span>
          <h2 className="heading-primary mb-6">
            প্রতিভাবান <span className="gold-text">বিশেষজ্ঞরা</span>
          </h2>
          <p className="text-body">
            আমাদের দক্ষ পেশাদারদের সাথে পরিচিত হোন যারা আপনার প্রজেক্টকে সাফল্যের দিকে নিয়ে যাবে।
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-2xl overflow-hidden card-elevated text-center"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 hero-gradient/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href="#" className="w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <Facebook size={16} className="text-primary" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    <Twitter size={16} className="text-primary" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                    <Linkedin size={16} className="text-primary" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-250">
                    <Github size={16} className="text-primary" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-4">
                  {member.role}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{member.projectCount}</span> প্রজেক্ট সম্পন্ন
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/team" className="btn-outline inline-flex items-center gap-2">
            সব মেম্বার দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
