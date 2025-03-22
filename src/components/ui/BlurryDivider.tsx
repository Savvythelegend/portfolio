
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurryDividerProps {
  className?: string;
}

const BlurryDivider: React.FC<BlurryDividerProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full h-px my-8", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </div>
  );
};

export default BlurryDivider;
