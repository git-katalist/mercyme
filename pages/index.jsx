// import Head from "next/head";
import { prefix } from "../utils/prefix";
import Meta from "../components/seo/Meta";
import HomeCard from "../components/home/HomeCard";
import { ProductCards } from "../components/home/HomeCardsStyles";
const webUrl = "/FaceMask-Small.svg";

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
        <ProductCards>
          <HomeCard
            header="Face Masks"
            image={prefix + webUrl}
            text="Masks are made to contain droplets and particles you breathe, cough, or sneeze out"
            pager={`${prefix}/products/face-mask `}
            id="facemask"
          />
          <HomeCard
            header="Ventilators"
            text="A ventilator is a device that supports breathing by pumping air into the lungs."
          />
          <HomeCard
            header="Medical Gloves"
            text="Use medical gloves when your hands may touch potentially contaminated items."
          />
          <HomeCard
            header="Sofwave"
            text="Sofwave™ is the latest technology to revitalize the skin through innovative stimulation"
          />
          <HomeCard
            header="Coveralls"
            text="Clothing  designed to protect against dirt or other outside contaminants"
          />
          <HomeCard
            header="Aesthetic Laser"
            text="Aesthetic Laser can be used to treat acne scars, facial wrinkles, and other skin blemishes."
          />
          <HomeCard
            header="ECG Monitors"
            text="ECG is a non-invasive diagnostic and investigating the severity of cardiovascular diseases."
          />
          <HomeCard header="Medical Diagnostics" />
          <HomeCard header="Much much more" />
        </ProductCards>
      </main>
    </>
  );
}
