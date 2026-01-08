import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { useAllTeamMembers, useCreateTeamMember, useUpdateTeamMember, useDeleteTeamMember, TeamMember } from '@/hooks/useTeamMembers';
import ImageUpload from '@/components/admin/ImageUpload';
import { Plus, Pencil, Trash2, Users, Mail, Phone, Globe } from 'lucide-react';

const TeamManagement = () => {
  const { data: members = [], isLoading } = useAllTeamMembers();
  const createMember = useCreateTeamMember();
  const updateMember = useUpdateTeamMember();
  const deleteMember = useDeleteTeamMember();
  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    bio: '',
    image_url: '',
    skills: '',
    email: '',
    phone: '',
    facebook: '',
    linkedin: '',
    github: '',
    portfolio: '',
    is_active: true,
  });

  const resetForm = () => {
    setFormData({
      name: '',
      designation: '',
      bio: '',
      image_url: '',
      skills: '',
      email: '',
      phone: '',
      facebook: '',
      linkedin: '',
      github: '',
      portfolio: '',
      is_active: true,
    });
    setEditingMember(null);
  };

  const handleOpenDialog = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
      setFormData({
        name: member.name,
        designation: member.designation,
        bio: member.bio || '',
        image_url: member.image_url || '',
        skills: member.skills?.join(', ') || '',
        email: member.email || '',
        phone: member.phone || '',
        facebook: member.facebook || '',
        linkedin: member.linkedin || '',
        github: member.github || '',
        portfolio: member.portfolio || '',
        is_active: member.is_active ?? true,
      });
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const memberData = {
      name: formData.name,
      designation: formData.designation,
      bio: formData.bio || null,
      image_url: formData.image_url || null,
      skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : [],
      email: formData.email || null,
      phone: formData.phone || null,
      facebook: formData.facebook || null,
      linkedin: formData.linkedin || null,
      github: formData.github || null,
      portfolio: formData.portfolio || null,
      is_active: formData.is_active,
      display_order: 0,
    };

    try {
      if (editingMember) {
        await updateMember.mutateAsync({ id: editingMember.id, ...memberData });
        toast({ title: 'সফল!', description: 'টিম মেম্বার আপডেট হয়েছে' });
      } else {
        await createMember.mutateAsync(memberData);
        toast({ title: 'সফল!', description: 'নতুন টিম মেম্বার যোগ হয়েছে' });
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast({
        title: 'ত্রুটি!',
        description: 'কিছু সমস্যা হয়েছে',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMember.mutateAsync(id);
      toast({ title: 'সফল!', description: 'টিম মেম্বার মুছে ফেলা হয়েছে' });
    } catch (error) {
      toast({
        title: 'ত্রুটি!',
        description: 'মুছে ফেলতে সমস্যা হয়েছে',
        variant: 'destructive'
      });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">টিম ম্যানেজমেন্ট</h1>
            <p className="text-muted-foreground mt-1">টিম মেম্বারদের ম্যানেজ করুন</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => handleOpenDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                নতুন মেম্বার
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingMember ? 'মেম্বার এডিট করুন' : 'নতুন মেম্বার যোগ করুন'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">নাম *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">পদবী *</Label>
                    <Input
                      id="designation"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="যেমন: ওয়েব ডেভেলপার"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">বায়ো</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>প্রোফাইল ছবি</Label>
                  <ImageUpload
                    value={formData.image_url}
                    onChange={(url) => setFormData({ ...formData, image_url: url })}
                    onRemove={() => setFormData({ ...formData, image_url: '' })}
                    folder="team"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">স্কিলস (কমা দিয়ে আলাদা করুন)</Label>
                  <Input
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="React, JavaScript, UI/UX"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">ফোন</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook URL</Label>
                    <Input
                      id="facebook"
                      value={formData.facebook}
                      onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub URL</Label>
                    <Input
                      id="github"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                  />
                  <Label htmlFor="is_active">অ্যাক্টিভ</Label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    বাতিল
                  </Button>
                  <Button type="submit" disabled={createMember.isPending || updateMember.isPending}>
                    {editingMember ? 'আপডেট করুন' : 'যোগ করুন'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Team Grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                  <div className="h-5 bg-muted rounded w-3/4 mx-auto mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : members.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-16 text-center">
              <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">কোনো টিম মেম্বার নেই</h3>
              <p className="text-muted-foreground mb-4">প্রথম মেম্বার যোগ করুন</p>
              <Button onClick={() => handleOpenDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                নতুন মেম্বার
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {members.map((member) => (
              <Card key={member.id} className="overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-muted overflow-hidden">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-10 h-10 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.designation}</p>
                  
                  {!member.is_active && (
                    <span className="inline-block px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full mb-3">
                      ইনঅ্যাক্টিভ
                    </span>
                  )}
                  
                  {member.skills && member.skills.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {member.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-2 mb-4">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleOpenDialog(member)}>
                      <Pencil className="w-3 h-3 mr-1" />
                      এডিট
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive border-destructive/50">
                          <Trash2 className="w-3 h-3 mr-1" />
                          ডিলিট
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>নিশ্চিত করুন</AlertDialogTitle>
                          <AlertDialogDescription>
                            আপনি কি এই মেম্বার মুছে ফেলতে চান? এটি ফিরিয়ে আনা যাবে না।
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>বাতিল</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(member.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            মুছে ফেলুন
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default TeamManagement;
