interface HeaderLogoProps {
    source: string;
    alt: string;
    title: string;
}

export function HeaderLogo({ source, alt, title }: HeaderLogoProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
        <img src={source} alt={alt} />
        <h1 className="text-xl font-bold tracking-tighter text-white uppercase">
            {title}
        </h1>
    </div>
  )
}
