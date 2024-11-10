import { PropsWithChildren } from "react";
import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

type Props = PropsWithChildren;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Toaster />
          {children}
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
