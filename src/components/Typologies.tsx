import lineaClasica from '../assets/image/typologies/clasica.jpeg';
import lineaModerna from '../assets/image/typologies/moderna.jpeg';
import lineaPremium from '../assets/image/typologies/premium.jpeg';
import { CardTypologies } from './card/CardTypologie';

const Typologies = () => {
    return (
        <main className="relative flex flex-col items-center justify-center bg-[#0E2230]">
            <div className="absolute -top-20" id="tipologias" />
            <div className="flex w-3/4 flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold text-white">
                    Tipologías
                </h1>
                <p className="mt-5 text-center text-lg font-medium text-white">
                    La empresa actualmente ofrece tipologías estandarizadas de
                    1, 2 y 3 dormitorios, en una sola planta, en sus líneas
                    Clásica, Moderna y Premium. Además, dispone de un
                    departamento especializado para el desarrollo de proyectos a
                    medida.
                </p>
                <p className="mt-10 text-center text-lg font-medium text-white">
                    Disponemos también de terminaciones avanzadas: tomado de
                    juntas interior / exterior con revoque plástico exterior
                    aplicado.
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
