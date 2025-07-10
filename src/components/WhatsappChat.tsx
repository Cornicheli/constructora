import { useState } from 'react';
import whatsapp from '../assets/icon/whatsappColor.png';

export const WhatsappChat = () => {
    const [mensaje, setMensaje] = useState('hola, como estas ?');

    const telefono = '541136821653'; // tu número en formato internacional (sin +)
    const mensajeCodificado = encodeURIComponent(mensaje);
    const linkWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    return (
        <a
            className="fixed bottom-3 right-4 z-10 h-[70px] w-[50px]"
            // href={`http://wa.me/541136821653?text=${saludo}`}
            href={linkWhatsApp}
            target="about_blank">
            <img
                className="h-[70px] w-[50px]"
                src={whatsapp}
                alt="imagen-pileta"
            />
        </a>
    );
};
