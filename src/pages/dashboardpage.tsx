import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogoDisplay from '@/components/BrandLogoDisplay'; // Custom component
import ThemeToggleButton from '@/components/ThemeToggleButton'; // Added import
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
    // Removed the toast that was previously here, as it might have been for demo purposes
    // and this page can be reached directly. If a login success toast is desired,
    // it should ideally be triggered right after successful login logic.
    // For example:
    // const location = useLocation();
    // if (location.state?.fromLogin) {
    //  toast.success("Login Successful!", { description: "Welcome back to your dashboard." });
    // }
  }, []);

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens)
    console.log("User logging out");
    toast.info("You have been logged out.");
    navigate('/login'); // Navigate to login page as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40 dark:bg-background"> {/* Adjusted dark bg for consistency */}
      {/* Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Link to="/dashboard" className="flex items-center gap-2">
          <BrandLogoDisplay size="sm" />
          <span className="text-lg font-semibold text-foreground">MyApp</span>
        </Link>
        <div className="ml-auto flex items-center gap-2 md:gap-4"> {/* Added md:gap-4 for slightly more space on medium screens */}
          <ThemeToggleButton /> {/* Added Theme Toggle Button */}
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard/profile" className="flex items-center w-full cursor-pointer"> {/* Placeholder path */}
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings" className="flex items-center w-full cursor-pointer"> {/* Placeholder path */}
                   <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 dark:text-red-500 focus:bg-red-100 dark:focus:bg-red-700 focus:text-red-700 dark:focus:text-red-100">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex">
          <ScrollArea className="flex-1">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col space-y-1 w-full">
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard" className="w-full">
                    {/* For activeClassName, ensure react-router-dom v6 NavLink is used if this prop is critical, or manually manage active state.
                        navigationMenuTriggerStyle() usually doesn't inherently support activeClassName.
                        This example assumes it's styled by direct match or a future NavLink adaptation. */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start data-[active]:bg-muted data-[active]:text-primary`}>
                      <Home className="mr-2 h-4 w-4" /> Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/orders" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Orders
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/customers" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                      <Users className="mr-2 h-4 w-4" /> Customers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                 <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/reports" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                      <FileText className="mr-2 h-4 w-4" /> Reports
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link to="/dashboard/settings" className="w-full"> {/* Placeholder path */}
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ScrollArea>
           <div className="mt-auto p-2">
              <Button variant="ghost" onClick={handleLogout} className="w-full justify-start text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-700 hover:text-red-700 dark:hover:text-red-100">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
        </aside>

        {/* Main Content */}
        <ScrollArea className="flex-1">
          <main className="p-4 sm:p-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Your Dashboard</CardTitle>
                <CardDescription>
                  Here's a quick overview of your application's status and recent activity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>You can customize this area with key metrics, charts, or quick links.</p>
                <div className="mt-4 flex gap-2">
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
                  </Button>
                  <Button variant="outline">View Reports</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  A list of your most recent transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                        <TableCell className="text-right">{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="secondary">Create Invoice</Button>
                <Button variant="secondary">Manage Users</Button>
                <Button variant="secondary">View Analytics</Button>
              </CardContent>
            </Card>
          </main>
        </ScrollArea>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardPage;