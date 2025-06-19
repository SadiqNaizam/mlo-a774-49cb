import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import BrandLogoDisplay from '@/components/BrandLogoDisplay';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const passwordRecoveryFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type PasswordRecoveryFormValues = z.infer<typeof passwordRecoveryFormSchema>;

const PasswordRecoveryPage = () => {
  console.log('PasswordRecoveryPage loaded');
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const form = useForm<PasswordRecoveryFormValues>({
    resolver: zodResolver(passwordRecoveryFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: PasswordRecoveryFormValues) => {
    setSubmissionStatus('loading');
    setFeedbackMessage(null);
    console.log("Password recovery requested for:", data.email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Simulate success or error
    if (data.email.includes("test@example.com")) {
      setSubmissionStatus('success');
      setFeedbackMessage("If an account with this email exists, a password reset link has been sent.");
      form.reset(); // Reset form on success
    } else {
      setSubmissionStatus('error');
      setFeedbackMessage("Failed to send reset instructions. Please check the email and try again or contact support if the issue persists.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <MinimalHeader />
      <main className="flex-grow">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="No worries! Enter your email address below and we'll send you a link to reset your password."
          headerContent={<BrandLogoDisplay size="lg" className="mb-4" />}
          footerContent={
            <p>
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline dark:text-primary-light">
                Sign In
              </Link>
            </p>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        {...field}
                        disabled={submissionStatus === 'loading'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {feedbackMessage && submissionStatus !== 'loading' && (
                <Alert variant={submissionStatus === 'error' ? 'destructive' : 'default'} className={submissionStatus === 'success' ? 'border-green-500 text-green-700 dark:border-green-600 dark:text-green-500' : ''}>
                  {submissionStatus === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertTitle>{submissionStatus === 'success' ? 'Instructions Sent!' : submissionStatus === 'error' ? 'Error' : 'Info'}</AlertTitle>
                  <AlertDescription>
                    {feedbackMessage}
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full"
                disabled={submissionStatus === 'loading'}
              >
                {submissionStatus === 'loading' ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default PasswordRecoveryPage;