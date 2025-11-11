import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { MdSmartphone } from 'react-icons/md';
import { facebook, instagram, whatsapp } from '../assets/icon';
import { CardFooter } from './card/CardFooter';
import { useState } from 'react';
import InputForm from './form/InputForm';
import InputTextareaForm from './form/InputTextareaForm';
import InputDropdown from './form/InputDropdown';
import Title from './paragraph/Title';
import TitleContact from './paragraph/TitleContact';
import AnchorForm from './form/AnchorForm';
import ButtonForm from './form/ButtonForm';

const FormContact = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const telefono = '541136821653';
    // const telefono = '541133758362';

    // Función para validar si el formulario está completo
    const isFormValid = () => {
        return (
            name.trim() !== '' &&
            location.trim() !== '' &&
            service.trim() !== '' &&
            message.trim() !== '' &&
            phoneNumber.trim() !== ''
        );
    };

    const mensajeCodificado = encodeURIComponent(
        `
        *Tipo de servicio: ${service}*
        Nombre: ${name}
        Teléfono: ${phoneNumber}
        Localidad: ${location}        
        ${' '}        
        ${message}
        `,
    );

    const linkWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    return (
        <section className="mt-52 inline-grid h-screen w-full grid-flow-row grid-cols-1 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-7xl items-center bg-white px-5 py-12 md:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                    <Title title={'Envia tu consulta'} />

                    <div className="mt-4 space-y-6">
                        <InputForm
                            type={String}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            name={'name'}
                            placeholder={'Nombre'}
                            title={'Nombre'}
                        />
                        <InputForm
                            type={String}
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            name={'location'}
                            placeholder={'Localidad'}
                            title={'Localidad'}
                        />

                        <InputForm
                            type={Number}
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            name={''}
                            placeholder={'Teléfono'}
                            title={'Teléfono'}
                        />

                        <InputDropdown
                            value={service}
                            onChange={e => setService(e.target.value)}
                            title={'Seleccione su servicio'}
                        />

                        <InputTextareaForm
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            name={'message'}
                            placeholder={'Consulta'}
                            title={'Haga su consulta'}
                        />

                        <div className="col-span-full">
                            {isFormValid() ? (
                                <AnchorForm
                                    title={'Envia su consulta'}
                                    href={linkWhatsApp}
                                />
                            ) : (
                                <ButtonForm />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex flex-col px-5 py-12 sm:px-4 md:px-0">
                <Title title={'Contacto'} />
                <div className="flex flex-row items-center">
                    <MdAlternateEmail />
                    <TitleContact
                        title={'Email:constructorahomedeluxe@gmail.com'}
                    />
                </div>
                <div className="flex flex-row items-center">
                    <MdSmartphone />
                    <TitleContact title={'Tel: +54 11 36821653'} />
                </div>
                <div className="flex flex-row items-center">
                    <IoLocationSharp />
                    <TitleContact title={'Berazategui, Calle 5 4340'} />
                </div>
                <div className="flex flex-row items-center">
                    <MdWatchLater />
                    <TitleContact title={' Lunes a Viernes de 9 a 18 hs.'} />
                </div>

                <div className="mt-3 flex flex-row items-center justify-center gap-10">
                    <CardFooter
                        url={'https://www.facebook.com/constructorahomedeluxe/'}
                        image={facebook}
                        alt={'link facebook'}
                    />
                    <CardFooter
                        url={'https://www.instagram.com/constructorahomedeluxe'}
                        image={instagram}
                        alt={'link instagram'}
                    />
                    <CardFooter
                        url={'http://wa.me/541136821653'}
                        image={whatsapp}
                        alt={'link whatsapp'}
                    />
                </div>
            </div>
        </section>
    );
};

export default FormContact;
