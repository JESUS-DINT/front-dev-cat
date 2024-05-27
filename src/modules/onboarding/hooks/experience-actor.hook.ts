/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const useActorExperience = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });
  const navigate = useNavigate();

  const addFieldsProject = () => {
    append({ project: "", character: "" });
  };

  const navigateToNextStep = () => {
    // navigate("/onboarding/actor/voice-actor");
    navigate("/onboarding/3");
  };

  const onSubmit = (data: any) => {
    console.log("step3", data);
    navigateToNextStep();
  };

  return {
    register,
    handleSubmit,
    errors,
    fields,
    remove,
    addFieldsProject,
    onSubmit,
  };
};
