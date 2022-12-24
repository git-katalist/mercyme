import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
`;
const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`;
const Links = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    text-decoration: none;
    color: whitesmoke;
    text-transform: uppercase;
  }
`;

export { StyledNav, LogoWrapper, Logo, Links };
