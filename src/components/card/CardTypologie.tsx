export const CardTypologies = ({ title, image }: { title: string, image: string }) => {
      return (
            <div
                  className="flex flex-col items-center justify-center shadow-md shadow-[#ffffff4d] h-max-64 m-auto relative rounded-xl hover:scale-105 transition duration-100 ease-out md:ease-in w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]"
            >
                  <div className=" w-full h-42 group overflow-hidden rounded-xl">
                        <img
                              className="w-full h-full rounded-xl"
                              src={image}
                              alt="Image"
                        />
                  </div>
                  <div className="bg-[#00000061] absolute w-36 h-10 bottom-0 left-5 rounded-t-md">
                        <h1 className="font-semibold absolute bottom-2 left-5 text-white">
                              {title}
                        </h1>
                  </div>
            </div>
      )
}