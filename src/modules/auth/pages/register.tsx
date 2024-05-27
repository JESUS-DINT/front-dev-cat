import { useRegister } from "../hooks/register.hooks";
import { Card, TextFieldComponent } from "app/components/molecules";
import { HelperText } from "app/components/atoms/index";
import VerifyYourEmailMessage from "../components/verifyEmail";
import clsx from "clsx";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    singUp,
    errors,
    userEmail,
    isLoading,
    showVerifyNotice,
  } = useRegister();
  return (
    <>
      {showVerifyNotice ? (
        <VerifyYourEmailMessage email={userEmail} />
      ) : (
        <Card className="max-w-xl">
          <form onSubmit={handleSubmit(singUp)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="flex flex-col p-4 text-center space-y-4">
                  <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold leading-7">
                    Registrarse
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Introduzca sus datos de forma correcta
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <TextFieldComponent
                      label="Nombre completo"
                      htmlFor="full_name"
                      id="full_name"
                      type="text"
                      placeholder="Louis Pasteur Barra"
                      {...register("full_name", {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                      })}
                      error={errors.full_name}
                    />
                  </div>
                  <div className="col-span-full">
                    <TextFieldComponent
                      label="Correo electronico"
                      htmlFor="email"
                      id="email"
                      type="email"
                      placeholder="Correo electronico"
                      {...register("email")}
                      error={errors.email}
                    />
                  </div>
                  <div className="sm:col-span-3 sm:col-start-1">
                    <TextFieldComponent
                      label="Contraseña"
                      htmlFor="password"
                      id="password"
                      type="password"
                      placeholder="Contraseña"
                      {...register("password")}
                      error={errors.password}
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <TextFieldComponent
                      label="Verificar contraseña"
                      htmlFor="password-confirmation"
                      id="password-confirmation"
                      type="password"
                      placeholder="Verificar contraseña"
                      {...register("passwordConfirmation")}
                      error={errors.passwordConfirmation}
                    />
                  </div>
                  <div className="col-span-full">
                    {errors && <HelperText>{!!errors.terms}</HelperText>}
                    <input
                      id="checkbox-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      {...register("terms")}
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Acepto los{" "}
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terminos y condiciones
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <button
                disabled={isLoading}
                type="submit"
                className={clsx(
                  `w-full sm:w-auto items-center text-center bg-gray-900 hover:bg-gray-700 text-white whitespace-nowrap rounded-md text-sm font-medium leading-6 py-2 px-6 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200`,
                  { "cursor-not-allowed": isLoading }
                )}
              >
                {isLoading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : null}
                {isLoading ? "Cargando..." : "Registrarse"}
              </button>

              {/* <Button type="submit">Registrarse</Button> */}
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default RegisterPage;
