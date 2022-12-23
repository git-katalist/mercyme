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

# copy to pages/\_App.js

```
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
```

# copy to pages/\_document.js

```
touch pages/_document.js
```

```
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  //--------------For styled-components only------------//
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  //---------------------------------------------------//
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

# copy to next.config.js

```
/** @type {import('next').NextConfig} */

const { prefix } = "./utils/prefix";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;

```

<!-- change the # prefix to the repo name -->
