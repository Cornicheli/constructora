import whatsapp from '../assets/icon/whatsappColor.png';

export const WhatsappChat = () => {
    return (
        <a
            className="fixed bottom-3 right-4 z-10 h-[70px] w-[50px]"
            href="http://wa.me/541136821653"
            target="about_blank">
            <img
                className="h-[70px] w-[50px]"
                src={whatsapp}
                alt="imagen-pileta"
            />
        </a>
    );
};
