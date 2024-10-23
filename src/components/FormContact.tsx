import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { MdSmartphone } from 'react-icons/md';
import { facebook, instagram, whatsapp } from '../assets/icon';
import { CardFooter } from './card/CardFooter';
import React from 'react';

const FormContact = () => {
    const handleEventForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
    };
    console.log(handleEventForm);

    return (
        <section className="mt-52 inline-grid h-screen w-full grid-flow-row grid-cols-1 md:grid-cols-2">
            <div className="mx-auto flex flex-col px-5 py-12 sm:px-4 md:px-0">
                <h2 className="mt-4 pb-2 text-4xl font-semibold text-black">
                    Contacto
                </h2>
                <div className="flex flex-row items-center">
                    <MdAlternateEmail />
                    <h3 className="my-2 ml-2 text-lg font-semibold text-[#030608]">
                        Email:constructorahomedeluxe@gmail.com
                    </h3>
                </div>
                <div className="flex flex-row items-center">
                    <MdSmartphone />
                    <h3 className="my-2 ml-1 text-lg font-semibold text-[#030608]">
                        Tel: +54 11 36821653
                    </h3>
                </div>
                <div className="flex flex-row items-center">
                    <IoLocationSharp />
                    <h3 className="my-2 ml-2 text-lg font-semibold text-[#030608]">
                        Berazategui, Calle 5 4340
                    </h3>
                </div>
                <div className="flex flex-row items-center">
                    <MdWatchLater />
                    <h3 className="my-2 ml-2 text-lg font-semibold text-[#030608]">
                        Lunes a Viernes de 9 a 18 hs.
                    </h3>
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
            <div className="relative mx-auto w-full max-w-7xl items-center bg-white px-5 py-12 md:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                    <div className="flex flex-col">
                        <div>
                            <h2 className="pb-2 text-4xl font-semibold text-black">
                                Envia tu consulta
                            </h2>
                        </div>
                    </div>
                    <form onChange={handleEventForm}>
                        <input
                            value="https://jamstacker.studio/thankyou"
                            type="hidden"
                            name="_redirect"
                        />
                        <div className="mt-4 space-y-6">
                            <div className="col-span-full">
                                <label className="mb-3 block text-sm font-medium text-gray-600">
                                    {' '}
                                    Tu nombre{' '}
                                </label>
                                <input
                                    type="email"
                                    name="nombre"
                                    placeholder="Nombre"
                                    className="block w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="mb-3 block text-sm font-medium text-gray-600">
                                    {' '}
                                    Email{' '}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@gmail.com"
                                    className="block w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="mb-3 block text-sm font-medium text-gray-600">
                                    {' '}
                                    Consulta{' '}
                                </label>
                                <textarea
                                    name="consulta"
                                    placeholder="Describa su consulta"
                                    className="block h-40 w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-full">
                                <button
                                    type="submit"
                                    className="nline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                                    {' '}
                                    Enviar su consulta{' '}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormContact;
