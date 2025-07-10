interface ImageCarrouselProps {
    images: any;
    handleIndex: number;
}

export const ImageCarrousel: React.FC<ImageCarrouselProps> = ({
    images,
    handleIndex,
}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${images[handleIndex]})`,
            }}
            className="mx-auto rounded-lg bg-cover bg-center md:h-[500px] md:w-[600px] lg:h-[500px] lg:w-[700px] xl:h-[500px] xl:w-[830px]"
            // aria-label={`Imagen ${handleIndex + 1}`}
        />
    );
};
