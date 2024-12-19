import { CardCortinasDetail } from '@/components/card/CardCortinasDetail';
import { CardHomeCortinas } from '@/components/card/CardHomeCortinas';
import { ContentSection } from '@/components/ContentSection';
import { DividerBlack } from '@/components/DividerBlack';
import Footer from '@/components/Footer';
import { arrayCortinasSunscreen } from '@/constant/ArrayCortinas';
import { GridSection } from '@/components/GridSection';

export const CortinasSunscreen = () => {
    const ArrayCortinasBandas = [
        {
            id: 1,
            title: 'Cortinas Roller',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
        {
            id: 2,
            title: 'Cortinas Bandas Verticales',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
        {
            id: 3,
            title: 'Cortinas Parcelle',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
        {
            id: 4,
            title: 'Cortinas Venecia',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
        {
            id: 5,
            title: 'Paneles Orientales',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
        {
            id: 6,
            title: 'Paneles Europeo',
            photo: 'https://www.rappachiani.com.ar/img/homepage/toldos-desk.jpg',
        },
    ];

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
                    Las{' '}
                    <span className="font-medium text-black">
                        {' '}
                        Cortinas Roller o de enrollar{' '}
                    </span>
                    sistemas de Roller Design se imponen por su calidad, simple{' '}
                    <br /> funcionamiento y su facilidad en la implementación de
                    mecanismos <br /> de automatización.
                </p>
            </div>
            <DividerBlack />
            <GridSection>
                {arrayCortinasSunscreen.map(item => (
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
                    'Las  roller Sunscreen permiten el paso de la luz natural mientras ofrecen protección contra los rayos UV y una vista al exterior . Una sunscreen al 5% implica que bloquea el 95% de la luz solar. Excelente opción para iluminar sin exposición al daño que los rayos UV pueden causar en la piel y en los objetos del hogar como muebles, tapizados y alfombras.'
                }
                buttonText="Solicita tu presupuesto..."
                onButtonClick={() => console.log('Presupuesto solicitado')}
            />

            <Footer />
        </div>
    );
};
