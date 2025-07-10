import '../style/footer.css';
import { Card } from '../components/card/Card';
import {
    house10,
    house11,
    house12,
    house13,
    house14,
    house18,
    house19,
    house22,
    hosue23,
} from '@/assets/image/house';

const projects = [
    { image: house18, title: 'La Faustina', subTitle: 'Casas De Campo' },
    { image: house10, title: 'Punta Perdíz', subTitle: 'Cariló' },
    { image: hosue23, title: 'Tres Pinos', subTitle: 'Villa de campo' },
    { image: house11, title: 'Escobar', subTitle: 'Av Los Lagos' },
    { image: house13, title: 'Canning', subTitle: 'La Alameda' },
    { image: house12, title: 'Nordelta', subTitle: 'Barrio Los Lagos' },
    { image: house22, title: 'Canning', subTitle: 'Los Jazmines' },
    { image: house19, title: 'Escobar', subTitle: 'Puertos Del Lago' },
    { image: house14, title: 'Nordelta', subTitle: 'Los Lagos' },
];

const Proyect = () => {
    return (
        <section className="relative" id="proyect">
            <div className="absolute -top-20" />
            <h1 className="pt-10 text-center text-4xl font-bold text-[#0E2230]">
                Proyectos
            </h1>
            {/* <div className="flex flex-row flex-wrap items-center justify-center gap-10 py-10"> */}
            <div className="grid grid-cols-1 content-start justify-items-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        subTitle={project.subTitle}
                    />
                ))}
            </div>
        </section>
    );
};

export default Proyect;
