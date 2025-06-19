import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { AlertTriangle } from 'lucide-react';

// Custom Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import BrandLogoDisplay from '@/components/BrandLogoDisplay';
import SocialLoginButtons from '@/components/SocialLoginButtons';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Used by FormLabel, but good to have if direct use is needed
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }).min(8, { message: "Password must be at least 8 characters." }),
  rememberMe: z.boolean().optional().default(false),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setErrorMessage(null);
    console.log('Login form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example login logic
    if (data.email === "user@example.com" && data.password === "password123") {
      toast.success("Login Successful!", {
        description: "Redirecting to your dashboard...",
      });
      navigate('/dashboard'); // Path from App.tsx
    } else {
      const errorMsg = "Invalid email or password. Please try again.";
      setErrorMessage(errorMsg);
      toast.error("Login Failed", {
        description: errorMsg,
      });
      form.setValue("password", ""); // Clear password field on error
    }
    setIsLoading(false);
  };

  console.log('LoginPage loaded');

  return (
    <>
      <MinimalHeader />
      <AuthFormWrapper
        title="Sign in to your account"
        description="Enter your credentials to access your dashboard."
        headerContent={
          <div className="flex justify-center mb-6">
            <BrandLogoDisplay size="lg" logoUrl="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" altText="App Logo" />
          </div>
        }
        footerContent={
          <div className="space-y-6">
             <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground"> {/* Assuming AuthFormWrapper uses .bg-card */}
                  Or continue with
                </span>
              </div>
            </div>
            <SocialLoginButtons />
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/registration" className="font-medium text-primary hover:underline"> {/* Path from App.tsx */}
                Sign up
              </Link>
            </p>
          </div>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      to="/password-recovery" // Path from App.tsx
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      {...field} 
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isLoading}
                      id="rememberMe"
                    />
                  </FormControl>
                  <FormLabel htmlFor="rememberMe" className="font-normal text-sm leading-none cursor-pointer"> 
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            {errorMessage && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </Form>
      </AuthFormWrapper>
      <MinimalFooter />
    </>
  );
};

export default LoginPage;