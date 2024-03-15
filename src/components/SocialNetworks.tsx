import facebook from '../assets/icon/facebook.png'
import instagram from '../assets/icon/instagram.png'
import whatsapp from '../assets/icon/whatsapp.png'

const SocialNetwoks = () => {
      return (
            <>
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
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
            </>
      )
}
export default SocialNetwoks