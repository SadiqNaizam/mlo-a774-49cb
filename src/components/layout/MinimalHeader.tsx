import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogoDisplay from '@/components/BrandLogoDisplay'; // Assuming this component exists as per <already-generated-components>

const MinimalHeader: React.FC = () => {
  console.log('MinimalHeader loaded');

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <BrandLogoDisplay />
          <span className="text-xl font-semibold text-foreground">Secure Access</span>
        </Link>
        {/* No navigation links as this is a minimal header for auth pages */}
      </div>
    </header>
  );
};

export default MinimalHeader;