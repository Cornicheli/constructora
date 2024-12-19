import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import { arrayCortinasCubrePileta } from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

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
                {arrayCortinasCubrePileta.map((item: any) => (
                    <CardCortinasDetail
                        photo={item.photo}
                        altPhoto={item.photo}
                        key={item.id}
                    />
                ))}
            </GridSection>
            <Footer />
        </div>
    );
};
