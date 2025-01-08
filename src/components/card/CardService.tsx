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
        <section className="item-card relative z-10 m-1 h-60 w-[275px] rounded shadow-2xl shadow-black xl:m-0 xl:w-[275px] 2xl:w-[350px]">
            {/* <section className="m-2 h-60 w-[275px] xl:m-0 xl:w-[275px] 2xl:w-[350px]"> */}
            <img className="h-full w-full" src={image} alt={alt} />
            <div className="txt p-4">
                <h2>{title}</h2>
            </div>
        </section>
    );
};
