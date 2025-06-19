import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import BrandLogoDisplay from '@/components/BrandLogoDisplay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AlertTriangle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Zod schema for registration form validation
const registrationFormSchema = z.object({
  name: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Apply error to the confirmPassword field
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: RegistrationFormValues) => {
    setIsLoading(true);
    setFormError(null);
    console.log("Registration form submitted:", { name: values.name, email: values.email, password: '[PROTECTED]', confirmPassword: '[PROTECTED]'});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/failure (replace with actual API call)
    const isSuccess = Math.random() > 0.3; // Simulate ~70% success rate

    if (isSuccess) {
      console.log("Registration successful!");
      // In a real app, you might show a success toast from sonner (already in App.tsx)
      // For example: toast.success("Registration successful! Please log in.");
      // Then redirect to login or dashboard.
      // Per user journey, user can login after registration.
      navigate('/login?status=registered'); // Redirect to login, optionally with a status
    } else {
      const errorMessage = "Registration failed. An account with this email may already exist, or an unexpected error occurred. Please try again.";
      setFormError(errorMessage);
      console.error("Registration failed:", errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
      <MinimalHeader />
      {/* AuthFormWrapper handles its own background and centering.
          Its internal min-h-screen will make it occupy significant vertical space.
          The overall page might scroll if header/footer + AuthFormWrapper > viewport height. */}
      <AuthFormWrapper
        title="Create Your Account"
        description="Fill in the details below to get started on your journey with us."
        headerContent={
          <BrandLogoDisplay 
            logoUrl="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" 
            altText="Application Logo" 
            size="md" 
            className="mb-5" 
          />
        }
        footerContent={
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log In
            </Link>
          </p>
        }
        // className prop on AuthFormWrapper applies to its internal Card component
        className="w-full max-w-md" 
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} aria-label="Full Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} aria-label="Email Address" />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="•••••••• (min. 8 characters)" {...field} aria-label="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} aria-label="Confirm Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {formError && (
              <Alert variant="destructive" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Registration Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full !mt-6 py-2.5" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
        </Form>
      </AuthFormWrapper>
      <MinimalFooter />
    </div>
  );
};

export default RegistrationPage;