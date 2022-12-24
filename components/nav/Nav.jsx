import Link from "next/link";
import { StyledNav, LogoWrapper, Logo, Links } from "./StyledNav";
const favicon = "/favicon.ico";
import { prefix } from "../../utils/prefix";
import { navLinks } from "../../data/constants";

const Nav = () => (
  <StyledNav>
    <LogoWrapper>
      <Logo src={prefix + favicon} alt="" />
      {/* <img src={prefix + favicon.src} alt="" /> */}
      {/* <Logo /> */}
    </LogoWrapper>
    <Links>
      {navLinks.map((item, index) => (
        <Link href={item.linkUrl} key={index}>
          {item.name}
        </Link>
      ))}
    </Links>
  </StyledNav>
);

export default Nav;
