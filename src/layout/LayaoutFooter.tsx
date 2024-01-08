import React from 'react';
import '../style/footer.css'
import image from '../assets/images.png'
import contact from '../json/contact.json'
import { IoLocationSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'



const LayoutFooter: React.FC = () => {
      return (
            <>
                  <div className="header">

                        <svg
                              className="waves"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 24 150 28"
                              preserveAspectRatio="none"
                              shapeRendering="auto"
                        >
                              <defs>
                                    <path
                                          id="gentle-wave"
                                          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                    />
                              </defs>
                              <g className="parallax">
                                    <use xlinkHref="#gentle-wave" x="60" y="0" fill="rgba(255,255,255,0.7)" />
                                    <use xlinkHref="#gentle-wave" x="60" y="3" fill="rgba(255,255,255,0.5)" />
                                    <use xlinkHref="#gentle-wave" x="60" y="5" fill="rgba(255,255,255,0.3)" />
                                    <use xlinkHref="#gentle-wave" x="60" y="7" fill="#fff" />
                              </g>
                        </svg>

                        <div className="inner-header flex justify-evenly items-center flex-wrap relative z-10">

                              <div className="flex flex-col my-5 w-72 items-center justify-center z-10">
                                    <div className='h-36 w-72'>
                                          <img className='w-full h-full bg-cover rounded-full' src={image} />
                                    </div>
                                    <h3 className='text-[#030608] text-lg font-semibold text-center'>
                                          Constructora especializada en la construcción de
                                          viviendas y piscinas industrializadas
                                    </h3>
                              </div>

                              <div className=" flex items-center flex-col my-5 w-[300px] justify-center z-10">
                                    {
                                          contact.contact.map((item, index) =>
                                                <section key={index}>
                                                      <div className='flex flex-row items-center'>
                                                            <MdAlternateEmail />
                                                            <h3 className='text-[#030608] text-lg my-2 ml-2 font-semibold'>Email: {item.email}</h3>
                                                      </div>
                                                      <div className='flex flex-row items-center'>
                                                            <MdSmartphone />
                                                            <h3 className='text-[#030608] text-lg my-2 ml-1 font-semibold'>Tel: {item.cel}</h3>
                                                      </div>
                                                      <div className='flex flex-row items-center'>
                                                            <IoLocationSharp />
                                                            <h3 className='ml-2 my-2 text-[#030608] text-lg font-semibold'>{item.address}</h3>
                                                      </div>
                                                      <div className='flex flex-row items-center'>
                                                            <MdWatchLater />
                                                            <h3 className='text-[#030608] text-lg ml-2 my-2 font-semibold'>{item.hours}</h3>
                                                      </div>
                                                </section>
                                          )
                                    }
                              </div>

                              <div className=" flex items-center flex-col my-5 w-72 justify-center z-10">
                                    <h3 className='text-lg text-[#030608] underline text-center mb-8 border-0 font-semibold'>Envia tu consulta</h3>
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



                  </div>

            </>
      );
};

export default LayoutFooter;
