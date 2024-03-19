import whatsapp from "../assets/icon/whatsappColor.png"

export const WhatsappChat = () => {
      return (
            <a
                  className="w-[50px] h-[70px] fixed z-10 right-3 bottom-3"
                  href='http://wa.me/541136821653'
                  target='about_blank'>
                  <img
                        className="w-[50px] h-[70px]"
                        src={whatsapp}
                        alt="imagen-pileta"
                  />
            </a>
      )
}