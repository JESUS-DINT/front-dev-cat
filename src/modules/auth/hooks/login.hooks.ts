import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
type LoginProps = {
  emailOrRut?: string;
  password?: string;
};

const schemaLogin = yup.object().shape({
  emailOrRut: yup
    .string()
    .email("El correo electronico es invalido")
    .required("El correo electronico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaLogin),
  });
  const navigate = useNavigate();

  const login = async (data: LoginProps) => {
    setIsLoading(true);
    axios
      .post("https://catalogo-api.dint.cl/users/auth/login", data)
      .then((res) => {
        console.log(res.data?.redirect?.redirectUrl);
        navigate(`${res.data?.redirect?.redirectUrl}`);
        //navigate("/main/data-sheet");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    login,
    register,
    handleSubmit,
    errors,
    isLoading,
  };
};
