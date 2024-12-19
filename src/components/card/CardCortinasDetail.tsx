export const CardCortinasDetail = ({
    photo,
    altPhoto,
}: {
    photo: string;
    altPhoto: string;
}) => {
    return (
        <div className="my-3 h-64 w-[320px] rounded bg-cover shadow-2xl transition delay-150 duration-300 ease-in-out hover:translate-y-px hover:scale-105 md:w-[370px] lg:w-[350px] xl:w-[300px] 2xl:w-[400px]">
            <img
                className="h-full w-full rounded bg-cover"
                src={photo}
                alt={altPhoto}
            />
        </div>
    );
};
