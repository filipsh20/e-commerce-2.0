import { Container, Content, Left, Right } from "../styles/Auth";
import Signin from "../components/auth/Signin";
import Slider from "../components/auth/Slider";

const Auth = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Slider />
        </Left>
        <Right>
          <Signin />
        </Right>
      </Content>
    </Container>
  );
};

export default Auth;
