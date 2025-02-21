
export type Profile = {
  id: string;
  role: 'user' | 'admin';
  created_at: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  is_premium: boolean | null;
  tier: string | null;
  tasks_completed: number | null;
  current_streak: number | null;
  total_earnings: number | null;
  pending_earnings: number | null;
  referral_code: string | null;
};

export type UserWithEmail = Profile & {
  email: string | null;
};
