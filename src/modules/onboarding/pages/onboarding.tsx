import { Outlet } from "react-router-dom";

export const OnboardingPage = () => {
  return (
    <div className="h-screen md:flex box-border overscroll-contain">
      <div className="relative md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i flex-col justify-between items-center hidden">
        <div className=" self-end py-14">
          {/*           <h1 className="text-white font-bold text-4xl font-sans px-2">Bienvenido</h1>
          <p className="text-white text-right mt-1 px-2">
            Jesus
          </p> */}
        </div>
        {/*         <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div> */}
        <picture>
          <img
            className="ml-8 w-2/4 max-w-lg rounded-lg object-cover"
            src="/src/assets/images/bird_happy.svg"
          />
        </picture>
      </div>
      <div className="flex flex-col md:w-1/2 h-full py-10 px-5 bg-white">
        <h1 className="text-orange-400 font-bold text-2xl mb-1">DINT</h1>
        <Outlet />
      </div>
    </div>
  );
};
