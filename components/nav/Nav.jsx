import Image from "next/image";
import Link from "next/link";
import { StyledNav, LogoWrapper, Logo, Links } from "./StyledNav";
const flavicon = "/favicon.ico";
import { prefix } from "../../utils/prefix";

const Nav = () => (
  <StyledNav>
    <LogoWrapper>
      <Logo src={prefix + flavicon} alt="" />
      {/* <Logo /> */}
    </LogoWrapper>
    <Links>
      <Link href="#"></Link>
      <Link href="#"></Link>
      <Link href="#"></Link>
    </Links>
  </StyledNav>
);

export default Nav;
