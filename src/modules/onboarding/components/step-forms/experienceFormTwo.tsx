import { useNavigate } from "react-router-dom";
export const ExperienceFormTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="mt-4 w-full flex flex-col justify-between h-[inherit]">
        <div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold text-gray-900">
              Experiencia
            </h2>
            <p className="mt-1 text-sm  text-gray-600">
              This information will be displayed
            </p>
          </div>
          <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-4">
            <div className="md:col-span-3">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  ¿Tiene experiencia en canto?
                </legend>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Si
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ¿Podría contarme sobre su experiencia en canto?
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className="md:col-span-2">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  ¿Podría describir su tono vocal?
                </legend>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tono agudo
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tono medio
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tono grave
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/onboarding/4")}
            className="my-2 w-36 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};
