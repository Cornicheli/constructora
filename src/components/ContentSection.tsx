import React from 'react';

interface ContentSectionProps {
    title: string;
    description: string;
    subDescription?: string;
    buttonText: string;
    onButtonClick?: () => void;
    children?: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    description,
    subDescription,
    buttonText,
    onButtonClick,
    children,
}) => {
    return (
        <section className="flex flex-col items-center justify-center p-5 text-center">
            <h1 className="my-4 text-3xl text-[#393939]">{title}</h1>
            <p className="w-3/4 py-1 text-lg tracking-wide text-[#464646] lg:w-3/5 lg:text-2xl">
                {description}
            </p>
            <p className="w-3/4 py-1 text-lg tracking-wide text-[#464646] lg:w-3/5 lg:text-2xl">
                {subDescription}
            </p>
            {children}
            <button
                className="my-10 h-16 w-80 rounded bg-[#0E2230]"
                onClick={onButtonClick}>
                <p className="text-xl font-semibold text-white">{buttonText}</p>
            </button>
        </section>
    );
};
