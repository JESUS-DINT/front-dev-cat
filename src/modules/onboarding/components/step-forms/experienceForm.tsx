import { TextFieldComponent } from "app/components/molecules";
import { Button } from "app/components/atoms";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useActorExperience } from "../../hooks/experience-actor.hook";
export const ExperienceForm = () => {
  const { register, handleSubmit, fields, addFieldsProject, onSubmit, remove } =
    useActorExperience();
  return (
    <>
      <form
        className="mt-4 w-full flex flex-col justify-between h-[inherit] overscroll-contain"
        onSubmit={handleSubmit(onSubmit)}
      >
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
                  ¿Ha recibido formación en actuación de voz?
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
              <h3 className="text-base font-semibold text-gray-900">
                ¿Cuál es tu experiencia como actor o actriz de doblaje ?
              </h3>
            </div>
            <div className="max-h-[280px] col-span-full overflow-y-auto ">
              {fields.map((field, index) => (
                <section
                  key={field.id}
                  className="grid gap-x-4 gap-y-4 md:grid-cols-2"
                >
                  <div className="col-span-full">
                    <TextFieldComponent
                      {...register(`experience.${index}.project`)}
                      label="Proyecto"
                      htmlFor="experience"
                      id="experience"
                      type="text"
                      placeholder="Escribe aquí tu experiencia"
                    />
                  </div>
                  <div className="col-span-full">
                    <TextFieldComponent
                      {...register(`experience.${index}.character`)}
                      label="Personaje"
                      htmlFor="experience"
                      id="experience"
                      type="text"
                      placeholder="Escribe aquí tu experiencia"
                    />
                  </div>
                  <button type="button" onClick={() => remove(index)}>
                    DELETE
                  </button>
                </section>
              ))}
              <button
                type="button"
                onClick={addFieldsProject}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Icon description</span>
              </button>
            </div>
            <div className="md:col-span-2">
              <TextFieldComponent
                name="phone"
                label="¿Cuál es tu rango de edad  vocal?"
                htmlFor="phone"
                id="phone"
                type="tel"
                placeholder="xxx a xxxx"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="text-center inline-flex items-center"
            icon={<ArrowRightIcon className="ml-4 h-4 w-4" />}
          >
            Continuar
          </Button>
        </div>
      </form>
    </>
  );
};
