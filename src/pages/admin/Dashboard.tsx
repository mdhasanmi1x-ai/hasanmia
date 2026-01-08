import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAllProjects } from '@/hooks/useProjects';
import { useAllTeamMembers } from '@/hooks/useTeamMembers';
import { FolderKanban, Users, Star, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { data: projects = [] } = useAllProjects();
  const { data: teamMembers = [] } = useAllTeamMembers();

  const stats = [
    {
      title: 'মোট প্রজেক্ট',
      value: projects.length,
      icon: FolderKanban,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'টিম মেম্বার',
      value: teamMembers.length,
      icon: Users,
      color: 'bg-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'ফিচার্ড প্রজেক্ট',
      value: projects.filter(p => p.is_featured).length,
      icon: Star,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      title: 'অ্যাক্টিভ মেম্বার',
      value: teamMembers.filter(m => m.is_active).length,
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  // Get unique categories
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">ড্যাশবোর্ড</h1>
          <p className="text-muted-foreground mt-1">আপনার পোর্টফোলিও ওভারভিউ</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Projects */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FolderKanban className="w-5 h-5" />
                সাম্প্রতিক প্রজেক্ট
              </CardTitle>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  কোনো প্রজেক্ট নেই
                </p>
              ) : (
                <div className="space-y-4">
                  {projects.slice(0, 5).map((project) => (
                    <div key={project.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                        {project.image_url ? (
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FolderKanban className="w-5 h-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{project.title}</p>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                      {project.is_featured && (
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                টিম মেম্বার
              </CardTitle>
            </CardHeader>
            <CardContent>
              {teamMembers.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  কোনো টিম মেম্বার নেই
                </p>
              ) : (
                <div className="space-y-4">
                  {teamMembers.slice(0, 5).map((member) => (
                    <div key={member.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                        {member.image_url ? (
                          <img
                            src={member.image_url}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Categories Overview */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">প্রজেক্ট ক্যাটাগরি</CardTitle>
          </CardHeader>
          <CardContent>
            {categories.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                কোনো ক্যাটাগরি নেই
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const count = projects.filter(p => p.category === category).length;
                  return (
                    <div
                      key={category}
                      className="px-4 py-2 bg-muted rounded-full text-sm"
                    >
                      {category} ({count})
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
