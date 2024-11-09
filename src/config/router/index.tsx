import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../../pages/home";
import OnboardingPage from "@/pages/onboarding";
import DefaultLayout from "@/layouts/defaultLayout";
import WithNavigation from "@/widgets/NavigationMenu/WithNavigation";
import ProfilePage from "@/pages/profile";
import MealPlannerPage from "@/pages/meal-planner";
import ShoppingListPage from "@/pages/shopping-list";

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
      {
        path: "/profile",
        element: (
          <WithNavigation activeTab="profile">
            <ProfilePage />
          </WithNavigation>
        ),
      },
      {
        path: "/mealPlanner",
        element: (
          <WithNavigation activeTab="mealPlanner">
            <MealPlannerPage />
          </WithNavigation>
        ),
      },
      {
        path: "/shoppingList",
        element: (
          <WithNavigation activeTab="shoppingList">
            <ShoppingListPage />
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
