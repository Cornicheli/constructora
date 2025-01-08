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
                        <h1 className="py-2 text-2xl font-semibold text-[#0E2230]">
                            Con más de 15 años de experiencia en la construcción
                            de piscinas
                        </h1>
                        <div className="my-2 flex flex-col justify-center">
                            <p className="my-1 text-lg">
                                En Home Deluxe ofrecemos un servicio integral
                                que abarca desde los planos y diseños hasta la
                                instalación final de piscinas en todo tipo de
                                terrenos.
                            </p>
                            <p className="my-1 text-lg">
                                Nos aseguramos de que cada piscina sea
                                construida con los mejores materiales,
                                garantizando una estructura duradera, segura y
                                visualmente atractiva.
                            </p>
                            <p className="my-1 text-lg">
                                Construimos piscinas para uso residencial,
                                comercial o recreativo, proporcionando
                                soluciones personalizadas que se integran
                                perfectamente en su entorno, brindando 15 años
                                de garantía.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            {/* <CarrouselMultiPisci /> */}
            <CardModels />
            <Footer />
            <WhatsappChat />
        </span>
    );
};

export default Piscinas;
