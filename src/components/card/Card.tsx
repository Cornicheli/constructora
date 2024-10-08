export const Card = ({
  title,
  image,
  subTitle,
}: {
  title: string;
  image: string;
  subTitle?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-80 m-auto shadow-lg rounded-xl mx-5 my-5 hover:scale-105 transition duration-100 ease-out md:ease-in w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]">
      <div className=" w-full h-4/5 overflow-hidden rounded-t-xl">
        <img
          className="w-full h-full rounded-t-xl bg-cover"
          src={image}
          alt="Image"
        />
      </div>
      <div className=" w-full flex flex-col justify-center h-1/4 bg-white rounded-b-xl">
        <h1 className="font-semibold text-[#0E2230] ml-5 text-lg">{title}</h1>
        <h1 className="font-medium text-[#1b1b1cab] ml-5">{subTitle}</h1>
      </div>
    </div>
  );
};
