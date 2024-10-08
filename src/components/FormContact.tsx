import { IoLocationSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { facebook, instagram, whatsapp } from '../assets/icon'
import { CardFooter } from "./card/CardFooter";
import React from "react";

const FormContact = () => {
      const handleEventForm = (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(e.target)
      }
      console.log(handleEventForm)

      return (
            <section className="grid-flow-row grid-cols-1 inline-grid w-full h-screen md:grid-cols-2 mt-52">
                  <div className="flex flex-col py-12 px-5 mx-auto md:px-0 sm:px-4">

                        <h2 className="text-4xl text-black font-semibold mt-4 pb-2">Contacto</h2>
                        <div className='flex flex-row items-center'>
                              <MdAlternateEmail />
                              <h3 className='text-[#030608] text-lg my-2 ml-2 font-semibold'>Email:constructorahomedeluxe@gmail.com</h3>
                        </div>
                        <div className='flex flex-row items-center'>
                              <MdSmartphone />
                              <h3 className='text-[#030608] text-lg my-2 ml-1 font-semibold'>Tel: +54 11 36821653</h3>
                        </div>
                        <div className='flex flex-row items-center'>
                              <IoLocationSharp />
                              <h3 className='ml-2 my-2 text-[#030608] text-lg font-semibold'>Berazategui, Calle 5 4340</h3>
                        </div>
                        <div className='flex flex-row items-center'>
                              <MdWatchLater />
                              <h3 className='text-[#030608] text-lg ml-2 my-2 font-semibold'>Lunes a Viernes de 9 a 18 hs.</h3>
                        </div>

                        <div className='flex flex-row items-center gap-10 justify-center mt-3'>
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
                  <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                              <div className="flex flex-col">
                                    <div>
                                          <h2 className="text-4xl text-black font-semibold pb-2">Envia tu consulta</h2>
                                    </div>
                              </div>
                              <form onChange={handleEventForm}>
                                    <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect" />
                                    <div className="mt-4 space-y-6">
                                          <div className="col-span-full">
                                                <label className="block mb-3 text-sm font-medium text-gray-600"> Tu nombre   </label>
                                                <input type="email" name="nombre" placeholder="Nombre" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                          </div>
                                          <div className="col-span-full">
                                                <label className="block mb-3 text-sm font-medium text-gray-600"> Email   </label>
                                                <input type="email" name="email" placeholder="ejemplo@gmail.com" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                          </div>
                                          <div className="col-span-full">
                                                <label className="block mb-3 text-sm font-medium text-gray-600"> Consulta </label>
                                                <textarea name="consulta" placeholder="Describa su consulta" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm h-40" />
                                          </div>
                                          <div className="col-span-full">
                                                <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Enviar su consulta </button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
            </section>
      )
}

export default FormContact