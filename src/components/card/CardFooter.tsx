export const CardFooter = ({
    url,
    image,
    alt,
}: {
    url: string;
    image: string;
    alt: string;
}) => {
    return (
        <div className="flex w-8 items-center justify-center">
            <a href={url} target="about_blank">
                <img className="w-full" src={image} alt={alt} />
            </a>
        </div>
    );
};
