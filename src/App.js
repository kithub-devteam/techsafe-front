import React from "react";
import Routes from "./routers";
import { AuthProvider } from './Authentications';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
