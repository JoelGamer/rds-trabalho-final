import { FC } from "react";
import { useNavigate } from "react-router";
import { Container, RouteButton, Wrapper } from "./styles";

const HeaderButton: FC<HeaderButtonProps> = (props) => {
  const navigation = useNavigate();
  
  const onClick = () => {
    navigation(props.route.goto);
  }
  
  return (
    <RouteButton onClick={onClick}>
      {props.route.title}
    </RouteButton>
  );
};

interface HeaderButtonProps {
  route: Route;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <Container>
      <Wrapper>
        {props.routes.map((route) => (
          <HeaderButton route={route} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Header;

interface Route {
  title: string;
  goto: string;
}

interface HeaderProps {
  routes: Route[];
}
