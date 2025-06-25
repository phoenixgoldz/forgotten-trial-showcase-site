
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
        // The Forgotten Trial themed variants
        mystic: "bg-gradient-to-r from-mystic-blue to-ancient-stone text-white hover:from-mystic-blue/90 hover:to-ancient-stone/90 shadow-lg shadow-mystic-blue/25 hover:shadow-xl hover:shadow-mystic-blue/30 border border-ancient-stone/30 hover:border-ancient-stone/60 button-shine",
        ethereal: "bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-lg shadow-ethereal-gold/25 hover:shadow-xl hover:shadow-ethereal-gold/30 border border-ethereal-gold/40 hover:border-ethereal-gold/70 button-shine font-semibold",
        azure: "bg-gradient-to-r from-luminous-azure to-mystic-blue text-white hover:from-luminous-azure/90 hover:to-mystic-blue/90 shadow-lg shadow-luminous-azure/25 hover:shadow-xl hover:shadow-luminous-azure/30 border border-luminous-azure/30 hover:border-luminous-azure/60 button-shine",
        verdant: "bg-gradient-to-r from-verdant-glyph to-ethereal-gold text-white hover:from-verdant-glyph/90 hover:to-ethereal-gold/90 shadow-lg shadow-verdant-glyph/25 hover:shadow-xl hover:shadow-verdant-glyph/30 border border-verdant-glyph/30 hover:border-verdant-glyph/60 button-shine",
        ember: "bg-gradient-to-r from-ember-flame to-ethereal-gold text-white hover:from-ember-flame/90 hover:to-ethereal-gold/90 shadow-lg shadow-ember-flame/25 hover:shadow-xl hover:shadow-ember-flame/30 border border-ember-flame/30 hover:border-ember-flame/60 button-shine"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        hero: "h-14 rounded-xl px-8 text-lg font-semibold"
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
