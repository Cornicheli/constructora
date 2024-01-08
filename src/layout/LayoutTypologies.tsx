import { Typologies } from "../components"
import { LayoutFooter } from "."

const LayoutTypologies = () => {
      return (
            <>
                  <main className="flex flex-col items-center justify-center bg-[#0E2230] py-12 relative">
                        <div className="absolute -top-20" id="tipologias" />
                        <Typologies />
                  </main>
                  <LayoutFooter />
            </>
      )
}

export default LayoutTypologies