import {
    AboutUs,
    Proyect,
    Typologies,
    CarrouselConstru,
    CTABanner,
    Footer,
    WhatsappChat,
} from '../components';
import SEO from '../components/SEO';

const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Home Deluxe Constructora',
    description:
        'Empresa constructora con más de 15 años de experiencia en diseño, proyección y construcción de viviendas y piscinas en AMBA y Córdoba.',
    url: 'https://homedeluxe.com.ar',
    telephone: '+54-11-36821653',
    email: 'constructorahomedeluxe@gmail.com',
    foundingDate: '2009',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 5 4340',
        addressLocality: 'Berazategui',
        addressRegion: 'Buenos Aires',
        addressCountry: 'AR',
    },
    areaServed: ['Buenos Aires', 'AMBA', 'Córdoba'],
    sameAs: [
        'https://www.facebook.com/constructorahomedeluxe/',
        'https://www.instagram.com/constructorahomedeluxe',
    ],
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
    },
};

const Constructora = () => {
    return (
        <>
            <SEO
                title="Diseño y Construcción de Viviendas en Buenos Aires"
                description="Empresa constructora con más de 15 años de experiencia y 120.000 m² de obras realizadas. Diseñamos, proyectamos y construimos en AMBA y Córdoba."
                canonical="/"
                jsonLd={localBusinessJsonLd}
            />
            <CarrouselConstru />
            <AboutUs />
            <Proyect />
            <Typologies />
            <CTABanner />
            <Footer />
            <WhatsappChat />
        </>
    );
};

export default Constructora;
