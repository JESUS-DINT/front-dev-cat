import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

type Register = {
  full_name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  terms: boolean;
};
const schemaRegister = yup.object().shape({
  full_name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("El correo electronico es invalido")
    .required("El correo electronico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Las contraseñas no coinciden")
    .required("La confirmacion de la contraseña es requerida"),
  terms: yup.boolean().required("Debe aceptar los terminos y condiciones"),
});

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showVerifyNotice, setShowVerifyNotice] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });
  //const navigate = useNavigate();

  const singUp = async (data: Register) => {
    setIsLoading(true);
    axios
      .post("https://catalogo-api.dint.cl/users/auth/register", data)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response) => {
        console.log(response);
        setUserEmail(data.email);
        setShowVerifyNotice(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    singUp,
    register,
    handleSubmit,
    errors,
    isLoading,
    showVerifyNotice,
    userEmail,
  };
};
