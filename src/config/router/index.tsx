import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../../pages/home";
import OnboardingPage from "@/pages/onboarding";
import DefaultLayout from "@/layouts/defaultLayout";
import WithNavigation from "@/widgets/NavigationMenu/WithNavigation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: (
          <WithNavigation activeTab="home">
            <HomePage />
          </WithNavigation>
        ),
      },
    ],
  },
  {
    path: "/onboarding",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <OnboardingPage />,
      },
    ],
  },
]);
