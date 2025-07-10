export const ButtonClose = ({
    isClose,
    close,
}: {
    isClose: any;
    close: string;
}) => {
    return (
        <button className="mt-3 cursor-pointer" onClick={isClose}>
            <img className="h-8 w-8 sm:h-6 sm:w-6" src={close} alt="close" />
        </button>
    );
};
