import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogoDisplay from '@/components/BrandLogoDisplay'; // Custom component
import { Button } from '@/components/ui/button'; // shadcn/ui
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // shadcn/ui
import { ArrowRight, LockKeyhole } from 'lucide-react';

const LandingPage: React.FC = () => {
  console.log('LandingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-sky-950">
      {/* Header Section */}
      <header className="py-4 px-6 shadow-sm bg-white dark:bg-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <BrandLogoDisplay size="md" animated={true} />
            <span className="text-xl font-semibold text-slate-700 dark:text-slate-200">MyApp Gateway</span>
          </Link>
          <nav>
            <Link to="/login">
              <Button variant="outline" className="text-sky-600 border-sky-600 hover:bg-sky-50 dark:text-sky-400 dark:border-sky-500 dark:hover:bg-sky-900">
                <LockKeyhole className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center p-6 text-center">
        <Card className="w-full max-w-2xl shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="pt-8">
            <div className="flex justify-center mb-4">
                <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Application illustration" className="h-40 w-auto rounded-lg object-cover" />
            </div>
            <CardTitle className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
              Welcome to Your Secure Application Hub
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-300 pt-2">
              Access your personalized dashboard, manage your data, and utilize all our protected features with confidence. We prioritize your security and provide a seamless experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="py-6">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Our platform offers robust security measures to ensure that your information is always protected.
              Sign in to continue or create an account if you're new here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600">
                  Proceed to Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/registration">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Create Account
                </Button>
              </Link>
            </div>
          </CardContent>
          <CardFooter className="pb-8 justify-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Need help? Visit our support page or contact us.
            </p>
          </CardFooter>
        </Card>
      </main>

      {/* Footer Section */}
      <footer className="py-6 px-6 text-center bg-white dark:bg-slate-800 border-t dark:border-slate-700">
        <div className="container mx-auto">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} MyApp Gateway. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            A secure gateway to your application services.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;