import { Head } from "next/document";
import { render } from "react-dom";
import { prefix } from "../../utils/prefix";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`${prefix}/favicon.ico`} />
    </Head>
  );
};

export default Meta;
