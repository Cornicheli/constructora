export const ButtonLeft = ({
    handleLeft,
    photoBack,
}: {
    handleLeft: any;
    photoBack: string;
}) => {
    return (
        <button
            onClick={handleLeft}
            className="absolute left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform sm:h-8 sm:w-8">
            <img className="h-full w-full" src={photoBack} alt="back" />
        </button>
    );
};
