import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

type Props = {
  children: ReactNode;
};

const AllTheProviders = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender: any = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
