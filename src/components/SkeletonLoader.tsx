
import { Card, CardContent } from '@/components/ui/card';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'button';
  width?: string;
  height?: string;
  className?: string;
}

const SkeletonLoader = ({ 
  variant = 'card', 
  width = 'w-full', 
  height = 'h-20',
  className = '' 
}: SkeletonLoaderProps) => {
  const baseClasses = 'animate-pulse bg-ancient-stone/30 rounded-lg';
  
  switch (variant) {
    case 'text':
      return (
        <div className={`${baseClasses} h-4 ${width} ${className}`}></div>
      );
    
    case 'avatar':
      return (
        <div className={`${baseClasses} w-16 h-16 rounded-full ${className}`}></div>
      );
    
    case 'button':
      return (
        <div className={`${baseClasses} h-10 w-24 ${className}`}></div>
      );
    
    case 'card':
    default:
      return (
        <Card className={`${className} border-ancient-stone/40`}>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className={`${baseClasses} h-6 w-3/4`}></div>
              <div className={`${baseClasses} h-4 w-full`}></div>
              <div className={`${baseClasses} h-4 w-2/3`}></div>
            </div>
          </CardContent>
        </Card>
      );
  }
};

export default SkeletonLoader;
