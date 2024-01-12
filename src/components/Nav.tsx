import { useState } from 'react'
import menu from '../assets/menu.png'
import image from '../assets/images.png'


const Nav = () => {
      const Links = [
            { name: "Construcciones ", link: "#carrousel" },
            { name: "Sobre Nosotros", link: "#aboutus" },
            { name: "Tipologias", link: "#tipologias" },
            { name: "Proyectos", link: "#proyect" },
            { name: "Contacto", link: "#footer" },
      ];
      const [open, setOpen] = useState(false);
      return (
            <div className='shadow-md w-full top-0 fixed z-10 left-0 '>
                  <div className='flex items-center justify-between bg-white '>
                        <span className='h-26 w-72'>
                              <img className='w-72 h-full bg-cover' src={image} />
                        </span>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3.5 cursor-pointer xl:hidden '>
                              <button onClick={() => setOpen(!open)} className='lg:hidden block focus:outline-none'>
                                    <img
                                          className='w-10 h-10'
                                          src={menu}
                                    />

                              </button>
                        </div>

                        <ul className={`lg:flex lg:items-center lg:pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                              {
                                    Links.map((link) => (
                                          <li key={link.name} className='lg:ml-6 text-xl lg:my-0 my-7' onClick={() => setOpen(!open)}>
                                                <a href={link.link} className='text-[#030608]'>{link.name}</a>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      )
}

export default Nav