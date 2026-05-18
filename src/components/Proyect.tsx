import { useState } from 'react';
import { Card } from '../components/card/Card';
import { Eyebrow } from './ui';
import type { Project, ProjectFilter } from '../types';
import {
    house10,
    house11,
    house12,
    house13,
    house14,
    house18,
    house19,
    house21,
    house22,
} from '../assets/image/house';

const allProjects: Project[] = [
    {
        title: 'La Faustina',
        subTitle: 'Casas De Campo',
        pill: 'Casas de Campo',
        filter: 'casa',
        photoCount: 12,
        image: house18,
    },
    {
        title: 'Punta Perdíz',
        subTitle: 'Cariló',
        pill: 'Cariló',
        filter: 'carilo',
        photoCount: 18,
        image: house10,
    },
    {
        title: 'Tres Pinos',
        subTitle: 'Villa de campo',
        pill: 'Villa',
        filter: 'casa',
        photoCount: 8,
        image: house21,
    },
    {
        title: 'Escobar',
        subTitle: 'Av Los Lagos',
        pill: 'Escobar',
        filter: 'escobar',
        photoCount: 14,
        image: house11,
    },
    {
        title: 'Canning',
        subTitle: 'La Alameda',
        pill: 'Canning',
        filter: 'canning',
        photoCount: 22,
        image: house13,
    },
    {
        title: 'Nordelta',
        subTitle: 'Barrio Los Lagos',
        pill: 'Nordelta',
        filter: 'nordelta',
        photoCount: 16,
        image: house12,
    },
    {
        title: 'Canning',
        subTitle: 'Los Jazmines',
        pill: 'Canning',
        filter: 'canning',
        photoCount: 9,
        image: house22,
    },
    {
        title: 'Escobar',
        subTitle: 'Puertos Del Lago',
        pill: 'Escobar',
        filter: 'escobar',
        photoCount: 11,
        image: house19,
    },
    {
        title: 'Nordelta',
        subTitle: 'Los Lagos',
        pill: 'Nordelta',
        filter: 'nordelta',
        photoCount: 20,
        image: house14,
    },
];

const filters: ProjectFilter[] = [
    { key: 'all', label: 'Todos' },
    { key: 'casa', label: 'Casas de Campo' },
    { key: 'carilo', label: 'Cariló' },
    { key: 'canning', label: 'Canning' },
    { key: 'nordelta', label: 'Nordelta' },
    { key: 'escobar', label: 'Escobar' },
];

const Proyect = () => {
    const [active, setActive] = useState('all');

    const visible =
        active === 'all'
            ? allProjects
            : allProjects.filter(p => p.filter === active);

    return (
        <section
            className="px-10 py-[120px]"
            style={{ maxWidth: 1320, margin: '0 auto' }}
            id="proyect">
            {/* Head */}
            <div
                className="mb-14 flex items-end gap-10"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'end',
                    gap: 40,
                    marginBottom: 56,
                }}>
                <div>
                    <Eyebrow label="Obras realizadas" className="mb-3" />
                    <h2
                        className="m-0 font-light leading-[1.05] tracking-[-0.02em] text-ink"
                        style={{ fontSize: 'clamp(36px, 3.4vw, 52px)' }}>
                        Nuestros{' '}
                        <em
                            style={{
                                fontFamily:
                                    '"Instrument Serif", "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: '#0E2138',
                            }}>
                            proyectos
                        </em>
                    </h2>
                </div>
                <p className="m-0 max-w-[360px] text-sm leading-[1.55] text-mute">
                    Una selección de las obras que hemos llevado a cabo en
                    distintos puntos del país. Casas de campo, residenciales y
                    proyectos a medida.
                </p>
            </div>

            {/* Filters */}
            <div
                className="mb-8 flex items-center gap-1.5 border-b border-line pb-[18px]"
                style={{ flexWrap: 'wrap' }}>
                {filters.map(f => (
                    <button
                        key={f.key}
                        onClick={() => setActive(f.key)}
                        className="rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[.02em] transition-colors duration-200"
                        style={{
                            background:
                                active === f.key ? '#0E2138' : 'transparent',
                            color: active === f.key ? '#fff' : '#6c7689',
                            border: 'none',
                            cursor: 'pointer',
                        }}>
                        {f.label}
                    </button>
                ))}
                <span className="ml-auto text-[12px] uppercase tracking-[.18em] text-mute">
                    {String(visible.length).padStart(2, '0')} proyectos
                </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((p, i) => (
                    <Card
                        key={i}
                        image={p.image}
                        title={p.title}
                        subTitle={p.subTitle}
                        pill={p.pill}
                        photoCount={p.photoCount}
                    />
                ))}
            </div>
        </section>
    );
};

export default Proyect;
