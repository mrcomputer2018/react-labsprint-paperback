import { tv } from "tailwind-variants";

interface BadgeProps {
    title: string;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}

const badgeVariants = tv({
    base: "text-[10px] uppercase text-center",
    variants: {
        variant: {
            primary:
                "text-primary border-primary/30 bg-primary/20 py-0.5 border mb-6",
            secondary: "font-bold text-[#B4BB9B] bg-[#363A27]/50 py-1",
        },
        size: {
            small: "w-8",
            medium: "w-28",
            large: "w-38",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "large",
    },
});
export function Badge({ title, variant, size }: BadgeProps) {
    return (
        <div className={badgeVariants({ variant, size })}>
            <span>{title}</span>
        </div>
    );
}
