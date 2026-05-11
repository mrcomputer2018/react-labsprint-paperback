import type { ReactNode } from "react";

interface MainContentProps {
    children: ReactNode;
    className?: string;
} 

export default function MainContent({children, className} : MainContentProps) {
  return (
    <main className={`w-full py-2.5 px-4 ${className}`}>
        <div className="flex max-w-275 flex-row items-center justify-between mx-auto">
            {children}
        </div>
    </main>
  )
}
