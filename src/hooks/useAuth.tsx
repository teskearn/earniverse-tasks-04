import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    user,
    loading,
    signOut: () => supabase.auth.signOut(),
    signInWithGoogle: () => 
      supabase.auth.signInWithOAuth({
        provider: "google",
      }),
    signInWithEmail: (email: string, password: string) =>
      supabase.auth.signInWithPassword({
        email,
        password,
      }),
    signUpWithEmail: (email: string, password: string) =>
      supabase.auth.signUp({
        email,
        password,
      }),
  };
};