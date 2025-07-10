import React, { useState } from 'react';
import close from '@/assets/close.png';
import next from '@/assets/next.png';
import back from '@/assets/back.png';
import { ButtonLeft } from './components/ButtonLeft';
import { ButtonRight } from './components/ButtonRight';
import { ButtonClose } from './components/ButtonClose';

interface ShowModal {
    isVisible: boolean;
    isClose: () => void;
    images: string[];
    title: any;
}

export const ModalPiscinasService = ({
    isVisible,
    isClose,
    images,
    title,
}: ShowModal) => {
    const [handleIndex, setHandleIndex] = useState(0);

    const handleOnSuma = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setHandleIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const handleOnResta = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setHandleIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    if (!isVisible) return null;
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget.id === 'wrapper') isClose();
    };

    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25 backdrop-blur-sm"
            id="wrapper"
            onClick={handleClose}>
            <div className="z-50 flex h-auto w-full max-w-screen-lg flex-col sm:w-full">
                <div className="relative m-5 h-full overflow-hidden rounded-lg bg-white object-cover">
                    <div className="mx-6 flex items-center justify-between">
                        <h1 className="w-full text-center text-2xl font-semibold sm:text-3xl">
                            {title}
                        </h1>
                        <ButtonClose isClose={isClose} close={close} />
                    </div>

                    <div className="relative flex h-full w-full flex-row items-center justify-between px-10 py-4">
                        <ButtonLeft
                            handleLeft={handleOnResta}
                            photoBack={back}
                        />
                        <img
                            src={images[handleIndex]}
                            className="mx-auto rounded-lg md:h-[500px] md:w-[600px] lg:h-[500px] lg:w-[700px] xl:h-[550px] xl:w-[950px]"
                        />
                        <ButtonRight
                            handleRight={handleOnSuma}
                            photoNext={next}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
