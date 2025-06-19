import React from 'react';
import { Link } from 'react-router-dom';

const MinimalFooter: React.FC = () => {
  console.log('MinimalFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between sm:items-center">
        <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
          &copy; {currentYear} Secure Access. All rights reserved.
        </p>
        <nav className="flex justify-center gap-4 sm:gap-6 text-sm">
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default MinimalFooter;