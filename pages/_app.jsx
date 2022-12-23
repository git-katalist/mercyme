import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import { Global } from "../styles/global";
import { prefix } from "../utils/prefix";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      <Component {...pageProps} prefix={prefix} />
    </ThemeProvider>
  );
}

export default MyApp;
