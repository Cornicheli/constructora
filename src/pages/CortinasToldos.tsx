import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { CardToldosDetail } from '@/components/card/CardToldosDetail';
import { ContentSection } from '@/components/ContentSection';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import { arrayCortinasToldos } from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

export const CortinasToldos = () => {
    return (
        <div>
            <CardHomeCortinas
                photoHome={''}
                altPhotoHome={'Roller Design'}
                title={'Roller Design'}
                description={
                    'Una solución a medida para Tu Hogar y Espacios. Ofrecemos una amplia variedad de cortinas y toldos para personalizar y mejorar tus ambientes..'
                }
            />
            {/* <div className="flex flex-col items-center justify-center p-5 text-center">
                <p className='" py-1 text-lg tracking-wide text-[#545454] lg:text-3xl'>
                    Diversos sistemas de Roller Design{' '}
                    <span className="font-medium text-black"> HomeDeluxe</span>{' '}
                    se <br /> adaptan a una gran variedad de espacios,
                    arquitecturas, <br /> estilos y presupuestos.
                </p>
            </div>
            <DividerBlack /> */}

            <GridSection>
                {arrayCortinasToldos.map((item: any) => (
                    <CardToldosDetail
                        photo={item.photo}
                        altPhoto={item.altPhoto}
                    />
                ))}
            </GridSection>
            <ContentSection
                title={'Toldos'}
                description={
                    'Sistema de protección solar para balcones, galerías, ventanas y frente de locales comerciales. Podes elegir toldos de brazos invisibles, punto recto, y toldo tijera. '
                }
                subDescription={
                    'Son toldos de exterior  fáciles de instalar y requieren poco mantenimiento.'
                }
                textDescription={
                    'Enviamos toldos a todo el país y brindamos servicio de instalación en Buenos Aires'
                }
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />
            <Footer />
        </div>
    );
};
