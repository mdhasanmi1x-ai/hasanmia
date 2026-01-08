import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = ["সব", "ওয়েব ডিজাইন", "মোবাইল অ্যাপ", "ব্র্যান্ডিং", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "ই-কমার্স প্ল্যাটফর্ম",
    category: "ওয়েব ডিজাইন",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
    client: "ফ্যাশন স্টোর",
    teamMember: "আহমেদ হাসান",
  },
  {
    id: 2,
    title: "ফুড ডেলিভারি অ্যাপ",
    category: "মোবাইল অ্যাপ",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    client: "খাবারঘর",
    teamMember: "ফাতেমা আক্তার",
  },
  {
    id: 3,
    title: "কর্পোরেট ব্র্যান্ডিং",
    category: "ব্র্যান্ডিং",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    client: "টেক সলিউশন্স",
    teamMember: "করিম উদ্দিন",
  },
  {
    id: 4,
    title: "হেলথকেয়ার ড্যাশবোর্ড",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    client: "মেডিকেয়ার",
    teamMember: "সাবরিনা ইসলাম",
  },
  {
    id: 5,
    title: "রিয়েল এস্টেট ওয়েবসাইট",
    category: "ওয়েব ডিজাইন",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    client: "হোমফাইন্ডার",
    teamMember: "আহমেদ হাসান",
  },
  {
    id: 6,
    title: "ফিটনেস ট্র্যাকার",
    category: "মোবাইল অ্যাপ",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    client: "ফিটজোন",
    teamMember: "করিম উদ্দিন",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("সব");

  const filteredProjects =
    activeCategory === "সব"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden card-elevated"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="text-secondary-foreground" size={20} />
                  </button>
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
                <p className="text-muted-foreground text-sm mb-3">
                  ক্লায়েন্ট: {project.client}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-6 h-6 hero-gradient rounded-full" />
                  <span>{project.teamMember}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
