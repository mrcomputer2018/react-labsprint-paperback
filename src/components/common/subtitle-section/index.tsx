export default function SubtitleSection({
    children,
}: {
    children: React.ReactNode;
}) {
    return <p className="text-base text-white/60">{children}</p>;
}
