import { Navigate, useNavigate } from "react-router-dom";
import { useGetMe } from "./model/getMe";
import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";

interface WithAuthProps {
  children: React.ReactNode;
}

const WithAuth = ({ children }: WithAuthProps) => {
  const token = localStorage.getItem("token") || null;
  const getMe = useGetMe();
  const navigate = useNavigate();

  useEffect(() => {
    if (getMe.status === "success") {
      // Good To go
      return;
    }

    if (getMe.status === "error") {
      // Bad To go
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [getMe.status, navigate]);

  if (token === null) {
    return <Navigate to={"/login"} />;
  }

  if (getMe.isLoading) {
    return (
      <Center h={"100dvh"}>
        <Spinner size={"xl"} colorPalette={"green"} />
      </Center>
    );
  }

  return <>{children}</>;
};

export default WithAuth;
