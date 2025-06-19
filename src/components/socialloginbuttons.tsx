import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Mail, Facebook as FacebookIcon } from 'lucide-react'; // Renamed Facebook to FacebookIcon to avoid conflict if Facebook SDK is ever used

const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: string) => {
    // In a real application, you would trigger the OAuth flow here.
    // For example, redirecting to the provider's authentication page
    // or using a client-side SDK.
    console.log(`Attempting login with ${provider}...`);
    // Example: window.location.href = `/auth/${provider.toLowerCase()}`;
  };

  return (
    <div className="flex flex-col w-full space-y-3">
      <Button
        variant="outline"
        className="w-full flex items-center justify-center py-2.5"
        onClick={() => handleSocialLogin('Google')}
      >
        <Mail className="mr-2 h-5 w-5" /> {/* Using Mail icon as a generic representation for Google login */}
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center py-2.5"
        onClick={() => handleSocialLogin('GitHub')}
      >
        <Github className="mr-2 h-5 w-5" />
        Continue with GitHub
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center py-2.5"
        onClick={() => handleSocialLogin('Facebook')}
      >
        <FacebookIcon className="mr-2 h-5 w-5" />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default SocialLoginButtons;