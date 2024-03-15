export const CardAbout = ({ title, subtitle, image, alt }: { title: string, image: string, subtitle: string, alt: string }) => {
      return (
            <div className="flex flex-col justify-center items-center h-72">
                  <img src={image} alt={alt} />
                  <div className="flex flex-col mt-3">
                        <h1 className="text-white p-0.5">{title}</h1>
                        <h2 className="text-white p-0.5">{subtitle}</h2>
                  </div>
            </div>

      )
}