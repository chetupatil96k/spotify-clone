import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/HomePage.tsx";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
import { axiosInstance } from "./lib/axios.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";


function App() {
 



  return (
    <>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
       signInForceRedirectUrl={"/auth-callback"}
       />} />
       <Route path="/auth-callback" element={<AuthCallbackPage />} />
     </Routes>
    </>
  );
}

export default App;