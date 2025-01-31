import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Wallet, ArrowUpRight, ArrowDownRight, Bitcoin, CreditCard, DollarSign, Phone } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  type: "referral" | "bonus" | "withdrawal";
  amount: number;
  status: "pending" | "confirmed" | "completed";
}

export const WalletDashboard = () => {
  const [timeFilter, setTimeFilter] = useState<"7" | "30" | "all">("30");
  
  const balance = {
    total: 0,
    pending: 0,
    confirmed: 0
  };

  const transactions: Transaction[] = [];

  const handleWithdraw = (method: string) => {
    if (balance.confirmed < 50) {
      toast({
        title: "Withdrawal Failed",
        description: "You need at least $50 confirmed balance to withdraw.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Withdrawal Initiated",
      description: `Your withdrawal request via ${method} has been initiated.`
    });
  };

  const getFilteredTransactions = () => {
    const now = new Date();
    const days = parseInt(timeFilter);
    if (timeFilter === "all") return transactions;
    
    const cutoff = new Date(now.setDate(now.getDate() - days));
    return transactions.filter(t => new Date(t.date) >= cutoff);
  };

  return (
    <div className="space-y-6">
      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balance.total.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Available for earnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Balance</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balance.pending.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed Balance</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${balance.confirmed.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Available for withdrawal</p>
          </CardContent>
        </Card>
      </div>

      {/* Withdrawal Options */}
      <Card>
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => handleWithdraw("Bank Transfer")}
            >
              <CreditCard className="h-4 w-4" />
              Bank Transfer
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => handleWithdraw("Crypto")}
            >
              <Bitcoin className="h-4 w-4" />
              Crypto Wallet
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => handleWithdraw("PayPal")}
            >
              <DollarSign className="h-4 w-4" />
              PayPal
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => handleWithdraw("Mobile Money")}
            >
              <Phone className="h-4 w-4" />
              Mobile Money
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Minimum withdrawal amount: $50. Withdrawals are processed within 1-3 business days.
          </p>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transaction History</CardTitle>
          <Select
            value={timeFilter}
            onValueChange={(value) => setTimeFilter(value as "7" | "30" | "all")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getFilteredTransactions().map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell className="capitalize">{transaction.type}</TableCell>
                  <TableCell className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}>
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "pending"
                          ? "secondary"
                          : transaction.status === "confirmed"
                          ? "default"
                          : "outline"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
