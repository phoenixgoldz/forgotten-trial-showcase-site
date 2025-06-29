
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-serif cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Updated themed variants with proper theme colors
        primary: "bg-ethereal-gold text-mystic-blue hover:bg-ethereal-gold/90 shadow-lg shadow-ethereal-gold/25 hover:shadow-xl hover:shadow-ethereal-gold/40 border-0 font-bold hover:scale-105 transform transition-all duration-300 button-shine",
        secondary_trial: "bg-ember-flame text-white hover:bg-ember-flame/90 shadow-lg shadow-ember-flame/25 hover:shadow-xl hover:shadow-ember-flame/40 border border-ember-flame hover:border-ember-flame/90 font-semibold hover:scale-105 transform transition-all duration-300",
        mystic: "bg-ancient-stone text-ethereal-gold hover:bg-ancient-stone/90 shadow-lg shadow-ancient-stone/25 hover:shadow-xl hover:shadow-ancient-stone/30 border border-ethereal-gold/30 hover:border-ethereal-gold/60 button-shine hover:scale-105 transform",
        ethereal: "bg-ethereal-gold text-mystic-blue hover:bg-ethereal-gold/90 shadow-lg shadow-ethereal-gold/25 hover:shadow-xl hover:shadow-ethereal-gold/30 border border-ethereal-gold/40 hover:border-ethereal-gold/70 button-shine font-semibold hover:scale-105 transform",
        azure: "bg-luminous-azure text-white hover:bg-luminous-azure/90 shadow-lg shadow-luminous-azure/25 hover:shadow-xl hover:shadow-luminous-azure/30 border border-luminous-azure/30 hover:border-luminous-azure/60 button-shine hover:scale-105 transform",
        verdant: "bg-verdant-glyph text-white hover:bg-verdant-glyph/90 shadow-lg shadow-verdant-glyph/25 hover:shadow-xl hover:shadow-verdant-glyph/30 border border-verdant-glyph/30 hover:border-verdant-glyph/60 button-shine hover:scale-105 transform",
        ember: "bg-ember-flame text-white hover:bg-ember-flame/90 shadow-lg shadow-ember-flame/25 hover:shadow-xl hover:shadow-ember-flame/30 border border-ember-flame/30 hover:border-ember-flame/60 button-shine hover:scale-105 transform"
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
