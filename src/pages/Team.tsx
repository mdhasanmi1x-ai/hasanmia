import Layout from "@/components/layout/Layout";
import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTeamMembers } from "@/hooks/useTeamMembers";

const Team = () => {
  const { data: teamMembers, isLoading } = useTeamMembers();

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
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">লোড হচ্ছে...</div>
          ) : !teamMembers || teamMembers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              কোনো টিম মেম্বার পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে টিম মেম্বার যোগ করুন।
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-2xl overflow-hidden card-elevated group"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 hero-gradient/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-secondary"
                        >
                          <Facebook size={18} className="text-primary" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:bg-secondary"
                        >
                          <Linkedin size={18} className="text-primary" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-250 hover:bg-secondary"
                        >
                          <Github size={18} className="text-primary" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-4">
                      {member.designation}
                    </p>
                    {member.bio && (
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                    )}

                    {/* Skills */}
                    {member.skills && member.skills.length > 0 && (
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
                    )}

                    {member.email && (
                      <div className="flex items-center justify-end pt-4 border-t border-border">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Mail size={14} />
                          যোগাযোগ
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
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
            যোগাযোগ করুন
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
