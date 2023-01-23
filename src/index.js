import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import store from "./redux/store"; **store={store}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserRegister from "./pages/User-register/UserRegister";
import PartnerRegister from "./pages/Partner-register/PartnerRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} /> {/*<Login />*/}
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/partner-register" element={<PartnerRegister />} />
    </Routes>
  </BrowserRouter>
);
