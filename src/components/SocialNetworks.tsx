import facebook from '../assets/icon/facebook.png';
import instagram from '../assets/icon/instagram.png';
import whatsapp from '../assets/icon/whatsapp.png';

const SocialNetwoks = () => {
    return (
        <>
            <div className="mb-10 grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex w-8 items-center justify-center">
                    <a href="#">
                        <img className="w-full" src={facebook} alt="" />
                    </a>
                </div>
                <div className="flex w-8 items-center justify-center">
                    <a href="#">
                        <img className="w-full" src={instagram} alt="" />
                    </a>
                </div>
                <div className="flex w-8 items-center justify-center">
                    <a href="#">
                        <img className="w-full" src={whatsapp} alt="" />
                    </a>
                </div>
            </div>
        </>
    );
};
export default SocialNetwoks;
