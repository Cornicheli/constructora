import CardModels from '../components/CardModels';
import Footer from '../components/Footer';
import CarrouselMultiPisci from '../components/carrousel/CarrouselMultiPisci';
import '../style/card.css';
import CarrouselPisci from '../components/carrousel/CarrouselPisci';
import cascadaPiscina from '../assets/cascadaPiscina.mp4';
import { WhatsappChat } from '../components/WhatsappChat';

const Piscinas = () => {
    return (
        <span id="piscinas" className="relative">
            <CarrouselPisci />

            <main
                className="flex h-auto w-full flex-col flex-wrap items-center justify-center py-3 xl:flex-row"
                id="aboutus">
                <figure className="h-[500px] w-[350px] py-4 lg:h-[650px] lg:w-[750px]">
                    <video
                        className="h-full w-full rounded-xl bg-cover"
                        src={cascadaPiscina}
                        autoPlay
                        loop
                        muted
                        controls={false}
                    />
                </figure>
                <div className="grid grid-cols-1 grid-rows-1">
                    <section className="m-5 lg:ml-20 lg:w-[600px]">
                        <p className="my-4 text-xl font-bold text-[#1b1b1cab]">
                            Quiénes somos{' '}
                        </p>
                        <h1 className="py-4 text-2xl font-semibold text-[#0E2230]">
                            Somos una empresa dedicada a la construcción de
                            piscinas, diseño y ejecución.
                        </h1>
                        <h3 className="my-4 text-lg">
                            Con mas de{' '}
                            <span className="font-bold">15 años</span> de
                            experiencia en el rubro te brindamos responsabilidad
                            y cumplimiento en la realización de tu proyecto
                            soñado. Contamos con mas de 200 obras realizadas en
                            AMBA y Cordoba.
                            <br /> Contamos con un equipo de profesionales
                            altamente calificados y las herramientas necesarias
                            para lograr la piscina de tus sueños.
                        </h3>
                    </section>
                </div>
            </main>
            <CarrouselMultiPisci />
            <CardModels />
            <Footer />
            <WhatsappChat />
        </span>
    );
};

export default Piscinas;
