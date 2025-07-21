
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-sans cursor-pointer relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        
        // Professional AAA Game Studio variants with built-in effects
        primary: "bg-gradient-to-r from-ethereal-gold to-ethereal-gold/90 text-mystic-blue font-bold shadow-2xl shadow-ethereal-gold/40 hover:shadow-3xl hover:shadow-ethereal-gold/60 transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 border-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        secondary_trial: "bg-gradient-to-r from-ember-flame to-ember-flame/80 text-white font-semibold shadow-2xl shadow-ember-flame/40 hover:shadow-3xl hover:shadow-ember-flame/60 border border-ember-flame/50 hover:border-ember-flame transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        mystic: "bg-gradient-to-r from-ancient-stone to-ancient-stone/90 text-ethereal-gold font-semibold shadow-2xl shadow-ancient-stone/30 hover:shadow-3xl hover:shadow-ancient-stone/50 border border-ethereal-gold/40 hover:border-ethereal-gold/70 transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-ethereal-gold/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        ethereal: "bg-transparent border-2 border-ethereal-gold text-ethereal-gold font-semibold shadow-xl shadow-ethereal-gold/30 hover:bg-ethereal-gold hover:text-mystic-blue hover:shadow-2xl hover:shadow-ethereal-gold/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-ethereal-gold/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        azure: "bg-gradient-to-r from-luminous-azure to-luminous-azure/90 text-white font-semibold shadow-2xl shadow-luminous-azure/40 hover:shadow-3xl hover:shadow-luminous-azure/60 border border-luminous-azure/50 hover:border-luminous-azure transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        verdant: "bg-gradient-to-r from-verdant-glyph to-verdant-glyph/90 text-white font-semibold shadow-2xl shadow-verdant-glyph/40 hover:shadow-3xl hover:shadow-verdant-glyph/60 border border-verdant-glyph/50 hover:border-verdant-glyph transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        
        ember: "bg-gradient-to-r from-ember-flame to-ember-flame/90 text-white font-semibold shadow-2xl shadow-ember-flame/40 hover:shadow-3xl hover:shadow-ember-flame/60 border border-ember-flame/50 hover:border-ember-flame transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
      },
      size: {
        default: "h-10 px-4 py-2 text-base",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg",
        icon: "h-10 w-10",
        hero: "h-14 rounded-xl px-8 text-lg font-bold",
        story: "h-12 rounded-lg px-6 py-3 text-base font-semibold min-w-[140px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
