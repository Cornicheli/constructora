import contact from '../json/contact.json'
import { IoLocationSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'


import image from '../assets/images.png'

const Footer = () => {

      return (
            <div
                  className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-3 md:grid-cols-1 bg-[#ffffffcd] justify-items-center items-center h-min-96"
                  id='footer'>
                  <div className="flex flex-col my-5 w-72 items-center justify-center">
                        <div className='h-32 w-72'>
                              <img className='w-80 h-28 bg-cover' src={image} />
                        </div>
                        <h3 className='text-black text-lg font-semibold text-center'>
                              Constructora especializada en la construcción de
                              viviendas y piscinas industrializadas
                        </h3>
                  </div>
                  <div className=" flex items-center flex-col my-5 w-[300px] h-60 justify-center">
                        {
                              contact.contact.map((item, index) =>
                                    <section key={index}>
                                          <div className='flex flex-row items-center'>
                                                <MdAlternateEmail />
                                                <h3 className='text-black text-lg my-2 ml-2 font-semibold'>Email: {item.email}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdSmartphone />
                                                <h3 className='text-black text-lg my-2 ml-1 font-semibold'>Tel: {item.cel}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <IoLocationSharp />
                                                <h3 className='ml-2 my-2 text-black text-lg font-semibold'>{item.address}</h3>
                                          </div>
                                          <div className='flex flex-row items-center'>
                                                <MdWatchLater />
                                                <h3 className='text-black text-lg ml-2 my-2 font-semibold'>{item.hours}</h3>
                                          </div>
                                    </section>
                              )
                        }
                  </div>
                  <div className=" flex items-center flex-col my-5 w-72 justify-center">
                        <h3 className='text-lg text-black underline text-center mb-8 border-0 font-semibold'>Envia tu consulta</h3>
                        <label className='flex flex-row items-center '>
                              <MdEmail />
                              <input className='w-72 h-12 border-b-2 outline-none ml-2 p-5 bg-transparent font-semibold placeholder-shown:text-black' type="email" name="" id="" placeholder='Ingrese su mail' />
                        </label>
                        <div className='flex flex-row items-center gap-10 mt-10 justify-center'>
                              <div className='w-8 flex justify-center items-center'>
                                    <a href='#'>
                                          <img
                                                className='w-full'
                                                src={facebook}
                                                alt=''
                                          />
                                    </a>
                              </div>
                              <div className='w-8 flex justify-center items-center'>
                                    <a href='#'>
                                          <img
                                                className='w-full'
                                                src={instagram}
                                                alt=''
                                          />
                                    </a>
                              </div>
                              <div className='w-8 flex justify-center items-center'>
                                    <a href='#'>
                                          <img
                                                className='w-full'
                                                src={whatsapp}
                                                alt=''
                                          />
                                    </a>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Footer;
