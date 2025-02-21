
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserX, UserCheck } from "lucide-react";
import { UserWithEmail } from "@/types/admin";

interface UsersTableProps {
  users: UserWithEmail[];
  currentUserId: string | undefined;
  onToggleRole: (userId: string, currentRole: 'user' | 'admin') => void;
}

export const UsersTable = ({ users, currentUserId, onToggleRole }: UsersTableProps) => {
  return (
    <div className="bg-card rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{user.full_name || 'N/A'}</p>
                  <p className="text-sm text-muted-foreground">{user.username || 'No username'}</p>
                </div>
              </TableCell>
              <TableCell>{user.email || 'N/A'}</TableCell>
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  user.role === 'admin' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {user.role}
                </span>
              </TableCell>
              <TableCell>
                {new Date(user.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onToggleRole(user.id, user.role)}
                  disabled={user.id === currentUserId}
                >
                  {user.role === 'admin' ? (
                    <UserX className="h-4 w-4 mr-1" />
                  ) : (
                    <UserCheck className="h-4 w-4 mr-1" />
                  )}
                  Make {user.role === 'admin' ? 'User' : 'Admin'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
