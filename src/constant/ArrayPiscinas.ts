import {
    cubrePileta01,
    cubrePileta02,
    cubrePileta03,
    cubrePileta04,
    cubrePileta05,
    cubrePileta06,
    cubrePileta07,
    cubrePileta08,
} from '@/assets/cortinas';
import {
    bancoPvc01,
    bancoPvc02,
    bancoPvc03,
    bancoPvc04,
    bancoPvc05,
    bancoPvc06,
    bancoPvc07,
    bancoPvc08,
} from '@/assets/serviceCarrousel/bancoPvc';

import {
    cascada01,
    cascada02,
    cascada03,
    cascada04,
    cascada05,
    cascada06,
    cascada07,
    cascada08,
} from '@/assets/serviceCarrousel/cascada';

import {
    pisosDeckMadera1,
    pisosDeckMadera2,
    pisosDeckMadera3,
    pisosDeckMadera4,
    pisosDeckMadera5,
    pisosDeckMadera6,
    pisosDeckMadera7,
    pisosDeckMadera8,
    pisosDeckMadera9,
} from '@/assets/serviceCarrousel/pisosDeckMadera';

import {
    jacuzzi01,
    jacuzzi02,
    jacuzzi03,
    jacuzzi04,
    jacuzzi05,
    jacuzzi06,
    jacuzzi07,
} from '@/assets/serviceCarrousel/jacuzzi';

import {
    lucesLed01,
    lucesLed02,
    lucesLed03,
    lucesLed04,
    lucesLed05,
    lucesLed06,
} from '@/assets/serviceCarrousel/lucesLed';
import {
    excavacion02,
    excavacion03,
    excavacion04,
} from '@/assets/image/excavacion';
import {
    armaduraAcero01,
    armaduraAcero02,
    armaduraAcero03,
} from '@/assets/image/armaduraAcero';
import {
    encofrado01,
    encofrado02,
    encofrado03,
} from '@/assets/image/construccion';
import { hormigonado02, hormigonado03 } from '@/assets/image/hormigonado';
import { revestimiento04, revestimiento05 } from '@/assets/image/revestimiento';
import {
    pintura01,
    pintura02,
    pintura03,
    pintura04,
    pintura05,
} from '@/assets/serviceCarrousel/pintura';
import {
    piedraSimil01,
    piedraSimil02,
    piedraSimil04,
    piedraSimil05,
    piedraSimil06,
} from '@/assets/serviceCarrousel/piedraSimil';
import {
    piscinaFinalizada01,
    piscinaFinalizada02,
    piscinaFinalizada03,
    piscinaFinalizada04,
    piscinaFinalizada05,
    piscinaFinalizada07,
    piscinaFinalizada08,
    piscinaFinalizada09,
    piscinaFinalizada11,
    piscinaFinalizada12,
} from '@/assets/serviceCarrousel/finalizada';
import {
    lucesLed,
    piscinaBancoDeck,
    piscinaCascada,
    piscinaClasica,
    piscinaLona,
} from '@/assets/piscinaService';

export const dataServiceCarrousel: {
    _id: number;
    title: string;
    image: string[];
}[] = [
    {
        _id: 1,
        title: 'Piscinas Finalizadas',
        image: [
            piscinaFinalizada11,
            piscinaFinalizada12,
            piscinaFinalizada01,
            piscinaFinalizada02,
            piscinaFinalizada03,
            piscinaFinalizada04,
            piscinaFinalizada05,
            piscinaFinalizada07,
            piscinaFinalizada08,
            piscinaFinalizada09,
        ],
    },
    {
        _id: 2,
        title: 'Lona Cubre Pileta',
        image: [
            cubrePileta01,
            cubrePileta02,
            cubrePileta03,
            cubrePileta04,
            cubrePileta05,
            cubrePileta06,
            cubrePileta07,
            cubrePileta08,
        ],
    },
    {
        _id: 3,
        title: 'Piso Deck Madera',
        image: [
            pisosDeckMadera1,
            pisosDeckMadera2,
            pisosDeckMadera3,
            pisosDeckMadera4,
            pisosDeckMadera5,
            pisosDeckMadera6,
            pisosDeckMadera7,
            pisosDeckMadera8,
            pisosDeckMadera9,
        ],
    },
    {
        _id: 4,
        title: 'Pintura',
        image: [pintura01, pintura02, pintura03, pintura04, pintura05],
    },
    {
        _id: 5,
        title: 'Piedra Simil Vali',
        image: [piedraSimil01, piedraSimil02, piedraSimil04, piedraSimil05],
    },
    {
        _id: 6,
        title: 'Cascadas',
        image: [
            cascada01,
            cascada02,
            cascada03,
            cascada04,
            cascada05,
            cascada06,
            cascada07,
            cascada08,
        ],
    },
    {
        _id: 7,
        title: 'Luces LED',
        image: [
            lucesLed01,
            lucesLed02,
            lucesLed03,
            lucesLed04,
            lucesLed05,
            lucesLed06,
        ],
    },
    {
        _id: 8,
        title: 'Banco PVC',
        image: [
            bancoPvc01,
            bancoPvc02,
            bancoPvc03,
            bancoPvc04,
            bancoPvc05,
            bancoPvc06,
            bancoPvc07,
            bancoPvc08,
        ],
    },
    {
        _id: 9,
        title: 'Jets y Jacuzzi',
        image: [
            jacuzzi01,
            jacuzzi02,
            jacuzzi03,
            jacuzzi04,
            jacuzzi05,
            jacuzzi06,
        ],
    },
];

export const imageMap: {
    [key: string]: { id: number; title: string; images: string[] };
} = {
    '1': {
        id: 1,
        title: 'Marcado y Excavación',
        images: [excavacion03, excavacion04, excavacion02],
    },
    '2': {
        id: 2,
        title: 'Armadura de Acero y Encofrado',
        images: [
            armaduraAcero01,
            armaduraAcero02,
            armaduraAcero03,
            encofrado01,
            encofrado02,
            encofrado03,
        ],
    },
    '4': {
        id: 4,
        title: 'Hormigonado',
        images: [hormigonado02, hormigonado03],
    },
    '5': {
        id: 5,
        title: 'Revestimiento',
        images: [revestimiento04, revestimiento05],
    },
};

export const servicesPiscinasData = [
    {
        _id: 1,
        title: 'Piscinas Finalizadas',
        image: piscinaClasica,
        alt: 'Piscinas Finalizadas',
    },
    {
        _id: 2,
        title: 'Lona Cubre Pileta',
        image: piscinaLona,
        alt: 'Lona cubre pileta',
    },
    {
        _id: 3,
        title: 'Piso Deck Madera',
        image: piscinaBancoDeck,
        alt: 'Piso deck de madera',
    },
    {
        _id: 4,
        title: 'Pintura',
        image: pintura01,
        alt: 'Pintura',
    },
    {
        _id: 5,
        title: 'Piedra Simil Vali',
        image: piedraSimil06,
        alt: 'Piedra simil vali',
    },
    { _id: 6, title: 'Cascadas', image: piscinaCascada, alt: 'Cascadas' },
    { _id: 7, title: 'Luces LED', image: lucesLed, alt: 'luces led' },
    { _id: 8, title: 'Banco PVC', image: bancoPvc01, alt: 'Banco PVC' },
    {
        _id: 9,
        title: 'Jets y Jacuzzi',
        image: jacuzzi07,
        alt: 'Jets y Jacuzzi',
    },
];
