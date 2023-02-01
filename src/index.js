import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//import store from "./redux/store"; **store={store}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserRegister from "./pages/User-register/UserRegister";
import PartnerRegister from "./pages/Partner-register/PartnerRegister";
import ViewPartnerProfile from "./pages/ViewPartner-profile/ViewPartnerProfile";
import ViewUserProfile from "./pages/ViewUser-profile/ViewUserProfile";
import UserHome from "./pages/Home/UserHome";
import HomePage from "./pages/Home/home";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} /> {/*<Login />*/}
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/partner-register" element={<PartnerRegister />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/view-user-profile" element={<ViewUserProfile />} />
      <Route path="/view-partner-profile" element={<ViewPartnerProfile />} />
    </Routes>
  </BrowserRouter>
);
