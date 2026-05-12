import type { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
}

export function Header({ children }: HeaderProps) {
    return (
        <header>
            <div className="flex flex-row justify-between py-6">{children}</div>
        </header>
    );
}
