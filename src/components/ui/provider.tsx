"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import usePreventZoom from "@/hooks/usePreventZoom";

export function Provider(props: ColorModeProviderProps) {
  usePreventZoom();

  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} enableSystem={false} />
    </ChakraProvider>
  );
}
