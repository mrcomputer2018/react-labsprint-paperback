import type { HTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface TitleSectionProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

const titleSectionVariants = tv({
    base: "",
    variants: {
        variant: {
            primary: "text-white text-3xl font-bold",
            secondary: "text-primary uppercase",
        },
    },
    defaultVariants: { variant: "primary" },
});

export default function TitleSection({
    children,
    variant,
    ...rest
}: TitleSectionProps) {
    return (
        <h2 className={titleSectionVariants({ variant })} {...rest}>
            {children}
        </h2>
    );
}
