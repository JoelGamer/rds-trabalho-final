import { FC, useEffect, useState } from "react";

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
    <div>
      <div>
        Server IP:
        <input onChange={(e) => setServerIp(e.target.value)} value={serverIp} />
      </div>
      <div>
        Server Port:
        <input onChange={(e) => setServerPort(e.target.value)} value={serverPort} />
      </div>
      <div>
        Save Changes:
        <button onClick={onSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Configuration;
