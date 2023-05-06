import { store } from "@app/store";
import Layout from "@components/Layout/Layout";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default MyApp;
