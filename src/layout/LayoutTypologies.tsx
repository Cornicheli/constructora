import { Typologies } from "../components"

const LayoutTypologies = () => {
      return (
            <main className="flex flex-col items-center justify-center bg-[#3e4653] py-12 relative">
                  <div className="absolute -top-20" id="tipologias" />
                  <Typologies />
            </main>
      )
}

export default LayoutTypologies