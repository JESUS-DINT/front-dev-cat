import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type PersonalData = {
  applicant_to: string;
  country: string;
  rut?: string;
  passport?: string;
  address: string;
  phone: string;
  age: string;
  community: string;
  disability: string;
};
const schemaRegister = yup.object().shape({
  applicant_to: yup.string().required("El nombre es requerido"),
  country: yup.string().required("La nacionalidad es requerida"),
  rut: yup.string().min(7, "El RUT es inválido").max(8, "El RUT es inválido"),
  passport: yup.string().min(3, "No es un documento válido"),
  phone: yup
    .string()
    .required("El número telefónico es requerido"),
  address: yup.string().required("La dirección es requerida"),
  age: yup.string().required("Campo requerido"),
  community: yup.string().required("Este campo es requerido"),
  disability: yup.string().required("Este campo es requerido"),
});
export const useStepper = () => {
  const [isShowRutField, setShowRut] = useState<boolean>(false);
  const [isShowIdField, setShowIdField] = useState<boolean>(false);
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalData>({
    resolver: yupResolver(schemaRegister),
    mode: "onChange",
  });
  const navigate = useNavigate();

  const showIdField = (country: string) => {
    if (country === "none") {
      setShowRut(false);
      setShowIdField(false);
      return;
    }
    if (country === "CL") {
      unregister("passport");
      setShowIdField(false);
      setShowRut(true);
    } else {
      unregister("rut");
      setShowRut(false);
      setShowIdField(true);
    }
  };
  const saveStepData = (data: PersonalData) => {
    console.log(data);
    navigateToStep(2);
  }

  const navigateToStep = (step: number) => {
    console.log(step);
    navigate(`/onboarding/${step}`);
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    navigateToStep,
    showIdField,
    isShowIdField,
    isShowRutField,
    saveStepData,
  };
};
