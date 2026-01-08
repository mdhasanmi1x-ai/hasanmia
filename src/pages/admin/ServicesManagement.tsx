import { useState } from "react";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAllServices, useCreateService, useUpdateService, useDeleteService, Service } from "@/hooks/useServices";
import { toast } from "sonner";

const iconOptions = [
  { value: "Code", label: "কোড (ওয়েব ডেভ)" },
  { value: "Palette", label: "প্যালেট (ডিজাইন)" },
  { value: "Smartphone", label: "স্মার্টফোন (মোবাইল)" },
  { value: "Search", label: "সার্চ (SEO)" },
  { value: "Megaphone", label: "মেগাফোন (মার্কেটিং)" },
  { value: "TrendingUp", label: "ট্রেন্ডিং (ব্র্যান্ডিং)" },
  { value: "Database", label: "ডাটাবেজ" },
  { value: "Shield", label: "শিল্ড (সিকিউরিটি)" },
];

const ServicesManagement = () => {
  const { data: services, isLoading } = useAllServices();
  const createService = useCreateService();
  const updateService = useUpdateService();
  const deleteService = useDeleteService();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Code",
    is_active: true,
    display_order: 0,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "Code",
      is_active: true,
      display_order: services?.length || 0,
    });
    setEditingService(null);
  };

  const handleOpenDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        title: service.title,
        description: service.description || "",
        icon: service.icon || "Code",
        is_active: service.is_active ?? true,
        display_order: service.display_order || 0,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingService) {
        await updateService.mutateAsync({ id: editingService.id, ...formData });
        toast.success("সার্ভিস আপডেট হয়েছে!");
      } else {
        await createService.mutateAsync(formData);
        toast.success("নতুন সার্ভিস যোগ হয়েছে!");
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error("কিছু সমস্যা হয়েছে!");
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteService.mutateAsync(deleteId);
      toast.success("সার্ভিস মুছে ফেলা হয়েছে!");
      setDeleteId(null);
    } catch (error) {
      toast.error("মুছতে সমস্যা হয়েছে!");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">সার্ভিস ম্যানেজমেন্ট</h1>
            <p className="text-muted-foreground">আপনার সার্ভিসগুলো পরিচালনা করুন</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => handleOpenDialog()} className="gap-2">
                <Plus size={18} /> নতুন সার্ভিস
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingService ? "সার্ভিস এডিট করুন" : "নতুন সার্ভিস যোগ করুন"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">সার্ভিসের নাম *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="ওয়েব ডেভেলপমেন্ট"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">বিবরণ</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="সার্ভিসের বিস্তারিত বিবরণ..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="icon">আইকন</Label>
                  <select
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    {iconOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="display_order">প্রদর্শন ক্রম</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                  />
                  <Label htmlFor="is_active">সক্রিয়</Label>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    বাতিল
                  </Button>
                  <Button type="submit" disabled={createService.isPending || updateService.isPending}>
                    {editingService ? "আপডেট করুন" : "যোগ করুন"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Services List */}
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">লোড হচ্ছে...</div>
        ) : services?.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              কোনো সার্ভিস নেই। নতুন সার্ভিস যোগ করুন।
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {services?.map((service) => (
              <Card key={service.id} className={!service.is_active ? "opacity-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <GripVertical className="text-muted-foreground cursor-grab" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{service.title}</h3>
                        {!service.is_active && (
                          <span className="text-xs bg-muted px-2 py-0.5 rounded">নিষ্ক্রিয়</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {service.description || "কোনো বিবরণ নেই"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleOpenDialog(service)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => setDeleteId(service.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Delete Confirmation */}
        <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>সার্ভিস মুছে ফেলবেন?</AlertDialogTitle>
              <AlertDialogDescription>
                এই সার্ভিস স্থায়ীভাবে মুছে যাবে। এটি পুনরুদ্ধার করা যাবে না।
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>বাতিল</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                মুছে ফেলুন
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default ServicesManagement;
