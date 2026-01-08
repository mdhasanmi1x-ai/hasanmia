import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ExternalLink, Eye } from "lucide-react";

const categories = ["সব", "ওয়েব ডিজাইন", "মোবাইল অ্যাপ", "ব্র্যান্ডিং", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "ই-কমার্স প্ল্যাটফর্ম",
    category: "ওয়েব ডিজাইন",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    client: "ফ্যাশন স্টোর বিডি",
    teamMember: "আহমেদ হাসান",
    description: "একটি পূর্ণাঙ্গ ই-কমার্স প্ল্যাটফর্ম পেমেন্ট গেটওয়ে সহ।",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "ফুড ডেলিভারি অ্যাপ",
    category: "মোবাইল অ্যাপ",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    client: "খাবারঘর",
    teamMember: "ফাতেমা আক্তার",
    description: "রিয়েল-টাইম ট্র্যাকিং সহ ফুড ডেলিভারি অ্যাপ।",
    technologies: ["Flutter", "Firebase", "Google Maps"],
  },
  {
    id: 3,
    title: "কর্পোরেট ব্র্যান্ডিং",
    category: "ব্র্যান্ডিং",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    client: "টেক সলিউশন্স লিমিটেড",
    teamMember: "করিম উদ্দিন",
    description: "সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি প্যাকেজ।",
    technologies: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 4,
    title: "হেলথকেয়ার ড্যাশবোর্ড",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    client: "মেডিকেয়ার হসপিটাল",
    teamMember: "সাবরিনা ইসলাম",
    description: "রোগীদের তথ্য ম্যানেজমেন্ট ড্যাশবোর্ড।",
    technologies: ["Figma", "React", "Chart.js"],
  },
  {
    id: 5,
    title: "রিয়েল এস্টেট ওয়েবসাইট",
    category: "ওয়েব ডিজাইন",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    client: "হোমফাইন্ডার প্রপার্টিজ",
    teamMember: "আহমেদ হাসান",
    description: "প্রপার্টি লিস্টিং এবং সার্চ ফিচার সহ ওয়েবসাইট।",
    technologies: ["Next.js", "PostgreSQL", "Mapbox"],
  },
  {
    id: 6,
    title: "ফিটনেস ট্র্যাকার অ্যাপ",
    category: "মোবাইল অ্যাপ",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    client: "ফিটজোন জিম",
    teamMember: "করিম উদ্দিন",
    description: "ওয়ার্কআউট ট্র্যাকিং এবং ডায়েট প্ল্যান অ্যাপ।",
    technologies: ["React Native", "HealthKit", "Firebase"],
  },
  {
    id: 7,
    title: "এডুটেক প্ল্যাটফর্ম",
    category: "ওয়েব ডিজাইন",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    client: "শিক্ষা অনলাইন",
    teamMember: "ফাতেমা আক্তার",
    description: "অনলাইন কোর্স এবং লার্নিং ম্যানেজমেন্ট সিস্টেম।",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 8,
    title: "রেস্টুরেন্ট ব্র্যান্ডিং",
    category: "ব্র্যান্ডিং",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    client: "স্বাদ রেস্টুরেন্ট",
    teamMember: "সাবরিনা ইসলাম",
    description: "মেনু ডিজাইন, লোগো এবং ইন্টেরিয়র গ্রাফিক্স।",
    technologies: ["Adobe Suite", "Canva"],
  },
  {
    id: 9,
    title: "ব্যাংকিং অ্যাপ UI",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    client: "ডিজিটাল ব্যাংক",
    teamMember: "আহমেদ হাসান",
    description: "মোবাইল ব্যাংকিং অ্যাপের UI/UX ডিজাইন।",
    technologies: ["Figma", "Protopie"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("সব");

  const filteredProjects =
    activeCategory === "সব"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden card-elevated"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <Eye className="text-secondary-foreground" size={20} />
                    </button>
                    <button className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                      <ExternalLink className="text-primary" size={20} />
                    </button>
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
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <span>ক্লায়েন্ট:</span>
                    <span className="text-foreground font-medium">{project.client}</span>
                  </div>
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
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <div className="w-8 h-8 hero-gradient rounded-full" />
                    <span className="text-sm text-foreground">{project.teamMember}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
