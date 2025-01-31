import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star, Gift, DollarSign } from "lucide-react";
import { ShareSection } from "./ShareSection";

interface ReferralTier {
  level: number;
  required: number;
  reward: string;
  current: number;
}

interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalEarned: string;
  pendingReferrals: number;
  availableForWithdrawal: number;
  nextMilestone: number;
}

export const ReferralDashboard = () => {
  // Mock data - in a real app, this would come from your backend
  const referralStats: ReferralStats = {
    totalReferrals: 3,
    activeReferrals: 2,
    totalEarned: "$15.00",
    pendingReferrals: 1,
    availableForWithdrawal: 15.00,
    nextMilestone: 5,
  };

  const tiers: ReferralTier[] = [
    { level: 1, required: 5, reward: "$10", current: 3 },
    { level: 2, required: 10, reward: "$25", current: 3 },
    { level: 3, required: 20, reward: "Premium Access", current: 3 },
  ];

  const withdrawalThreshold = 50;
  const progressToWithdrawal = (referralStats.availableForWithdrawal / withdrawalThreshold) * 100;

  return (
    <div className="space-y-6">
      {/* Share Section */}
      <ShareSection />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{referralStats.totalReferrals}</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>{referralStats.activeReferrals} active referrals</p>
              <p>{referralStats.pendingReferrals} pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{referralStats.totalEarned}</div>
            <p className="text-xs text-muted-foreground">From referral rewards</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">${referralStats.availableForWithdrawal.toFixed(2)}</div>
            <Progress value={progressToWithdrawal} className="h-2" />
            <p className="text-xs text-muted-foreground">
              ${withdrawalThreshold - referralStats.availableForWithdrawal} more until you can withdraw
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tier Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Referral Tiers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {tiers.map((tier) => (
            <div key={tier.level} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Badge variant={tier.current >= tier.required ? "default" : "outline"}>
                    Tier {tier.level}
                  </Badge>
                  <span className="text-sm font-medium">
                    {tier.current}/{tier.required} Referrals
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{tier.reward}</span>
                </div>
              </div>
              <Progress 
                value={(tier.current / tier.required) * 100} 
                className="h-2" 
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};