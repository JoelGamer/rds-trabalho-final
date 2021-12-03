import { FC, useState } from "react";
import { Container } from "../../components/ui/Container";
import loginService from "../../services/login-service";
import { ConfirmContainer, FormContainer, InputContainer, LoginContainer } from "./styles";

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = () => {
    loginService.login({ email, password });
  };

  return (
    <Container>
      <LoginContainer>
        <FormContainer>
          <InputContainer>
            Email:
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
          </InputContainer>
          <InputContainer>
            Password:
            <input onChange={(e) => setPassword(e.target.value)} value={password} />
          </InputContainer>
        </FormContainer>
        <ConfirmContainer>
          <button onClick={onLoginClick}>
            Login
          </button>
        </ConfirmContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
