import { Container, Content, Left, Right } from "../styles/Auth";
import Signin from "../components/auth/Signin";

const Auth = () => {
  return (
    <Container>
      <Content>
        <Left></Left>
        <Right>
          <Signin />
        </Right>
      </Content>
    </Container>
  );
};

export default Auth;
