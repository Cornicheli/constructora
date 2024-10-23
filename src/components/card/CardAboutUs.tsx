export const CardAboutUs = ({
    image,
    title,
    subTitle,
}: {
    image: string;
    title: string;
    subTitle: string;
}) => {
    return (
        <div className="mt-5 flex h-96 w-[375px] flex-col items-center justify-around px-5 md:w-[450px] lg:w-[275px] 2xl:w-[475px]">
            <div className="group relative h-44 w-44 overflow-hidden">
                <img className="h-full w-full" src={image} alt="Image" />
            </div>
            <div className="flex h-24 flex-col items-center justify-center">
                <h1 className="text-cente text-lg font-bold text-white">
                    {title}
                </h1>
                <h3 className="overflow-hidden text-ellipsis text-center text-white">
                    {subTitle}
                </h3>
            </div>
        </div>
    );
};
