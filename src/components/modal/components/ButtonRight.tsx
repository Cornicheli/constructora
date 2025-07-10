export const ButtonRight = ({
    handleRight,
    photoNext,
}: {
    handleRight: any;
    photoNext: string;
}) => {
    return (
        <button
            onClick={handleRight}
            className="absolute right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform sm:h-8 sm:w-8">
            <img className="h-full w-full" src={photoNext} alt="back" />
        </button>
    );
};
