import lineaClasica from '../assets/image/typologies/clasica.jpeg';
import lineaModerna from '../assets/image/typologies/moderna.jpeg';
import lineaPremium from '../assets/image/typologies/premium.jpeg';
import { CardTypologies } from './card/CardTypologie';

const Typologies = () => {
    return (
        <main className="relative flex flex-col items-center justify-center bg-[#0E2230]">
            <div className="absolute -top-20" id="tipologias" />
            <div className="flex w-3/4 flex-col items-center justify-center">
                <h1 className="my-4 text-center text-4xl font-bold text-white">
                    Tipologías
                </h1>
                <p className="mt-1 text-center text-lg font-medium text-white">
                    Ofrecemos tipologías estandarizadas de 1,2 y 3 dormitorios
                    en una sola planta, en sus líneas clásicas, modernas y
                    premium.
                </p>
                <p className="mt-1 text-center text-lg font-medium text-white">
                    Disponemos de terminaciones avanzadas: tomados de juntas
                    exterior con revoque plástico exterior aplicado
                </p>
                <p className="mt-1 text-center text-lg font-medium text-white">
                    Contamos con departamento especializado para el desarrollo
                    de proyectos a medida.
                </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-16 py-10">
                <CardTypologies image={lineaClasica} title={'Línea Clásica'} />
                <CardTypologies image={lineaModerna} title={'Línea Moderna'} />
                <CardTypologies image={lineaPremium} title={'Línea Premium'} />
            </div>
        </main>
    );
};

export default Typologies;
