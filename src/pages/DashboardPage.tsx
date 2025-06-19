import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogoDisplay from '@/components/BrandLogoDisplay'; // Custom component
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import {
  Home,
  Settings,
  LogOut,
  UserCircle,
  Bell,
  Users,
  ShoppingCart,
  FileText,
  PlusCircle,
} from 'lucide-react';

// Sample data for the table
const transactions = [
  { id: "TRX001", date: "2024-07-15", description: "Subscription Renewal", amount: "$29.99", status: "Completed" },
  { id: "TRX002", date: "2024-07-14", description: "Service Fee", amount: "$99.00", status: "Completed" },
  { id: "TRX003", date: "2024-07-13", description: "Product Purchase", amount: "$145.50", status: "Pending" },
  { id: "TRX004", date: "2024-07-12", description: "Refund Issued", amount: "-$50.00", status: "Refunded" },
  { id: "TRX005", date: "2024-07-11", description: "Consultation", amount: "$250.00", status: "Completed" },
];

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Login Successful!", {
      description: "Welcome back to your dashboard.",
      duration: 5000,
    });
  }, []);

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens)
    console.log("User logging out");
    toast.info("You have been logged out.");
    navigate('/login'); // Navigate to login page as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40 dark:bg-gray-900/40">
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 dark:bg-gray-800 dark:border-gray-700">
        <Link to="/dashboard" className="flex items-center gap-2">
          <BrandLogoDisplay size="sm" />
          <span className="text-lg font-semibold text-foreground dark:text-white">MyApp</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6 text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuLabel className="dark:text-white">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700">
                <Link to="/dashboard/profile" className="flex items-center w-full"> {/* Placeholder path */}
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700">
                <Link to="/dashboard/settings" className="flex items-center w-full"> {/* Placeholder path */}
                   <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="dark:bg-gray-700"/>
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex dark:bg-gray-800 dark:border-gray-700">
          <ScrollArea className="flex-1">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col space-y-1 w-full">
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard" className="w-full">
                    <NavigationMenuLink activeClassName="bg-muted dark:bg-gray-700 text-primary dark:text-white" className={`${navigationMenuTriggerStyle()} w-full justify-start dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      <Home className="mr-2 h-4 w-4" /> Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/orders" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Orders
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/customers" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      <Users className="mr-2 h-4 w-4" /> Customers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                 <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/reports" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      <FileText className="mr-2 h-4 w-4" /> Reports
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/settings" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}>
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ScrollArea>
           <div className="mt-auto p-2">
              <Button variant="ghost" onClick={handleLogout} className="w-full justify-start dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
        </aside>

        {/* Main Content */}
        <ScrollArea className="flex-1">
          <main className="p-4 sm:p-6 space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Welcome to Your Dashboard</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Here's a quick overview of your application's status and recent activity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="dark:text-gray-300">You can customize this area with key metrics, charts, or quick links.</p>
                <div className="mt-4 flex gap-2">
                  <Button className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
                  </Button>
                  <Button variant="outline" className="dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">View Reports</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Recent Transactions</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  A list of your most recent transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="dark:border-gray-700">
                      <TableHead className="w-[100px] dark:text-gray-300">ID</TableHead>
                      <TableHead className="dark:text-gray-300">Date</TableHead>
                      <TableHead className="dark:text-gray-300">Description</TableHead>
                      <TableHead className="dark:text-gray-300">Status</TableHead>
                      <TableHead className="text-right dark:text-gray-300">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id} className="dark:border-gray-700">
                        <TableCell className="font-medium dark:text-gray-200">{transaction.id}</TableCell>
                        <TableCell className="dark:text-gray-300">{transaction.date}</TableCell>
                        <TableCell className="dark:text-gray-300">{transaction.description}</TableCell>
                        <TableCell className="dark:text-gray-300">{transaction.status}</TableCell>
                        <TableCell className="text-right dark:text-gray-200">{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
             {/* Example of another Card */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="secondary" className="dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80">Create Invoice</Button>
                <Button variant="secondary" className="dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80">Manage Users</Button>
                <Button variant="secondary" className="dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80">View Analytics</Button>
              </CardContent>
            </Card>
          </main>
        </ScrollArea>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardPage;