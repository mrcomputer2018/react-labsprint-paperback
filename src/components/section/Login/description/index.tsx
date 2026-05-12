import type { HTMLAttributes, ReactNode } from "react";

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement>{
    children: ReactNode;
}

export default function Description({ children, ...rest }: DescriptionProps) {
  return (
    <p className="text-white/60 text-lg max-w-md" {...rest}>
      {children}
    </p>
  )
}
