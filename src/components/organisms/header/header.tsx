import { Link } from "react-router-dom";
import DintLogo from "assets/images/dint-logo.webp";
const imgLogo = DintLogo;

const HeaderComponent = () => {
  return (
    <header>
      <nav className="flex justify-center border-gray-200 h-20 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://dint.cl" className="flex items-center">
            <img
              src={imgLogo}
              className="mr-3 h-6 sm:h-9 lg:h-12"
              alt="dint Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              to="/login"
            >
              Iniciar sesión
            </Link>
            <Link
              className="text-white bg-[#E99462] hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              to="/register"
            >
              Registrarse
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
