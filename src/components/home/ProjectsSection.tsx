import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/useProjects";

const defaultCategories = ["সব", "ওয়েব ডিজাইন", "মোবাইল অ্যাপ", "ব্র্যান্ডিং", "UI/UX"];

const ProjectsSection = () => {
  const { data: projects } = useProjects();
  const [activeCategory, setActiveCategory] = useState("সব");

  // Get unique categories from projects
  const categories = projects && projects.length > 0
    ? ["সব", ...new Set(projects.map(p => p.category))]
    : defaultCategories;

  const filteredProjects = projects
    ? activeCategory === "সব"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
    : [];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            আমাদের প্রজেক্ট
          </span>
          <h2 className="heading-primary mb-6">
            সাম্প্রতিক <span className="gold-text">কাজ</span>
          </h2>
          <p className="text-body">
            আমাদের দক্ষ টিম দ্বারা সম্পন্ন সেরা প্রজেক্টগুলো দেখুন।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "hero-gradient text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            কোনো প্রজেক্ট পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে প্রজেক্ট যোগ করুন।
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden card-elevated"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image_url || "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.project_url && (
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                      >
                        <ExternalLink className="text-secondary-foreground" size={20} />
                      </a>
                    )}
                  </div>
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.client_name && (
                    <p className="text-muted-foreground text-sm mb-3">
                      ক্লায়েন্ট: {project.client_name}
                    </p>
                  )}
                  {project.project_team_members && project.project_team_members.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {project.project_team_members[0].team_members?.image_url ? (
                        <img 
                          src={project.project_team_members[0].team_members.image_url} 
                          alt={project.project_team_members[0].team_members.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 hero-gradient rounded-full" />
                      )}
                      <span>{project.project_team_members[0].team_members?.name}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="btn-primary group">
              সব প্রজেক্ট দেখুন
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
