import Link from "next/link";
import { StyledNav, LogoWrapper, Logo, Links } from "./StyledNav";
import { favicon } from "../../public/index";
import { prefix } from "../../utils/prefix";

const Nav = () => (
  <StyledNav>
    <LogoWrapper>
      <Logo src={prefix + favicon.src} alt="" />
      {/* <img src={prefix + favicon.src} alt="" /> */}
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
