import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    config.autoAddCss = false;

    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
          <style>{dom.css()}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
