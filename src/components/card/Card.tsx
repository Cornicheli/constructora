interface PropsCard {
    title: string;
    image: string;
    subTitle?: string;
    isOpenModal: (id: string) => void;
    id: string | number;
}

export const Card = ({
    title,
    image,
    subTitle,
    isOpenModal,
    id,
}: PropsCard) => {
    return (
        <div
            className="m-auto mx-5 my-5 flex h-80 w-[375px] cursor-pointer flex-col items-center justify-center rounded-xl shadow-lg transition duration-100 ease-out hover:scale-105 md:w-[450px] md:ease-in lg:w-[375px] 2xl:w-[475px]"
            onClick={() => isOpenModal(id)}>
            <div
                className="h-4/5 w-full overflow-hidden rounded-t-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex h-1/4 w-full flex-col justify-center rounded-b-xl bg-white">
                <h1 className="ml-5 text-lg font-semibold text-[#0E2230]">
                    {title}
                </h1>
                <h1 className="ml-5 font-medium text-[#1b1b1cab]">
                    {subTitle}
                </h1>
            </div>
        </div>
    );
};
