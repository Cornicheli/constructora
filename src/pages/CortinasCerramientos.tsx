import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { ContentSection } from '@/components/ContentSection';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import {
    arrayCortinasCerramiento,
    arrayCortinasRoller,
} from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

export const CortinasCerramientos = () => {
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
            <div className="flex flex-col items-center justify-center p-5 text-center">
                <p className='" py-1 text-lg tracking-wide text-[#545454] lg:text-3xl'>
                    Diversos sistemas de Roller Design{' '}
                    <span className="font-medium text-black"> HomeDeluxe</span>{' '}
                    se <br /> adaptan a una gran variedad de espacios,
                    arquitecturas, <br /> estilos y presupuestos.
                </p>
            </div>
            <DividerBlack />
            <GridSection>
                {arrayCortinasCerramiento.map(item => (
                    <CardCortinasDetail
                        photo={item.photo}
                        altPhoto={item.photo}
                        key={item.id}
                    />
                ))}
            </GridSection>
            <ContentSection
                title={'Cerramientos'}
                description={
                    'Sumá un ambiente completamente cerrado a tu casa o departamento. Sin perder visibilidad, este tipo de cerramientos verticales protegen tu espacio al aire libre de vientos fuertes y de bajas o altas temperaturas.'
                }
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />
            <Footer />
        </div>
    );
};
