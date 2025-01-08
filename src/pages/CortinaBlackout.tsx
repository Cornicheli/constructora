import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { ContentSection } from '@/components/ContentSection';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import {
    arrayCortinasBlackout,
    arrayCortinasRoller,
} from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

export const CortinaBlackout = () => {
    return (
        <div>
            <CardHomeCortinas
                photoHome={''}
                altPhotoHome={'Roller Design'}
                title={'Roller Design'}
                description={
                    'Con estilo y elegancia, nuestras cortinas te permiten un efectivo'
                }
                subDescription={
                    'control solar y de la iluminación para tus ambientes'
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
                {arrayCortinasBlackout.map(item => (
                    <CardCortinasDetail
                        photo={item.photo}
                        altPhoto={item.photo}
                        key={item.id}
                    />
                ))}
            </GridSection>
            <ContentSection
                title="Blackout"
                description="Una solución única para quienes buscan privacidad total en
                sus espacios. Estas cortinas bloquean completamente la luz,
                proporcionando un ambiente oscuro ideal para dormitorios,
                salas de cine en casa o cualquier área donde se requiera
                privacidad total."
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />
            <Footer />
        </div>
    );
};
