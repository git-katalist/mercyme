import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import { Global } from "../styles/global";
import { prefix } from "../utils/prefix";
import { Header } from "../components/header/header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Header />
      <Component {...pageProps} prefix={prefix} />
    </ThemeProvider>
  );
}

export default MyApp;
