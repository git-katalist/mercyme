// import Head from "next/head";
import { prefix } from "../utils/prefix";
import Meta from "../components/seo/Meta";
import StyledHeader from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Meta
        title="How are you today"
        description="Tsotetsi was here and loving it"
        keywords="We are here today"
      />

      <main>
        <h1>Hello Beautiful world!</h1>
        <StyledHeader />
      </main>
    </>
  );
}
