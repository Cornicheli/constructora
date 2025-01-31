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
                <h1 className="text-center text-4xl font-bold text-white">
                    Quienes somos
                </h1>
                <p className="mt-10 w-3/4 text-center text-lg font-medium text-white">
                    Somos una Empresa Constructora especializada en proyectos de
                    vivienda. Contamos con mas de 15 años de experiencia en el
                    rubro, sumando mas de 120.000 m2 de obras realizadas.
                    Llevamos a cabo diversos tipos de proyectos en variadas
                    condiciones y terrenos, en todo el país.
                    <span className="font-bold">
                        {' '}
                        Diseñamos, Proyectamos Y Construimos, la casa de tus
                        sueños!!
                    </span>
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
