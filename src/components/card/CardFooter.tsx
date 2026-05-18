interface CardFooterProps {
    url: string;
    image: string;
    alt: string;
}

export const CardFooter = ({ url, image, alt }: CardFooterProps) => {
    return (
        <div className="flex w-8 items-center justify-center">
            <a href={url} target="about_blank">
                <img className="w-full" src={image} alt={alt} />
            </a>
        </div>
    );
};
