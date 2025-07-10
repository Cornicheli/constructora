export const CardService = ({
    title,
    image,
    alt,
    onOpenModal,
}: {
    title: string;
    image: string;
    onOpenModal: any;
    alt: string;
}) => {
    return (
        <div className="m-1 h-auto w-full">
            <div className="pl-1 text-xl font-semibold text-[#111111]">
                <h2>{title}</h2>
            </div>
            <section
                className="item-card relative z-10 m-1 h-60 w-[275px] rounded shadow-2xl shadow-black xl:m-0 xl:w-[275px] 2xl:w-[350px]"
                onClick={onOpenModal}>
                <img className="h-full w-full" src={image} alt={alt} />
            </section>
        </div>
    );
};
