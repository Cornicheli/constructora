import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { ContentSection } from '@/components/ContentSection';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import {
    arrayCortinasRoller,
    arrayCortinasSistemaDoble,
} from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

export const CortinaSistemaDoble = () => {
    return (
        <div>
            <CardHomeCortinas
                photoHome={''}
                altPhotoHome={'Roller Design'}
                title={'Roller Design'}
                description={
                    'Con estilo y elegancia, nuestras cortinas te permiten un efectivo'
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
                {arrayCortinasSistemaDoble.map(item => (
                    <CardCortinasDetail
                        photo={item.photo}
                        altPhoto={item.photo}
                        key={item.id}
                    />
                ))}
            </GridSection>
            <ContentSection
                title={'Sunscreen'}
                description={
                    'Una opción estética, moderna, funcional y práctica para personalizar espacios y regular la luz natural y la privacidad. Con tan solo deslizar las telas en posición, se puede disfrutar de una vista despejada y abundante entrada de luz natural, o bien obtener total privacidad y oscuridad.'
                }
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />
            <Footer />
        </div>
    );
};
