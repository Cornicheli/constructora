import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLink = (isActive: boolean) =>
    `relative pb-1 text-[14px] font-medium transition hover:text-navy ${isActive ? 'text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-navy' : 'text-ink'}`;

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { pathname, hash } = useLocation();
    const navigate = useNavigate();

    const goToSection = (sectionHash: string) => {
        if (pathname !== '/') {
            navigate('/' + sectionHash);
        } else {
            navigate('/' + sectionHash, { replace: true });
            const el = document.querySelector(sectionHash);
            el?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isHome = pathname === '/' && !hash;
    const isPiscinas = pathname === '/piscinas';
    const isAbout = hash === '#aboutus';
    const isTipo = hash === '#tipologias';
    const isContact = pathname === '/contact';

    return (
        <header className="fixed top-0 z-50 w-full border-b border-line saturate-150 backdrop-blur-[12px]" style={{ background: 'rgba(250,250,247,.86)' }}>
            <div className="mx-auto flex items-center justify-between px-10 py-[18px]" style={{ maxWidth: 1320 }}>
                {/* Logo mark */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-[38px] w-[38px] items-center justify-center bg-navy">
                        <span className="font-serif text-[22px] italic leading-none tracking-[-0.02em] text-white">
                            H
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <div className="text-[17px] font-bold tracking-[0.14em] text-navy">
                            HOME
                            <span className="ml-0.5 font-light tracking-[0.22em]">
                                DELUXE
                            </span>
                        </div>
                        <div className="mt-[5px] text-[9.5px] font-medium uppercase tracking-[0.32em] text-mute">
                            Empresa Constructora
                        </div>
                    </div>
                </Link>

                {/* Desktop links */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <Link className={navLink(isHome)} to="/">
                        Inicio
                    </Link>
                    <Link className={navLink(isPiscinas)} to="/piscinas">
                        Piscinas
                    </Link>
                    <button
                        className={`cursor-pointer ${navLink(isAbout)}`}
                        onClick={() => goToSection('#aboutus')}>
                        Sobre Nosotros
                    </button>
                    <button
                        className={`cursor-pointer ${navLink(isTipo)}`}
                        onClick={() => goToSection('#tipologias')}>
                        Tipologías
                    </button>
                    <Link className={navLink(isContact)} to="/contact">
                        Contacto
                    </Link>
                </nav>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/contact"
                        className="relative hidden items-center gap-2.5 rounded-full bg-navy px-[18px] py-2.5 text-[13px] font-semibold tracking-[0.02em] text-white transition hover:bg-[#07172a] lg:inline-flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        Cotizar proyecto
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="flex flex-col gap-1.5 p-1 lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menú">
                        <div
                            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
                        />
                        <div
                            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`}
                        />
                        <div
                            className={`h-0.5 w-6 bg-ink transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? 'max-h-64' : 'max-h-0'}`}>
                <nav className="flex flex-col gap-1 border-t border-line bg-white/95 px-6 py-4">
                    <Link
                        className="py-2 text-[14px] font-medium text-ink transition hover:text-navy"
                        to="/"
                        onClick={() => setOpen(false)}>
                        Inicio
                    </Link>
                    <Link
                        className="py-2 text-[14px] font-medium text-ink transition hover:text-navy"
                        to="/piscinas"
                        onClick={() => setOpen(false)}>
                        Piscinas
                    </Link>
                    <button
                        className="cursor-pointer py-2 text-left text-[14px] font-medium text-ink transition hover:text-navy"
                        onClick={() => { setOpen(false); goToSection('#aboutus'); }}>
                        Sobre Nosotros
                    </button>
                    <button
                        className="cursor-pointer py-2 text-left text-[14px] font-medium text-ink transition hover:text-navy"
                        onClick={() => { setOpen(false); goToSection('#tipologias'); }}>
                        Tipologías
                    </button>
                    <Link
                        className="py-2 text-[14px] font-medium text-ink transition hover:text-navy"
                        to="/contact"
                        onClick={() => setOpen(false)}>
                        Contacto
                    </Link>
                    <Link
                        to="/contact"
                        className="mt-2 inline-flex w-fit rounded-full bg-navy px-5 py-2 text-sm font-medium text-paper transition hover:bg-navy-2"
                        onClick={() => setOpen(false)}>
                        Cotizar proyecto
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
