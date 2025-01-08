import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import { arrayCortinasCubrePileta } from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';
import { ContentSection } from '@/components/ContentSection';

export const CortinasCubrePileta = () => {
    return (
        <div>
            <CardHomeCortinas
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
                {arrayCortinasCubrePileta.map((item: any) => (
                    <CardCortinasDetail
                        photo={item.photo}
                        altPhoto={item.photo}
                        key={item.id}
                    />
                ))}
            </GridSection>
            <ContentSection
                title={'Cubre Piletas'}
                description={
                    'Es una lona protectora resistente. Mantiene el agua limpia todo el año, disminuye el uso de químicos en la piscina, y es segura para mascotas y niños en caso de una caída accidental, soporta el peso de una persona. '
                }
                subDescription={
                    'La lona es de pvc con un entramado de poliéster antidesgarro, de alta resistencia de 500 micrones, la que habitualmente usan los camiones.'
                }
                textDescription={
                    'Colocamos ojales de bronce para evitar la oxidación y que estos terminen manchando las bordes de la piscina.'
                }
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />
            <Footer />
        </div>
    );
};
