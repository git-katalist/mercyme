# Preliminary installs

- Install
  npm i styled-components && npm i -D babel-plugin-styled-components

- copy export script to package.json
  "export": "next build && next export"

# files & folder to create

- mkdir -p components/seo && touch components/seo/Meta.js
- mkdir -p utils/
- rm -rf styles/\*
- touch styles/global.js styles/theme.js

- mkdir utils && touch utils/prefix.js

# Component Directory

import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/theme";
import { Global } from "styles/global";
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
