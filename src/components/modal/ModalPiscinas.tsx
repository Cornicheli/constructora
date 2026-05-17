import React, { useState } from 'react';
import close from '../../assets/close.png';
import next from '../../assets/next.png';
import back from '../../assets/back.png';

interface ShowModal {
    isVisible: boolean;
    isClose: () => void;
    images: string[];
    title?: string;
}

export const ModalPiscinas = ({ isVisible, isClose, images, title }: ShowModal) => {
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
            id="wrapper"
            onClick={handleClose}>
            <div className="z-50 flex h-auto max-h-[90vh] w-full max-w-screen-lg flex-col sm:w-full">
                <div className="relative m-5 h-full overflow-hidden rounded-lg bg-white object-cover">
                    {/* Header */}
                    <div className="mx-6 flex h-20 items-center justify-between">
                        <h1 className="w-full text-center text-2xl sm:text-3xl">
                            {title || 'Proceso de Construcción'}
                        </h1>
                        <button className="cursor-pointer" onClick={isClose}>
                            <img
                                className="h-8 w-8 sm:h-6 sm:w-6"
                                src={close}
                                alt="close"
                            />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative flex h-full w-full flex-row items-center justify-between px-6 pb-4">
                        {/* Botón para ir atrás */}
                        <button
                            onClick={handleOnResta}
                            className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform sm:h-8 sm:w-8">
                            <img
                                className="h-full w-full"
                                src={back}
                                alt="back"
                            />
                        </button>

                        {/* Imagen */}

                        <img
                            src={images[handleIndex]}
                            alt={`Proceso de construcción - Imagen ${handleIndex + 1} de ${images.length}`}
                            className="w-full max-w-[90vw] max-h-[60vh] object-contain rounded-lg mx-auto"
                        />

                        {/* Botón para ir adelante */}
                        <button
                            onClick={handleOnSuma}
                            className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform sm:h-8 sm:w-8">
                            <img
                                className="h-full w-full"
                                src={next}
                                alt="next"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
