import { toaster } from "@/components/ui/toaster";
import api from "@/config/axios";
import { paths } from "@/types/paths";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type LoginUserResponse =
  paths["/api/parsing/login/"]["post"]["responses"]["200"]["content"]["application/json"];

const loginUser = async (input: { email: string; password: string }) => {
  const inputData = {
    username: input.email,
    password: input.password,
  };

  const response = await api.post<LoginUserResponse>(
    "/parsing/login/",
    inputData
  );

  return response.data;
};

export const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
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
