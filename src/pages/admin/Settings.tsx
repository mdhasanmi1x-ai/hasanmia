import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Settings as SettingsIcon, User, Shield, Database } from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">সেটিংস</h1>
          <p className="text-muted-foreground mt-1">অ্যাপ্লিকেশন সেটিংস ম্যানেজ করুন</p>
        </div>

        <div className="grid gap-6">
          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                অ্যাকাউন্ট তথ্য
              </CardTitle>
              <CardDescription>আপনার অ্যাকাউন্টের বিবরণ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">ইমেইল</label>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">অ্যাকাউন্ট তৈরি</label>
                  <p className="font-medium">
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString('bn-BD') : '-'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                সিকিউরিটি
              </CardTitle>
              <CardDescription>অ্যাকাউন্ট সুরক্ষা সেটিংস</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">ইমেইল যাচাইকৃত</p>
                  <p className="text-sm text-muted-foreground">আপনার ইমেইল অ্যাড্রেস যাচাই করা হয়েছে</p>
                </div>
                <div className="px-3 py-1 bg-green-500/10 text-green-600 text-sm rounded-full">
                  সক্রিয়
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                সিস্টেম তথ্য
              </CardTitle>
              <CardDescription>অ্যাপ্লিকেশন সম্পর্কে তথ্য</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">ভার্সন</p>
                  <p className="font-medium">১.০.০</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">প্ল্যাটফর্ম</p>
                  <p className="font-medium">Lovable Cloud</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">স্ট্যাটাস</p>
                  <p className="font-medium text-green-600">অ্যাক্টিভ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
