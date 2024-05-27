import BaseLayout from "components/layout/baseLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "app/modules/auth/pages/login";
import RegisterPage from "app/modules/auth/pages/register";
import MainLayout from "app/components/layout/mainLayout";
import { OnboardingPage } from "app/modules/onboarding/pages/onboarding";
import { PersonalDataForm } from "app/modules/onboarding/components/step-forms/personalData";
import { ExperienceForm } from "app/modules/onboarding/components/step-forms/experienceForm";
import { ExperienceFormTwo } from "app/modules/onboarding/components/step-forms/experienceFormTwo";
import { MultimediaForm } from "app/modules/onboarding/components/step-forms/multimediaForm";
import ActivationPage from "app/modules/auth/pages/activate";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,

    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "auth/activate/:tokenId",
        element: <ActivationPage />,
      },
    ],
  },
  {
    path: "",
    element: <MainLayout />,
    children: [
      /*       {
        index: true,
        element: <Navigate to="onboarding" replace />,
      }, */
      {
        path: "main/data-sheet",
        element: <div>Principal</div>,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
        children: [
          {
            index: true,
            element: <Navigate to="1" replace />,
          },
          {
            path: "1",
            element: <PersonalDataForm />,
          },
          {
            path: "2",
            element: <ExperienceForm />,
          },
          {
            path: "3",
            element: <ExperienceFormTwo />,
          },
          {
            path: "4",
            element: <MultimediaForm />,
          },
        ],
      },
    ],
  },
]);
