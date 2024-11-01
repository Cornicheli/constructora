import CardModels from '../components/CardModels';
import Footer from '../components/Footer';
import CarrouselMultiPisci from '../components/carrousel/CarrouselMultiPisci';
import '../style/card.css';
import CarrouselPisci from '../components/carrousel/CarrouselPisci';
import quienesSomos from '../assets/quienesSomos.jpeg';
import { WhatsappChat } from '../components/WhatsappChat';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Piscinas = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <span id="piscinas" className="relative">
            {/* <Slider {...settings}>
                {ImgPiscinas.map((piscina, index) => (
                    <Carrousel
                        key={index}
                        url={piscina.url}
                        alt={piscina.alt}
                    />
                ))}
            </Slider> */}
            <CarrouselPisci />
            <main
                className="flex h-auto w-full flex-col flex-wrap items-center justify-center py-3 xl:flex-row"
                id="aboutus">
                {/* <figure className="h-[400px] w-[250px]  lg:h-[650px] lg:w-[750px]"> */}
                <img
                    className="h-[400px] w-[250px] rounded-lg lg:h-[400px] lg:w-[500px]"
                    src={quienesSomos}
                    alt="Design"
                />
                {/* </figure> */}
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
