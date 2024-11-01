interface PropsCarrousel {
    url: string;
    alt: string;
}

export const CarrouselModal = ({ url, alt }: PropsCarrousel) => {
    return (
        <div
            className="h-[500px] w-full bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${url})` }}
            role="img"
            aria-label={alt}
        />
    );
};
