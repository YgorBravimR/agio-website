import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "border-2 shadow-lg inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300 rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        sky: "bg-skyBlueColor border-leafGreenColor text-lightTextColor hover:bg-skyBlueColorDark",
        lime: "bg-limeColor border-leafGreenColor text-darkTextColor hover:bg-limeColorDark",
        ocean: "bg-oceanBlueColor border-blackColor text-blackColor hover:bg-oceanBlueColorDark",
      },
      size: {
        default: "h-12 text-2xl px-4 py-2",
        sm: "h-8 rounded-md px-3 py-1 text-xs",
        lg: "h-14 rounded-md px-8 py-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
