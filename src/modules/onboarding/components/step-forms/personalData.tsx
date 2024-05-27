import { TextFieldComponent } from 'app/components/molecules'
import { useStepper } from '../../hooks/stepper.hook';
import listCountries from "../../../../content/country-data.json";
import { Button, HelperText } from 'app/components/atoms';
import { communityOptions, disabilityOptions } from 'app/content/select';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export const PersonalDataForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    showIdField,
    isShowIdField,
    isShowRutField,
    saveStepData,
  } = useStepper();
  return (
    <>
      <form
        onSubmit={handleSubmit(saveStepData)}
        className="mt-4 w-full flex flex-col justify-between h-[inherit]"
      >
        <div>
          <div className="flex flex-col">
            {/*             <h2 className="text-base font-semibold text-gray-900">
              Informacion Personal
            </h2> */}
            <p className="mt-1 text-sm  text-gray-600">
              En DINT Doblajes Internacionales buscamos personas con talento en
              la actuación de voz. A través del siguiente cuestionario, te
              invitamos a compartir tus datos de contacto, experiencia
              profesional y demás información, que nos permitirá conocer tu
              talento y experiencia.
            </p>
          </div>
          <div className="mt-5 grid gap-x-4 gap-y-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label
                htmlFor="applicant_to"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Desea postular como:
              </label>
              <div className="mt-1">
                <select
                  id="applicant_to"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  {...register("applicant_to")}
                >
                  <option>Técnico</option>
                  <option>Actor</option>
                  <option>Traductor</option>
                </select>
              </div>
              {errors && <HelperText>{!!errors.applicant_to}</HelperText>}
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                País
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("country", {
                    onChange: (e) => showIdField(e.target.value),
                  })}
                >
                  <option value="none">Seleccione un país</option>
                  {listCountries.map((country) => (
                    <>
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              {errors && <HelperText>{!!errors.country}</HelperText>}
            </div>
            {isShowRutField && (
              <div className="md:col-span-2">
                <TextFieldComponent
                  label="Rut"
                  htmlFor="rut"
                  id="rut"
                  type="text"
                  placeholder="Rut"
                  {...register("rut")}
                  error={errors.rut}
                />
              </div>
            )}
            {isShowIdField && (
              <div className="md:col-span-2">
                <TextFieldComponent
                  label="Documento de identidad"
                  htmlFor="document-identification"
                  id="document-identification"
                  type="text"
                  placeholder="Documento de indentidad"
                  {...register("passport")}
                  error={errors.passport}
                />
              </div>
            )}
            <div className="md:col-span-2">
              <TextFieldComponent
                label="Teléfono"
                htmlFor="phone"
                id="phone"
                type="tel"
                placeholder="(+xxx) xxx-xxx-xxxx"
                {...register("phone")}
                error={errors.phone}
              />
            </div>
            <div className="md:col-span-3">
              <TextFieldComponent
                label="Dirección"
                htmlFor="address"
                id="address"
                type="text"
                placeholder="1234 Main St"
                {...register("address")}
                error={errors.address}
              />
            </div>
            <div className="md:col-span-1">
              <TextFieldComponent
                label="Edad"
                htmlFor="age"
                id="age"
                type="number"
                placeholder="xx"
                {...register("age")}
                error={errors.age}
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pertece a una comunidad?
              </label>
              <div className="mt-1">
                <select
                  id="community"
                  autoComplete="community"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("community")}
                >
                  <option value="none">Seleccione</option>
                  {communityOptions.map((item) => (
                    <>
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              {errors && <HelperText>{!!errors.community}</HelperText>}
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Posee usted alguna discapacidad?
              </label>
              <div className="mt-1">
                <select
                  id="community"
                  autoComplete="community"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("disability")}
                >
                  <option value="none">Seleccione</option>
                  {disabilityOptions.map((item) => (
                    <>
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              {errors && <HelperText>{!!errors.disability}</HelperText>}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            disabled={!isValid}
            type="submit"
            className='text-center inline-flex items-center'
            icon={<ArrowRightIcon className="ml-4 h-4 w-4" />}
          >
            Continuar
          </Button>
        </div>
      </form>
    </>
  );
};
