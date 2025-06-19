import React from 'react';
import { Rocket } from 'lucide-react'; // Used as a default placeholder if no logoUrl is provided
import { cn } from '@/lib/utils'; // Assumes cn utility from shadcn/ui setup

interface BrandLogoDisplayProps {
  /** Custom URL for the logo image. If not provided, a default icon will be shown. */
  logoUrl?: string;
  /** Alt text for the logo image. Defaults to "Application Logo". */
  altText?: string;
  /** Defines the size of the logo. Options: 'sm', 'md', 'lg', 'xl'. Defaults to 'md'. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** If true, applies a simple hover animation to the logo. Defaults to false. */
  animated?: boolean;
  /** Optional additional CSS classes to apply to the component's root element. */
  className?: string;
}

const BrandLogoDisplay: React.FC<BrandLogoDisplayProps> = ({
  logoUrl,
  altText = 'Application Logo',
  size = 'md',
  animated = false,
  className,
}) => {
  console.log('BrandLogoDisplay loaded');

  // Define size classes for image (logoUrl provided) and icon (no logoUrl)
  // Image sizes use w-auto to maintain aspect ratio based on height
  // Icon sizes are square
  const sizeConfig = {
    sm: { img: 'h-8 w-auto', icon: 'h-6 w-6' },
    md: { img: 'h-10 w-auto', icon: 'h-8 w-8' },
    lg: { img: 'h-14 w-auto', icon: 'h-12 w-12' },
    xl: { img: 'h-20 w-auto', icon: 'h-16 w-16' },
  };

  const currentSizeClasses = logoUrl ? sizeConfig[size].img : sizeConfig[size].icon;
  const animationClasses = animated ? 'transition-transform duration-300 ease-in-out hover:scale-110' : '';

  return (
    <div className={cn('flex items-center justify-center', className)}>
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={altText}
          className={cn(
            currentSizeClasses,
            animationClasses,
            'object-contain' // Ensures the image is scaled correctly within its bounds
          )}
        />
      ) : (
        // Default placeholder icon (Rocket) if no logoUrl is provided
        <Rocket
          className={cn(
            currentSizeClasses,
            animationClasses,
            'text-primary' // Assumes a 'primary' text color is defined in Tailwind config
          )}
          aria-label={altText} // Use altText for accessibility on the icon too
        />
      )}
    </div>
  );
};

export default BrandLogoDisplay;