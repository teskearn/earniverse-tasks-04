import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Coins, Target, Trophy, Award } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&h=300" alt="Profile picture" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="text-muted-foreground">user@example.com</p>
              <Badge variant="secondary" className="mt-2">
                Level 1
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
                <Coins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0 days</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Level Progress</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Progress value={0} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-2">0% to Level 2</p>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Section */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg opacity-50">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold">First Task</p>
                    <p className="text-sm text-muted-foreground">Complete your first task</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg opacity-50">
                  <Award className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="font-semibold">Rising Star</p>
                    <p className="text-sm text-muted-foreground">Reach Level 3</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg opacity-50">
                  <Target className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-semibold">Task Master</p>
                    <p className="text-sm text-muted-foreground">Complete 40+ tasks</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;