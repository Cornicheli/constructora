import React from 'react';

interface GridSectionProps {
    children: React.ReactNode;
}

export const GridSection: React.FC<GridSectionProps> = ({ children }) => {
    return (
        // <section className="my-6 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
        <section className="grid grid-cols-1 content-start justify-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {children}
        </section>
    );
};
