import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string | null;
  gallery_images: string[] | null;
  client_name: string | null;
  project_url: string | null;
  technologies: string[] | null;
  is_featured: boolean | null;
  is_active: boolean | null;
  display_order: number | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectWithMembers extends Project {
  project_team_members: {
    team_member_id: string;
    role_in_project: string | null;
    team_members: {
      id: string;
      name: string;
      image_url: string | null;
    };
  }[];
}

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          project_team_members (
            team_member_id,
            role_in_project,
            team_members (
              id,
              name,
              image_url
            )
          )
        `)
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as ProjectWithMembers[];
    }
  });
};

export const useAllProjects = () => {
  return useQuery({
    queryKey: ['all-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          project_team_members (
            team_member_id,
            role_in_project,
            team_members (
              id,
              name,
              image_url
            )
          )
        `)
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as ProjectWithMembers[];
    }
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['all-projects'] });
    }
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...project }: Partial<Project> & { id: string }) => {
      const { data, error } = await supabase
        .from('projects')
        .update(project)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['all-projects'] });
    }
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['all-projects'] });
    }
  });
};
