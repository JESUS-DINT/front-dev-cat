/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

export const MultimediaForm = () => {
  const [files, setFiles] = React.useState<any>([]);
  const [binaryFiles, setBinaryFiles] = React.useState<any>([]); // [ArrayBuffer, ArrayBuffer, ArrayBuffer
  const multiple = true;
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(files);
    acceptedFiles.forEach((file: any) => {
      setFiles((prev: any) => [...prev, file?.path]);
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        // const binaryArray = []
        const binaryStr = reader.result;
        setBinaryFiles((prev: any) => [...prev, binaryStr]);
        console.log(binaryFiles);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    maxFiles: 3,
    maxSize: 10485760,
    onDrop,
  });
  const acceptedFileItems = files.map((file: any) => (
    <li key={file}>{file}</li>
  ));
  return (
    <>
      <form className="mt-4 w-full flex flex-col justify-between h-[inherit]">
        <div>
          <div className="flex flex-col">
            {/*             <h2 className="text-base font-semibold text-gray-900">
              Informacion Personal
              <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
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
            <section className="col-span-full">
              <div {...getRootProps({ className: "dropzone" })}>
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Archivos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Carga un archivo</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          {...getInputProps()}
                        />
                      </label>
                      <p className="pl-1">o arrastra y suelta</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      MP4, hasta 10MB y Max. 3 archivos
                    </p>
                  </div>
                </div>
                <ul>
                  <li> - </li>
                  {acceptedFileItems}
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/onboarding/5")}
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
