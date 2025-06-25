
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-6 w-full overflow-hidden rounded-full bg-gradient-to-r from-ancient-stone/80 to-mystic-blue/60 border-2 border-ancient-stone/60 backdrop-blur-sm",
      className
    )}
    {...props}
  >
    {/* Background mystical pattern */}
    <div className="absolute inset-0 bg-gradient-to-r from-ancient-stone/20 via-mystic-blue/30 to-ancient-stone/20"></div>
    
    {/* Animated background shimmer */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ethereal-gold/10 to-transparent animate-pulse opacity-50"></div>
    
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-ethereal-gold via-luminous-azure to-verdant-glyph transition-all duration-700 ease-out rounded-full relative overflow-hidden shadow-lg"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
      
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
      
      {/* Leading edge glow */}
      <div className="absolute right-0 top-0 w-3 h-full bg-white/60 blur-sm"></div>
      
      {/* Mystical particle effect */}
      <div className="absolute inset-0 opacity-70">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-80"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </ProgressPrimitive.Indicator>
    
    {/* Outer glow effect */}
    <div className="absolute inset-0 rounded-full shadow-inner border border-ethereal-gold/30"></div>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
