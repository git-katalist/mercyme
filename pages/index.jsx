// import Head from "next/head";
import { prefix } from "../utils/prefix";
import Meta from "../components/seo/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="How are you today"
        description="Tsotetsi was here and loving it"
        keywords="We are here today"
      />
      {/* <Head>
        <title>How are you today</title>
        <meta name="description" content="what's you story" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head> */}

      <main>
        <h1>Hello Beautiful world!</h1>
      </main>
    </>
  );
}
