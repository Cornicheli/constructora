import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-line bg-paper-2" style={{ marginTop: 80 }}>
            <div
                className="mx-auto"
                style={{ maxWidth: 1320, padding: '70px 40px 28px' }}>
                <div
                    className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
                    style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
                    {/* Col 1: Logo + descripción */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex h-[38px] w-[38px] items-center justify-center bg-navy">
                                <span className="font-serif text-[22px] italic leading-none tracking-[-0.02em] text-white">
                                    H
                                </span>
                            </div>
                            <div>
                                <div className="text-[17px] font-bold tracking-[0.14em] text-navy">
                                    HOME
                                    <span className="ml-0.5 font-light tracking-[0.22em]">
                                        DELUXE
                                    </span>
                                </div>
                                <div className="mt-[3px] text-[9.5px] font-medium uppercase tracking-[0.32em] text-mute">
                                    Empresa Constructora
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-mute">
                            Constructora especializada en la construcción de
                            viviendas y piscinas industrializadas.
                        </p>
                    </div>

                    {/* Col 2: Navegación */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-mute">
                            Navegación
                        </p>
                        <Link
                            to="/"
                            className="text-[14px] font-medium text-ink transition hover:text-navy">
                            Inicio
                        </Link>
                        <Link
                            to="/piscinas"
                            className="text-[14px] font-medium text-ink transition hover:text-navy">
                            Piscinas
                        </Link>
                        <a
                            href="#aboutus"
                            className="cursor-pointer text-[14px] font-medium text-ink transition hover:text-navy">
                            Sobre Nosotros
                        </a>
                        <a
                            href="#tipologias"
                            className="cursor-pointer text-[14px] font-medium text-ink transition hover:text-navy">
                            Tipologías
                        </a>
                        <Link
                            to="/contact"
                            className="text-[14px] font-medium text-ink transition hover:text-navy">
                            Contacto
                        </Link>
                    </div>

                    {/* Col 3: Contacto */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-mute">
                            Contacto
                        </p>
                        <span className="text-[14px] text-mute">
                            <em
                                className="font-serif italic"
                                style={{ marginRight: 4 }}>
                                @
                            </em>
                            constructorahomedeluxe@gmail.com
                        </span>
                        <span className="text-[14px] text-mute">
                            +54 11 36821653
                        </span>
                        <span className="text-[14px] text-mute">
                            Lunes a Viernes 9 a 18 hs.
                        </span>
                    </div>

                    {/* Col 4: Ubicación */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[.28em] text-mute">
                            Ubicación
                        </p>
                        <span className="text-[14px] text-mute">
                            Berazategui, Calle 5 4340
                        </span>
                        <span className="text-[14px] text-mute">
                            Prov. Buenos Aires
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-line" style={{ marginTop: 40 }}>
                <div
                    className="mx-auto flex flex-col items-center justify-between gap-2 px-10 py-4 sm:flex-row"
                    style={{ maxWidth: 1320 }}>
                    <p className="text-xs text-mute">
                        © {new Date().getFullYear()} Home Deluxe Constructora.
                        Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/constructorahomedeluxe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-mute transition hover:border-navy hover:text-navy">
                            <FaFacebook size={14} />
                        </a>
                        <a
                            href="https://www.instagram.com/constructorahomedeluxe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-mute transition hover:border-navy hover:text-navy">
                            <FaInstagram size={14} />
                        </a>
                        <a
                            href="http://wa.me/541136821653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-mute transition hover:border-navy hover:text-navy">
                            <FaWhatsapp size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
