import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const CTASection = () => {
  const { data: settings } = useSiteSettings();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {(settings?.cta_title_line1 as string) || "আপনার পরবর্তী প্রজেক্ট"}
            <br />
            <span className="text-secondary">
              {(settings?.cta_title_line2 as string) || "আমাদের সাথে শুরু করুন"}
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            {(settings?.cta_description as string) || "আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার আইডিয়াকে বাস্তবে রূপ দিন। ফ্রি কনসালটেশন পান!"}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-secondary text-base px-8 py-6 group">
                <MessageCircle className="mr-2" size={20} />
                {(settings?.cta_button_primary as string) || "যোগাযোগ করুন"}
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base group"
              >
                {(settings?.cta_button_secondary as string) || "পোর্টফোলিও দেখুন"}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
