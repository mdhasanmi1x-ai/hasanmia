import { useState, useEffect } from "react";
import { Save, Globe, Home, Phone, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/admin/AdminLayout";
import ImageUpload from "@/components/admin/ImageUpload";
import { useSiteSettings, useBulkUpdateSiteSettings } from "@/hooks/useSiteSettings";
import { toast } from "sonner";

const SiteSettingsManagement = () => {
  const { data: settings, isLoading } = useSiteSettings();
  const updateSettings = useBulkUpdateSiteSettings();

  const [formData, setFormData] = useState<Record<string, string>>({
    // Site Meta
    site_name: "",
    site_tagline: "",
    site_logo_text: "",
    footer_copyright: "",
    
    // Hero Section
    hero_badge: "",
    hero_title_line1: "",
    hero_title_line2: "",
    hero_description: "",
    hero_cta_primary: "",
    hero_cta_secondary: "",
    hero_stat1_number: "",
    hero_stat1_label: "",
    hero_stat2_number: "",
    hero_stat2_label: "",
    hero_stat3_number: "",
    hero_stat3_label: "",
    
    // CTA Section
    cta_title_line1: "",
    cta_title_line2: "",
    cta_description: "",
    cta_button_primary: "",
    cta_button_secondary: "",
    
    // Contact Info
    contact_address: "",
    contact_phone: "",
    contact_email: "",
    contact_facebook: "",
    contact_twitter: "",
    contact_linkedin: "",
    contact_instagram: "",
    
    // About Page
    about_title: "",
    about_subtitle: "",
    about_description: "",
    about_story_title: "",
    about_story_description1: "",
    about_story_description2: "",
    about_image_url: "",
  });

  useEffect(() => {
    if (settings) {
      const newFormData: Record<string, string> = {};
      Object.keys(formData).forEach((key) => {
        newFormData[key] = (settings as Record<string, unknown>)[key] as string || "";
      });
      setFormData(newFormData);
    }
  }, [settings]);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      await updateSettings.mutateAsync(formData);
      toast.success("সেটিংস সংরক্ষিত হয়েছে!");
    } catch (error) {
      toast.error("সংরক্ষণে সমস্যা হয়েছে!");
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="text-center py-12 text-muted-foreground">লোড হচ্ছে...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">সাইট সেটিংস</h1>
            <p className="text-muted-foreground">ওয়েবসাইটের সকল কন্টেন্ট এডিট করুন</p>
          </div>
          <Button onClick={handleSave} disabled={updateSettings.isPending} className="gap-2">
            <Save size={18} />
            {updateSettings.isPending ? "সংরক্ষণ হচ্ছে..." : "সংরক্ষণ করুন"}
          </Button>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
            <TabsTrigger value="general" className="gap-2 py-3">
              <Globe size={16} /> সাধারণ
            </TabsTrigger>
            <TabsTrigger value="hero" className="gap-2 py-3">
              <Home size={16} /> হিরো
            </TabsTrigger>
            <TabsTrigger value="cta" className="gap-2 py-3">
              <FileText size={16} /> CTA
            </TabsTrigger>
            <TabsTrigger value="about" className="gap-2 py-3">
              <Users size={16} /> অ্যাবাউট
            </TabsTrigger>
            <TabsTrigger value="contact" className="gap-2 py-3">
              <Phone size={16} /> যোগাযোগ
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>সাধারণ সেটিংস</CardTitle>
                <CardDescription>সাইটের নাম, লোগো এবং ফুটার সেটিংস</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>সাইটের নাম</Label>
                    <Input
                      value={formData.site_name}
                      onChange={(e) => handleChange("site_name", e.target.value)}
                      placeholder="ফ্রিল্যান্সহাব"
                    />
                  </div>
                  <div>
                    <Label>ট্যাগলাইন</Label>
                    <Input
                      value={formData.site_tagline}
                      onChange={(e) => handleChange("site_tagline", e.target.value)}
                      placeholder="বাংলাদেশের সেরা ফ্রিল্যান্স টিম"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>লোগো টেক্সট</Label>
                    <Input
                      value={formData.site_logo_text}
                      onChange={(e) => handleChange("site_logo_text", e.target.value)}
                      placeholder="ফ"
                    />
                  </div>
                  <div>
                    <Label>কপিরাইট টেক্সট</Label>
                    <Input
                      value={formData.footer_copyright}
                      onChange={(e) => handleChange("footer_copyright", e.target.value)}
                      placeholder="ফ্রিল্যান্সহাব। সর্বস্বত্ব সংরক্ষিত।"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>হিরো সেকশন</CardTitle>
                <CardDescription>হোম পেজের প্রথম সেকশন</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>ব্যাজ টেক্সট</Label>
                  <Input
                    value={formData.hero_badge}
                    onChange={(e) => handleChange("hero_badge", e.target.value)}
                    placeholder="বাংলাদেশের সেরা ফ্রিল্যান্স টিম"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>টাইটেল লাইন ১</Label>
                    <Input
                      value={formData.hero_title_line1}
                      onChange={(e) => handleChange("hero_title_line1", e.target.value)}
                      placeholder="আপনার স্বপ্নের"
                    />
                  </div>
                  <div>
                    <Label>টাইটেল লাইন ২ (হাইলাইটেড)</Label>
                    <Input
                      value={formData.hero_title_line2}
                      onChange={(e) => handleChange("hero_title_line2", e.target.value)}
                      placeholder="প্রজেক্ট বাস্তবায়ন করুন"
                    />
                  </div>
                </div>
                <div>
                  <Label>বিবরণ</Label>
                  <Textarea
                    value={formData.hero_description}
                    onChange={(e) => handleChange("hero_description", e.target.value)}
                    placeholder="আমরা ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন..."
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>প্রাইমারি বাটন</Label>
                    <Input
                      value={formData.hero_cta_primary}
                      onChange={(e) => handleChange("hero_cta_primary", e.target.value)}
                      placeholder="এখনই শুরু করুন"
                    />
                  </div>
                  <div>
                    <Label>সেকেন্ডারি বাটন</Label>
                    <Input
                      value={formData.hero_cta_secondary}
                      onChange={(e) => handleChange("hero_cta_secondary", e.target.value)}
                      placeholder="আমাদের কাজ দেখুন"
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">স্ট্যাটস</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Input
                        value={formData.hero_stat1_number}
                        onChange={(e) => handleChange("hero_stat1_number", e.target.value)}
                        placeholder="১৫০+"
                      />
                      <Input
                        value={formData.hero_stat1_label}
                        onChange={(e) => handleChange("hero_stat1_label", e.target.value)}
                        placeholder="সম্পন্ন প্রজেক্ট"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        value={formData.hero_stat2_number}
                        onChange={(e) => handleChange("hero_stat2_number", e.target.value)}
                        placeholder="৫০+"
                      />
                      <Input
                        value={formData.hero_stat2_label}
                        onChange={(e) => handleChange("hero_stat2_label", e.target.value)}
                        placeholder="সন্তুষ্ট ক্লায়েন্ট"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        value={formData.hero_stat3_number}
                        onChange={(e) => handleChange("hero_stat3_number", e.target.value)}
                        placeholder="৫+"
                      />
                      <Input
                        value={formData.hero_stat3_label}
                        onChange={(e) => handleChange("hero_stat3_label", e.target.value)}
                        placeholder="বছরের অভিজ্ঞতা"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA Section */}
          <TabsContent value="cta">
            <Card>
              <CardHeader>
                <CardTitle>CTA সেকশন</CardTitle>
                <CardDescription>কল টু অ্যাকশন সেকশন</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>টাইটেল লাইন ১</Label>
                    <Input
                      value={formData.cta_title_line1}
                      onChange={(e) => handleChange("cta_title_line1", e.target.value)}
                      placeholder="আপনার পরবর্তী প্রজেক্ট"
                    />
                  </div>
                  <div>
                    <Label>টাইটেল লাইন ২</Label>
                    <Input
                      value={formData.cta_title_line2}
                      onChange={(e) => handleChange("cta_title_line2", e.target.value)}
                      placeholder="আমাদের সাথে শুরু করুন"
                    />
                  </div>
                </div>
                <div>
                  <Label>বিবরণ</Label>
                  <Textarea
                    value={formData.cta_description}
                    onChange={(e) => handleChange("cta_description", e.target.value)}
                    placeholder="আজই আমাদের সাথে যোগাযোগ করুন..."
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>প্রাইমারি বাটন</Label>
                    <Input
                      value={formData.cta_button_primary}
                      onChange={(e) => handleChange("cta_button_primary", e.target.value)}
                      placeholder="যোগাযোগ করুন"
                    />
                  </div>
                  <div>
                    <Label>সেকেন্ডারি বাটন</Label>
                    <Input
                      value={formData.cta_button_secondary}
                      onChange={(e) => handleChange("cta_button_secondary", e.target.value)}
                      placeholder="পোর্টফোলিও দেখুন"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section */}
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>অ্যাবাউট পেজ</CardTitle>
                <CardDescription>আমাদের সম্পর্কে পেজের কন্টেন্ট</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>টাইটেল</Label>
                    <Input
                      value={formData.about_title}
                      onChange={(e) => handleChange("about_title", e.target.value)}
                      placeholder="আমরা ফ্রিল্যান্সহাব"
                    />
                  </div>
                  <div>
                    <Label>সাবটাইটেল</Label>
                    <Input
                      value={formData.about_subtitle}
                      onChange={(e) => handleChange("about_subtitle", e.target.value)}
                      placeholder="আমাদের সম্পর্কে"
                    />
                  </div>
                </div>
                <div>
                  <Label>সংক্ষিপ্ত বিবরণ</Label>
                  <Textarea
                    value={formData.about_description}
                    onChange={(e) => handleChange("about_description", e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">আমাদের গল্প</h4>
                  <div className="space-y-4">
                    <div>
                      <Label>গল্পের টাইটেল</Label>
                      <Input
                        value={formData.about_story_title}
                        onChange={(e) => handleChange("about_story_title", e.target.value)}
                        placeholder="২০১৯ থেকে আমরা স্বপ্ন বাস্তবায়ন করছি"
                      />
                    </div>
                    <div>
                      <Label>গল্প প্যারাগ্রাফ ১</Label>
                      <Textarea
                        value={formData.about_story_description1}
                        onChange={(e) => handleChange("about_story_description1", e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>গল্প প্যারাগ্রাফ ২</Label>
                      <Textarea
                        value={formData.about_story_description2}
                        onChange={(e) => handleChange("about_story_description2", e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>আমাদের ছবি</Label>
                      <ImageUpload
                        value={formData.about_image_url}
                        onChange={(url) => handleChange("about_image_url", url)}
                        onRemove={() => handleChange("about_image_url", "")}
                        folder="about"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Settings */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>যোগাযোগের তথ্য</CardTitle>
                <CardDescription>ফুটার এবং কন্টাক্ট পেজে দেখানো হবে</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>ঠিকানা</Label>
                  <Input
                    value={formData.contact_address}
                    onChange={(e) => handleChange("contact_address", e.target.value)}
                    placeholder="ঢাকা, বাংলাদেশ"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>ফোন</Label>
                    <Input
                      value={formData.contact_phone}
                      onChange={(e) => handleChange("contact_phone", e.target.value)}
                      placeholder="+৮৮০ ১৭XX-XXXXXX"
                    />
                  </div>
                  <div>
                    <Label>ইমেইল</Label>
                    <Input
                      value={formData.contact_email}
                      onChange={(e) => handleChange("contact_email", e.target.value)}
                      placeholder="contact@freelancehub.com"
                    />
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">সোশ্যাল মিডিয়া</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>ফেসবুক</Label>
                      <Input
                        value={formData.contact_facebook}
                        onChange={(e) => handleChange("contact_facebook", e.target.value)}
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                    <div>
                      <Label>টুইটার</Label>
                      <Input
                        value={formData.contact_twitter}
                        onChange={(e) => handleChange("contact_twitter", e.target.value)}
                        placeholder="https://twitter.com/..."
                      />
                    </div>
                    <div>
                      <Label>লিংকডইন</Label>
                      <Input
                        value={formData.contact_linkedin}
                        onChange={(e) => handleChange("contact_linkedin", e.target.value)}
                        placeholder="https://linkedin.com/..."
                      />
                    </div>
                    <div>
                      <Label>ইনস্টাগ্রাম</Label>
                      <Input
                        value={formData.contact_instagram}
                        onChange={(e) => handleChange("contact_instagram", e.target.value)}
                        placeholder="https://instagram.com/..."
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SiteSettingsManagement;
