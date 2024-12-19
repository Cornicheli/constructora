export const DescriptionCortinas = ({
    text,
    textDescription,
}: {
    text: string;
    textDescription: string;
}) => {
    return (
        <div className="flex h-64 flex-col items-center justify-center p-5 text-center">
            <p className="py-1 text-lg text-[#545454] lg:text-4xl">{text}</p>
            <p className="py-1 text-lg text-[#545454] lg:text-4xl">
                {textDescription}
            </p>
        </div>
    );
};
