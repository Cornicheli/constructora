export const CardToldosDetail = ({
    photo,
    altPhoto,
}: {
    photo: string | string[];
    altPhoto: string;
}) => {
    const resolvedPhoto = Array.isArray(photo) ? photo[0] : photo;
    return (
        <div className="my-3 h-64 w-64 rounded bg-cover shadow-2xl transition delay-150 duration-300 ease-in-out hover:translate-y-px hover:scale-105 lg:w-72 xl:w-[400px]">
            <img
                className="h-full w-full rounded bg-cover"
                src={resolvedPhoto}
                alt={altPhoto}
            />
        </div>
    );
};
