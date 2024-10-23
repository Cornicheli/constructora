export const CardAbout = ({
    title,
    subtitle,
    image,
    alt,
}: {
    title: string;
    image: string;
    subtitle: string;
    alt: string;
}) => {
    return (
        <div className="flex h-72 flex-col items-center justify-center">
            <img src={image} alt={alt} />
            <div className="mt-3 flex flex-col">
                <h1 className="p-0.5 text-white">{title}</h1>
                <h2 className="p-0.5 text-white">{subtitle}</h2>
            </div>
        </div>
    );
};
