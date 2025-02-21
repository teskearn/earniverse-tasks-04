
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { UserWithEmail, Profile } from "@/types/admin";
import { User } from "@supabase/supabase-js";

export const useAdminDashboard = (currentUser: User | null) => {
  const [users, setUsers] = useState<UserWithEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminStatus();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const checkAdminStatus = async () => {
    if (!currentUser) {
      navigate('/auth');
      return;
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', currentUser.id)
      .single();

    if (error || profile?.role !== 'admin') {
      navigate('/');
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You don't have permission to access this page.",
      });
    } else {
      setIsAdmin(true);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      const { data, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authError) throw authError;

      const usersWithEmail = profiles?.map((profile: Profile) => ({
        ...profile,
        email: data?.users?.find(authUser => authUser.id === profile.id)?.email || null
      })) || [];

      setUsers(usersWithEmail);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error fetching users",
        description: "Failed to load user data.",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleUserRole = async (userId: string, currentRole: 'user' | 'admin') => {
    try {
      const newRole = currentRole === 'admin' ? 'user' : 'admin';
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;

      setUsers(users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));

      toast({
        title: "Role Updated",
        description: `User role has been updated to ${newRole}.`,
      });
    } catch (error) {
      console.error('Error updating role:', error);
      toast({
        variant: "destructive",
        title: "Error updating role",
        description: "Failed to update user role.",
      });
    }
  };

  return {
    users,
    loading,
    isAdmin,
    toggleUserRole
  };
};
