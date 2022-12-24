import { Container } from "../../styles/global";
import Nav from "../nav/Nav";
import { Header } from "./header";

const StyledHeader = () => {
  return (
    <Header>
      <Container fluid>
        <Nav />
      </Container>
    </Header>
  );
};

export default StyledHeader;
