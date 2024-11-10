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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLoginUser } from "./model/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = useLoginUser();

  const onRegister = () => {
    loginUser.mutate({
      email,
      password,
    });
  };

  return (
    <Center height={"100dvh"} px={6}>
      <VStack w={"full"}>
        <Heading fontWeight={"bold"} fontSize={"32px"} mb={4}>
          Login
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
            </Fieldset.Content>

            <Button
              disabled={!email || !password}
              onClick={onRegister}
              w={"full"}
              alignSelf="flex-start"
              loading={loginUser.isPending}
            >
              Submit
            </Button>
          </Fieldset.Root>

          <Stack pt={6}>
            <Text textAlign={"center"}>
              No account? <Link to={"/register"}>Register</Link>
            </Text>
          </Stack>
        </Box>
      </VStack>
    </Center>
  );
};

export default LoginPage;
