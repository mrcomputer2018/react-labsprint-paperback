import { type ButtonHTMLAttributes,forwardRef } from "react";
import { tv } from "tailwind-variants";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "black" | "transparent";
    align: "left" | "center" | "right";
}

const buttonCustomVariants = tv({
    base: "w-full px-3 rounded-xs h-14 text-base justify-center items-center flex gap-3 transition-colors duration-300",
    variants: {
        variant: {
            primary: "bg-primary text-sm",
            secondary: "bg-white",
            black: "bg-[#363A27] text-white",
            transparent: "bg-transparent text-[#B4BB9B]",
        },
        align: {
            left: "justify-start",
            center: "justify-center",
            right: "justify-end",
        },
    },
    defaultVariants: {
        variant: "primary",
        align: "center",
    },
});

export const ButtonCustom = forwardRef<HTMLButtonElement, ButtonCustomProps>(
     function ButtonCustom({ children, variant, align, className, ...rest }, ref) {
        return (
            <button
                ref={ref}
                className={buttonCustomVariants({ variant, align, className })}
                {...rest}
            >
                {children}
            </button>
        );
    },
);

export default ButtonCustom;
