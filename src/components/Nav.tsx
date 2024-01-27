import { useState } from 'react';
import menu from '../assets/menu.png';
import image from '../assets/images.png';
import { Link } from 'react-router-dom';

const Nav = () => {

      const [open, setOpen] = useState(false);

      return (
            <header className='shadow-md w-full top-0 fixed z-10 left-0 '>
                  <div className='flex items-center justify-between bg-white'>
                        <span className='h-26 w-72'>
                              <img className='w-72 h-full bg-cover' src={image} alt="Logo" />
                        </span>
                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3.5 cursor-pointer xl:hidden '>
                              <button onClick={() => setOpen(!open)} className='lg:hidden block focus:outline-none'>
                                    <img className='w-10 h-10' src={menu} alt="Menu" />
                              </button>
                        </div>
                        <ul className={`lg:flex lg:items-center lg:pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                              <li className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                    <Link className='text-[#030608]' to={'/'}>
                                          Construcciones
                                    </Link>
                              </li>
                              <li className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                    <a className='text-[#030608]' href="#aboutus">Sobre Nosotros</a>
                              </li>
                              <li className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                    <a className='text-[#030608]' href="#tipologias">Tipologias</a>
                              </li>
                              <li className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                    <a className='text-[#030608]' href="#footer">Contacto</a>
                              </li>
                              <li className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                    <Link className='text-[#030608]' to={'/piscinas'}>
                                          Piscinas
                                    </Link>
                              </li>
                        </ul>
                  </div>
            </header>
      );
};

export default Nav;
