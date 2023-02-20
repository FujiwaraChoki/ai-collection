import "../styles/globals.css";
import Head from "next/head";
import ReloadButton from "../components/reloadButton";
import ResetApiKeyButton from "../components/resetApiKeyButton";
import GoToHomeButton from "../components/goToHomeButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AI-Collection</title>
      </Head>
      {/* Reload and Clear Cookie Button*/}
      <GoToHomeButton />
      <ReloadButton />
      <ResetApiKeyButton />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
