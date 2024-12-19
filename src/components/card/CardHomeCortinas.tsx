import React from 'react';
import { DividerWhite } from '../DividerWhite';
import bannerCortinas from '@/assets/cortinas/carruselCortinas/banner-principal-cortinas-large.jpg';

interface PropsCardHomeCortinas {
    photoHome?: string;
    altPhotoHome: string;
    title: string;
    description: string;
    subDescription?: string;
}

export const CardHomeCortinas = ({
    photoHome,
    title,
    description,
    altPhotoHome,
    subDescription,
}: PropsCardHomeCortinas) => {
    return (
        <div className="relative flex h-[400px] justify-center overflow-hidden shadow-md lg:h-[750px]">
            <img
                src={bannerCortinas}
                alt={altPhotoHome}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25" />

            <div className="absolute top-1/4 w-2/4 items-center p-4 text-center md:top-1/3 lg:top-[70%]">
                <h2 className="text-3xl font-semibold text-white lg:text-5xl">
                    {title}
                </h2>
                <DividerWhite />
                <p className="text-center text-lg text-white lg:text-2xl">
                    {description}
                </p>
                <p className="text-lg text-white lg:text-2xl">
                    {subDescription}
                </p>
            </div>
        </div>
    );
};
