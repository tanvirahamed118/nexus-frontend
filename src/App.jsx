import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import SingleEvent from "./pages/Single-event";
import MyEvent from "./pages/My-event";
import UserProfile from "./pages/User-profile";
import Account from "./pages/Account";
import AccountTab from "./component/Account-tab";
import ChangePassword from "./component/Change-password";
import DeleteAccountTab from "./component/Delete-account-tab";
import PrivacyTab from "./component/Privacy-tab";
import Reset from "./pages/Reset";
import CheckOTP from "./pages/CheckOTP";
import ChangePass from "./pages/ChangePass";
import Faq from "./pages/Faq";
import TermsAndCodition from "./pages/Terms-and-codition";
import Privacy from "./pages/Privacy";
import BrandContract from "./pages/Brand-contract";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/check-otp" element={<CheckOTP />} />
        <Route path="/change-password" element={<ChangePass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route path="/my-event" element={<MyEvent />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-condition" element={<TermsAndCodition />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/brand-contract" element={<BrandContract />} />

        <Route path="/account" element={<Account />}>
          <Route path="/account" element={<AccountTab />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
          <Route path="/account/privacy" element={<PrivacyTab />} />
          <Route path="/account/delete" element={<DeleteAccountTab />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
