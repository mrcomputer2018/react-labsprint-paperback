import type { HTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface SpanUppercaseProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant: "white_30" | "white_60" | "primary";
}

const spanUppercaseVariants = tv({
    base: "uppercase font-bold text-[10px]",
    variants: {
        variant: {
            white_30: "text-white/30",
            white_60: "text-white/60 text-base",
            primary: "text-primary text-xs font-bold",
        },
    },
    defaultVariants: {
        variant: "white_30",
    },
});

export default function SpanUppercase({
    children,
    variant,
    ...rest
}: SpanUppercaseProps) {
    return (
        <span className={spanUppercaseVariants({ variant })} {...rest}>
            {children}
        </span>
    );
}
