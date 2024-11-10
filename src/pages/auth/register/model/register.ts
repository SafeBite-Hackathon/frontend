import { toaster } from "@/components/ui/toaster";
import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type RegisterUserResponse =
  paths["/api/parsing/register/"]["post"]["responses"]["200"]["content"]["application/json"];

const registerUser = async (input: { email: string; password: string }) => {
  const inputData = {
    username: input.email,
    password: input.password,
  };
  const response = await api.post<RegisterUserResponse>(
    "/parsing/register/",
    inputData
  );

  return response.data;
};

export const useRegisterUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      const token = data.token;
      localStorage.setItem("token", token);

      toaster.create({
        title: "You are being redirected...",
        type: "success",
      });

      setTimeout(() => {
        navigate("/");
      }, 500);
    },
  });
};
