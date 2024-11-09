import { Navigate, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useLocalStorage } from "usehooks-ts";

const DefaultLayout = () => {
  const [isOnBoarding] = useLocalStorage("isOnboarding", false);

  if (!isOnBoarding) {
    return <Navigate to={"/onboarding"} />;
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default DefaultLayout;
