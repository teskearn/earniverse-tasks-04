
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useAdminDashboard } from "@/hooks/useAdminDashboard";
import { UsersTable } from "@/components/admin/UsersTable";

const AdminDashboard = () => {
  const { user } = useAuth();
  const { users, loading, isAdmin, toggleUserRole } = useAdminDashboard(user);

  if (loading || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8" />
            Admin Dashboard
          </h1>
        </div>
        <UsersTable 
          users={users}
          currentUserId={user?.id}
          onToggleRole={toggleUserRole}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
