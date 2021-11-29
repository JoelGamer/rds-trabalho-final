import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configuration from "./pages/configuration";
import Login from "./pages/login";

const App = () => {

  useEffect(() => {
    const ip = localStorage.getItem('rds-server-ip');
    const port = localStorage.getItem('rds-server-port');

    if (!ip) {
      localStorage.setItem('rds-server-ip', '127.0.0.1');
    }
    
    if (!port) {
      localStorage.setItem('rds-server-port', '8888');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="configuration" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
