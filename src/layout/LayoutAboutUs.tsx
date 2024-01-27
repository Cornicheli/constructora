import { AboutUs } from "../components";

const LayoutMain = () => {
      return (
            <main className="bg-[#0E2230] flex items-center justify-center flex-col py-10 relative">
                  <div className="absolute -top-20" id="aboutus" />
                  <AboutUs />
            </main>
      );
};

export default LayoutMain;
