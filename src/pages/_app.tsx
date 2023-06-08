import { store } from "@app/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
