import { CardAbout } from './card/CardAbout';
import {
    asesoramiento,
    calculo,
    experiencia,
    direccion,
    inversion,
} from '../assets/image/about';

const AboutUs = () => {
    return (
        <main className="relative flex flex-col items-center justify-center bg-[#0E2230] py-10">
            <div className="absolute -top-20" id="aboutus" />
            <div className="h-min-64 flex flex-col items-center justify-center">
                <p className="mt-10 w-3/4 text-center text-lg font-medium text-white">
                    Somos una empresa especializada en proyectos de viviendas.
                    contamos con más de 15 años de experiencia en el rubro,
                    sumando más de 120.000 m2 de obras realizadas. llevamos a
                    cabo diversos tipos de proyectos en variadas condiciones y
                    terrenos, en todo el país.
                    <br /> ¡Diseñamos, proyectamos y construimos la casa de tus
                    sueños!
                </p>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-1 lg:grid-cols-5">
                <CardAbout
                    title={'PROYECTO'}
                    subtitle={'Y DIRECCIÓN'}
                    image={asesoramiento}
                    alt={'icon dirreccion'}
                />
                <CardAbout
                    image={calculo}
                    title={'CÁLCULO'}
                    subtitle={'ESTRUCTURAL'}
                    alt={'icon calculo'}
                />
                <CardAbout
                    image={experiencia}
                    title={'PROYECTOS DE'}
                    subtitle={'INVERSIÓN'}
                    alt={'icon proyecto'}
                />
                <CardAbout
                    image={direccion}
                    title={'ASESORAMIENTO'}
                    subtitle={'TÉCNICO'}
                    alt={'icon asesoramiento'}
                />
                <CardAbout
                    image={inversion}
                    title={'EXPERIENCIA'}
                    subtitle={'PROFESIONAL'}
                    alt={'icon experiencia'}
                />
            </div>
        </main>
    );
};

export default AboutUs;
