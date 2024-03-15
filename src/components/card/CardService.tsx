import '../../style/card.css'

export const CardService = ({ title, image, alt }: { title: string, image: string, alt: string }) => {
      return (
            <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1  xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                  <img className='h-full w-full absolute -z-40' src={image} alt={alt} />
                  <div className="txt p-4">
                        <h2>{title}</h2>
                  </div>
            </section>
      )
}