import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';

export interface SiteSettings {
  // Hero Section
  hero_badge?: string;
  hero_title_line1?: string;
  hero_title_line2?: string;
  hero_description?: string;
  hero_cta_primary?: string;
  hero_cta_secondary?: string;
  hero_stat1_number?: string;
  hero_stat1_label?: string;
  hero_stat2_number?: string;
  hero_stat2_label?: string;
  hero_stat3_number?: string;
  hero_stat3_label?: string;
  
  // About Page
  about_title?: string;
  about_subtitle?: string;
  about_description?: string;
  about_story_title?: string;
  about_story_description1?: string;
  about_story_description2?: string;
  about_features?: string[];
  about_image_url?: string;
  
  // Contact Info
  contact_address?: string;
  contact_phone?: string;
  contact_email?: string;
  contact_facebook?: string;
  contact_twitter?: string;
  contact_linkedin?: string;
  contact_instagram?: string;
  
  // Site Meta
  site_name?: string;
  site_tagline?: string;
  site_logo_text?: string;
  footer_copyright?: string;
  
  // CTA Section
  cta_title_line1?: string;
  cta_title_line2?: string;
  cta_description?: string;
  cta_button_primary?: string;
  cta_button_secondary?: string;
}

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');
      
      if (error) throw error;
      
      // Convert array to object with key-value pairs
      const settings: SiteSettings = {};
      data?.forEach((item) => {
        (settings as Record<string, unknown>)[item.key] = item.value;
      });
      
      return settings;
    }
  });
};

export const useUpdateSiteSetting = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: Json }) => {
      // First check if the setting exists
      const { data: existing } = await supabase
        .from('site_settings')
        .select('id')
        .eq('key', key)
        .maybeSingle();
      
      if (existing) {
        // Update existing
        const { error } = await supabase
          .from('site_settings')
          .update({ value })
          .eq('key', key);
        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase
          .from('site_settings')
          .insert([{ key, value }]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
    }
  });
};

export const useBulkUpdateSiteSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (settings: Record<string, string>) => {
      const updates = Object.entries(settings).map(async ([key, value]) => {
        const { data: existing } = await supabase
          .from('site_settings')
          .select('id')
          .eq('key', key)
          .maybeSingle();
        
        if (existing) {
          return supabase
            .from('site_settings')
            .update({ value: value as Json })
            .eq('key', key);
        } else {
          return supabase
            .from('site_settings')
            .insert([{ key, value: value as Json }]);
        }
      });
      
      await Promise.all(updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
    }
  });
};
