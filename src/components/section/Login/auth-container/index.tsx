export default function AuthContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex max-w-131.5 flex-1 flex-col rounded-sm bg-[#0F1108]/70 p-12">
            {children}
        </div>
    );
}
