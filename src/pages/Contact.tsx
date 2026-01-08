import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Contact = () => {
  const { toast } = useToast();
  const { data: settings } = useSiteSettings();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "বার্তা পাঠানো হয়েছে!",
      description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  // Get contact info from settings
  const address = settings?.contact_address as string || "";
  const phone = settings?.contact_phone as string || "";
  const email = settings?.contact_email as string || "";

  const contactInfo = [
    {
      icon: MapPin,
      title: "ঠিকানা",
      details: address ? [address] : [],
      show: !!address,
    },
    {
      icon: Phone,
      title: "ফোন",
      details: phone ? [phone] : [],
      show: !!phone,
    },
    {
      icon: Mail,
      title: "ইমেইল",
      details: email ? [email] : [],
      show: !!email,
    },
    {
      icon: Clock,
      title: "অফিস সময়",
      details: ["শনি - বৃহস্পতি: ১০:০০ - ১৯:০০", "শুক্রবার: বন্ধ"],
      show: true,
    },
  ].filter(info => info.show);

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
              যোগাযোগ করুন
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              আমাদের সাথে <span className="text-secondary">কথা বলুন</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              আপনার প্রজেক্ট নিয়ে আলোচনা করতে বা যেকোনো প্রশ্নের জন্য 
              আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় সাহায্য করতে প্রস্তুত!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-secondary mb-4">
                  যোগাযোগের <span className="gold-text">তথ্য</span>
                </h2>
                <p className="text-muted-foreground">
                  নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।
                </p>
              </div>

              {contactInfo.length === 0 ? (
                <div className="text-muted-foreground text-sm">
                  যোগাযোগের তথ্য এখনো যোগ করা হয়নি।
                </div>
              ) : (
                contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-foreground" size={22} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))
              )}

              {/* WhatsApp Button */}
              {phone && (
                <a
                  href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors"
                >
                  <MessageCircle size={20} />
                  হোয়াটসঅ্যাপে মেসেজ করুন
                </a>
              )}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50">
                <h2 className="heading-secondary mb-6">
                  বার্তা <span className="gold-text">পাঠান</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        আপনার নাম *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="আপনার পুরো নাম"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ইমেইল *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ফোন নম্বর
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+৮৮০ ১XXXXXXXXX"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        বিষয় *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="প্রজেক্ট সম্পর্কে"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      আপনার বার্তা *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="আপনার প্রজেক্ট বা প্রশ্ন সম্পর্কে বিস্তারিত লিখুন..."
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "পাঠানো হচ্ছে..."
                    ) : (
                      <>
                        <Send size={18} />
                        বার্তা পাঠান
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
