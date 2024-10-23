import '../../style/card.css';

export const CardService = ({
    title,
    image,
    alt,
}: {
    title: string;
    image: string;
    alt: string;
}) => {
    return (
        <section className="item-card relative z-10 m-1 h-52 w-[275px] rounded shadow-2xl shadow-black xl:m-0 xl:w-[250px] 2xl:w-[300px]">
            <img
                className="absolute -z-40 h-full w-full"
                src={image}
                alt={alt}
            />
            <div className="txt p-4">
                <h2>{title}</h2>
            </div>
        </section>
    );
};
