import { FC, useState } from "react";
import loginService from "../../services/login-service";

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = () => {
    loginService.login({ email, password });
  };

  return (
    <div>
      <div>
        Email:
        <input onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div>
        Password:
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <button onClick={onLoginClick}>
        Login
      </button>
    </div>
  );
}

export default Login;
