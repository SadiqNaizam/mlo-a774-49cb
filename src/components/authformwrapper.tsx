import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming utils.ts exists for cn

interface AuthFormWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode; // Optional slot for things like a logo above the title
  footerContent?: React.ReactNode; // Optional slot for things like "Don't have an account?"
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  className,
  headerContent,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded with title:', title);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <Card className={cn("w-full max-w-md shadow-xl", className)}>
        {headerContent && <div className="pt-6 px-6">{headerContent}</div>}
        <CardHeader className="text-center space-y-1 px-6 pt-6 pb-4">
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="px-6 pb-6 space-y-4">
          {children}
        </CardContent>
        {footerContent && (
          <div className="px-6 pb-6 text-center text-sm text-gray-600 dark:text-gray-400">
            {footerContent}
          </div>
        )}
      </Card>
    </div>
  );
};

export default AuthFormWrapper;