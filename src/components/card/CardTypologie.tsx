export const CardTypologies = ({
    title,
    image,
}: {
    title: string;
    image: string;
}) => {
    return (
        <div className="relative m-auto flex h-72 w-[375px] flex-col items-center justify-center rounded-xl shadow-md shadow-[#ffffff4d] transition duration-100 ease-out hover:scale-105 md:w-[450px] md:ease-in lg:w-[375px] 2xl:w-[475px]">
            {/* <div
                        className="w-full h-42 group overflow-hidden rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                  /> */}
            <div className="h-42 group w-full overflow-hidden rounded-xl">
                <img
                    className="h-full w-full rounded-xl"
                    src={image}
                    alt="Image"
                />
            </div>
            <div className="absolute bottom-0 left-5 h-10 w-36 rounded-t-md bg-[#00000061]">
                <h1 className="absolute bottom-2 left-5 font-semibold text-white">
                    {title}
                </h1>
            </div>
        </div>
    );
};
