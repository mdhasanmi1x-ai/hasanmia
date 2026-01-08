import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ExternalLink, Eye } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { data: projects, isLoading } = useProjects();
  const [activeCategory, setActiveCategory] = useState("সব");

  // Get unique categories from projects
  const categories = projects && projects.length > 0
    ? ["সব", ...new Set(projects.map(p => p.category))]
    : ["সব"];

  const filteredProjects = projects
    ? activeCategory === "সব"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
    : [];

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
              আমাদের পোর্টফোলিও
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              সাম্প্রতিক <span className="text-secondary">প্রজেক্টসমূহ</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              আমাদের দক্ষ টিম দ্বারা সম্পন্ন সেরা প্রজেক্টগুলো দেখুন এবং 
              আমাদের কাজের মান সম্পর্কে ধারণা নিন।
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "hero-gradient text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              লোড হচ্ছে...
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              কোনো প্রজেক্ট পাওয়া যায়নি। অ্যাডমিন প্যানেল থেকে প্রজেক্ট যোগ করুন।
            </div>
          ) : (
            /* Projects Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden card-elevated"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image_url || "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Eye className="text-secondary-foreground" size={20} />
                      </button>
                      {project.project_url && (
                        <a 
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150"
                        >
                          <ExternalLink className="text-primary" size={20} />
                        </a>
                      )}
                    </div>
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    {project.client_name && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <span>ক্লায়েন্ট:</span>
                        <span className="text-foreground font-medium">{project.client_name}</span>
                      </div>
                    )}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.project_team_members && project.project_team_members.length > 0 && (
                      <div className="flex items-center gap-2 pt-4 border-t border-border">
                        {project.project_team_members[0].team_members?.image_url ? (
                          <img 
                            src={project.project_team_members[0].team_members.image_url}
                            alt={project.project_team_members[0].team_members.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 hero-gradient rounded-full" />
                        )}
                        <span className="text-sm text-foreground">
                          {project.project_team_members[0].team_members?.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
