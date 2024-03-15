export const CardAboutUs = ({ image, title, subTitle }: { image: string, title: string, subTitle: string }) => {
      return (
            <div className="items-center justify-around flex flex-col h-96 px-5 mt-5 w-[375px] md:w-[450px] lg:w-[275px] 2xl:w-[475px]" >
                  <div className="relative w-44 h-44 group overflow-hidden">
                        <img className="w-full h-full" src={image} alt="Image" />
                  </div>
                  <div className='flex justify-center items-center flex-col h-24'>
                        <h1 className='text-cente text-white font-bold text-lg'>{title}</h1>
                        <h3 className='text-center text-white text-ellipsis overflow-hidden'>{subTitle}</h3>
                  </div>
            </div>
      )
}