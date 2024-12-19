import { useState } from 'react';
import menu from '../assets/icon/menu.png';
import image from '../assets/images.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-20 w-full shadow-md">
            <div className="flex items-center justify-between bg-white">
                <img className="h-24 w-60 pl-3" src={image} alt="Logo" />
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-3.5 cursor-pointer text-3xl xl:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="block focus:outline-none lg:hidden">
                        <img className="h-10 w-10" src={menu} alt="Menu" />
                    </button>
                </div>

                <ul
                    className={`absolute left-0 right-0 z-[-1] w-full bg-white pl-9 pr-3 transition-all duration-500 ease-in lg:static lg:z-auto lg:flex lg:w-auto lg:items-center lg:pb-0 lg:pl-0 ${
                        open ? 'top-20' : 'top-[-490px]'
                    }`}>
                    <li
                        className="my-7 text-xl lg:my-0"
                        onClick={() => setOpen(!open)}>
                        <Link className="text-[#030608]" to={'/'}>
                            Inicio
                        </Link>
                    </li>
                    <li
                        className="my-7 text-xl lg:my-0 lg:ml-6"
                        onClick={() => setOpen(!open)}>
                        <Link
                            className="flex flex-row items-center text-[#030608]"
                            to={'/piscinas'}>
                            Piscinas
                        </Link>
                    </li>
                    <li
                        className="my-7 text-xl lg:my-0 lg:ml-6"
                        onClick={() => setOpen(!open)}>
                        <Link
                            className="flex flex-row items-center text-[#030608]"
                            to={'/cortinas'}>
                            Cortinas
                        </Link>
                    </li>
                    <li
                        className="my-7 text-xl lg:my-0 lg:ml-6"
                        onClick={() => setOpen(!open)}>
                        <a
                            className="cursor-pointer text-[#030608]"
                            href="#aboutus">
                            Sobre Nosotros
                        </a>
                    </li>
                    <li
                        className="my-7 text-xl lg:my-0 lg:ml-6"
                        onClick={() => setOpen(!open)}>
                        <a
                            className="cursor-pointer text-[#030608]"
                            href="#tipologias">
                            Tipologias
                        </a>
                    </li>
                    <li
                        className="my-7 text-xl lg:my-0 lg:ml-6"
                        onClick={() => setOpen(!open)}>
                        <Link
                            className="flex flex-row items-center text-[#030608]"
                            to={'/contact'}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;
