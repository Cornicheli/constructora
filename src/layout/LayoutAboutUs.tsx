import { AboutUs } from "../components";

const LayoutMain = () => {
      return (
            <main className=" bg-[#a3a4a4] flex items-center justify-center flex-col mb-10 h-min-92 py-10 relative">
                  <div className="absolute -top-20" id="aboutus" />
                  <AboutUs />
            </main>
      );
};

export default LayoutMain;
