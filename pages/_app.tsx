import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { LearningContextProvider } from "@/components/LearningContext";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LearningContextProvider>
      <Component {...pageProps} />
    </LearningContextProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
