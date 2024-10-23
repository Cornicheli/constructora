import React from 'react';
import '../style/footer.css';
import image from '../assets/images.png';
import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { MdSmartphone } from 'react-icons/md';
import { facebook, instagram, whatsapp } from '../assets/icon';
import { CardFooter } from './card/CardFooter';

const Footer: React.FC = () => {
    return (
        <div className="header" id="footer">
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto">
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x="60"
                        y="0"
                        fill="rgba(255,255,255,0.7)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="60"
                        y="3"
                        fill="rgba(255,255,255,0.5)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="60"
                        y="5"
                        fill="rgba(255,255,255,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="60" y="7" fill="#fff" />
                </g>
            </svg>
            <div className="inner-header relative z-10 flex flex-wrap items-center justify-evenly">
                <div className="z-10 my-5 flex w-72 flex-col items-center justify-center">
                    <div className="h-36 w-72">
                        <img
                            className="h-full w-full rounded-full bg-cover"
                            src={image}
                        />
                    </div>
                    <h3 className="text-center text-lg font-semibold text-[#030608]">
                        Constructora especializada en la construcción de
                        viviendas y piscinas industrializadas
                    </h3>
                </div>
                <div className="z-10 my-5 flex w-[300px] flex-col items-center justify-center">
                    <section>
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
                    </section>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <CardFooter
                            url={
                                'https://www.facebook.com/constructorahomedeluxe/'
                            }
                            image={facebook}
                            alt={'link facebook'}
                        />
                        <CardFooter
                            url={
                                'https://www.instagram.com/constructorahomedeluxe'
                            }
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
                <div className="z-10 my-5 flex w-72 flex-col items-center justify-center">
                    <p className="mb-2 text-lg font-semibold text-[#030608]">
                        Nos ubicamos en Berazategui centro, Prov. Bs As.
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419512.4122877679!2d-58.70162527817395!3d-34.76967881954899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f1029b21ec7%3A0xcd3bcc3bd993eaca!2sBerazategui%20centro!5e0!3m2!1ses!2sar!4v1706205807964!5m2!1ses!2sar"
                        style={{
                            border: 0,
                            width: '300px',
                            height: '160px',
                            borderRadius: '5px',
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
