import { PropsWithChildren } from "react";
import { Provider } from "@/components/ui/provider";

type Props = PropsWithChildren;

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Provider>{children}</Provider>
    </>
  );
};

export default Providers;
