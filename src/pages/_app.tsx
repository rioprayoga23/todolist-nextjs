import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/lib/store";

export type Todos = {
  userId: Number;
  id: Number;
  title: string;
  completed: boolean;
};

export type Props = {
  page: number;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
