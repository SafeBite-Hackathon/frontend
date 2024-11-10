import { Field } from "@/components/ui/field";
import {
  Box,
  Center,
  Fieldset,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRegisterUser } from "./model/register";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const registerUser = useRegisterUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegister = () => {
    registerUser.mutate({
      email,
      password,
    });
  };

  return (
    <Center height={"100dvh"} px={6}>
      <VStack w={"full"}>
        <Heading fontWeight={"bold"} fontSize={"32px"} mb={4}>
          Sign up
        </Heading>

        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} w={"full"}>
          <Fieldset.Root size="lg">
            <Fieldset.Content>
              <Field label="Email">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field label="Password">
                <Input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              <Field label="Confirm Password">
                <Input
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Field>
            </Fieldset.Content>

            <Button
              disabled={password !== confirmPassword || !email || !password}
              onClick={onRegister}
              w={"full"}
              alignSelf="flex-start"
              loading={registerUser.isPending}
            >
              Submit
            </Button>
          </Fieldset.Root>

          <Stack pt={6}>
            <Text textAlign={"center"}>
              Already a user? <Link to={"/login"}>Login</Link>
            </Text>
          </Stack>
        </Box>
      </VStack>
    </Center>
  );
};

export default RegisterPage;
