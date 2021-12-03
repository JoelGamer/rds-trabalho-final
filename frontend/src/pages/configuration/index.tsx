import { FC, useEffect, useState } from "react";
import { Container } from "../../components/ui/Container";
import { ConfirmContainer, FormContainer, InputContainer, LoginContainer } from "./styles";

const Configuration: FC = () => {
  const [serverIp, setServerIp] = useState('');
  const [serverPort, setServerPort] = useState('');

  const onSaveClick = () => {
    localStorage.setItem('rds-server-ip', serverIp);
    localStorage.setItem('rds-server-port', serverPort);
  };

  useEffect(() => {
    let ip = localStorage.getItem('rds-server-ip');
    let port = localStorage.getItem('rds-server-port');

    if (!ip) {
      localStorage.setItem('rds-server-ip', '127.0.0.1');
      ip = '127.0.0.1';
    }
    
    if (!port) {
      localStorage.setItem('rds-server-port', '8888');
      port = '8888';
    }
    
    setServerIp(ip);
    setServerPort(port);
  }, []);

  return (
    <Container>
      <LoginContainer>
        <FormContainer>
          <InputContainer>
            Server IP:
            <input onChange={(e) => setServerIp(e.target.value)} value={serverIp} />
          </InputContainer>
          <InputContainer>
            Server Port:
            <input onChange={(e) => setServerPort(e.target.value)} value={serverPort} />
          </InputContainer>
        </FormContainer>
        <ConfirmContainer>
          <button onClick={onSaveClick}>
            Save
          </button>
        </ConfirmContainer>
      </LoginContainer>
    </Container>
  );
};

export default Configuration;
