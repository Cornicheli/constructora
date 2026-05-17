import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import piscina11 from '../../assets/image/carrousel/piscinas/piscina12.jpg';
import piscina2 from '../../assets/image/carrousel/piscinas/piscina2.webp';
// import piscina3 from '../../assets/image/carrousel/piscinas/piscina3.jpg'
import piscina4 from '../../assets/image/carrousel/piscinas/piscina4.jpg';
import piscina01 from '../../assets/Carrusel/piscina01.jpg';
import piscina5 from '../../assets/image/carrousel/piscinas/piscina5.webp';

const CarrouselPisci = () => {
    return (
        <Carousel>
            <Carousel.Item
                interval={1000}
                className="lg:h-[500px] xl:h-[800px]">
                <img
                    className="h-full w-full object-cover"
                    src={piscina11}
                    alt="Piscina ejecutiva con iluminación LED nocturna"
                />
                <Carousel.Caption>
                    <h3>Piscinas de Alta Calidad</h3>
                    <p>
                        Diseños personalizados para tu espacio ideal
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} className="lg:h-[500px] xl:h-[800px]">
                <img
                    className="h-full w-full object-cover"
                    src={piscina2}
                    alt="Vista aérea de piscina con paisajismo completo"
                />
                <Carousel.Caption>
                    <h3>Más de 15 Años de Experiencia</h3>
                    <p>
                        200+ proyectos realizados en AMBA y Córdoba
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[800px]">
                <img
                    className="h-full w-full object-cover"
                    src={piscina01}
                    alt="Piscina moderna con deck de madera y cascada"
                />
                <Carousel.Caption>
                    <h3>Construcción Profesional</h3>
                    <p>
                        Equipos altamente calificados y tecnología de punta
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[800px]">
                <img
                    className="h-full w-full object-cover"
                    src={piscina4}
                    alt="Piscina rectangular con revestimiento cerámico azul"
                />
                <Carousel.Caption>
                    <h3>Diseños Modernos</h3>
                    <p>
                        Piscinas adaptadas a tu estilo de vida
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[800px]">
                <img
                    className="h-full w-full object-cover"
                    src={piscina5}
                    alt="Piscina de hormigón en proceso de construcción"
                />
                <Carousel.Caption>
                    <h3>De la Idea a la Realidad</h3>
                    <p>
                        Convertimos tu proyecto soñado en realidad
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarrouselPisci;
