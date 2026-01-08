import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File, folder: string = 'images') => {
    setIsUploading(true);
    setProgress(0);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(data.path);

      setProgress(100);
      return publicUrl;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const deleteFile = async (url: string) => {
    try {
      // Extract path from URL
      const urlParts = url.split('/uploads/');
      if (urlParts.length < 2) return;
      
      const path = urlParts[1];
      const { error } = await supabase.storage
        .from('uploads')
        .remove([path]);

      if (error) throw error;
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  };

  return { uploadFile, deleteFile, isUploading, progress };
};
