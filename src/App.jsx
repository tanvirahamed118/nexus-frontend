import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AboutInfo from "./component/About-info";
import Posts from "./component/Posts";
import DescriptionTab from "./component/Description-tab";
import DashboardLogin from "./dashboard/pages/Dashboard-login";
import Dashboard from "./dashboard/pages/Dashboard";
import DashboardHeader from "./dashboard/components/Dashboard-header";
import DashboardEvents from "./dashboard/components/Dashboard-events";
import Layout from "./component/Layout";
import CreateEvent from "./dashboard/pages/Create-event";
import UpdateEvent from "./dashboard/pages/Update-event";
import DashboardUsers from "./dashboard/components/Dashboard-users";
import UpdateUser from "./dashboard/pages/Update-user";
import DashboardEmails from "./dashboard/components/Dashboard-emails";
import UpdateEmail from "./dashboard/pages/Update-email";
import AdminSetting from "./dashboard/pages/Admin-setting";
import AdminProfile from "./dashboard/pages/Admin-profile";
import DashboardSingleEvent from "./dashboard/pages/Dashboard-Single-event";
import DashboardSingleUser from "./dashboard/pages/Dashboard-single-user";
import DashboardSingleEmail from "./dashboard/pages/Dashboard-single-email";
import DashboardSubmissions from "./dashboard/components/Dashboard-submissions";
import DashboardSingleSubmit from "./dashboard/pages/Dashboard-single-submit";
import UpdateSubmission from "./dashboard/pages/Update-submission";
import DashboardBrands from "./dashboard/components/Dashboard-brands";
import DashboardSingleBrand from "./dashboard/pages/Dashboard-single-brand";
import UpdateBrand from "./dashboard/pages/Update-brand";
import ErrorPage from "./dashboard/pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/brand"
          element={
            <Layout>
              <Brand />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/reset"
          element={
            <Layout>
              <Reset />
            </Layout>
          }
        />
        <Route
          path="/check-otp"
          element={
            <Layout>
              <CheckOTP />
            </Layout>
          }
        />
        <Route
          path="/change-password"
          element={
            <Layout>
              <ChangePass />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/event"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/event/:id"
          element={
            <Layout>
              <SingleEvent />
            </Layout>
          }
        />
        <Route
          path="/my-event"
          element={
            <Layout>
              <MyEvent />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        >
          <Route path="/user-profile" element={<AboutInfo />} />
          <Route path="/user-profile/posts" element={<Posts />} />
        </Route>
        <Route
          path="/faq"
          element={
            <Layout>
              <Faq />
            </Layout>
          }
        />
        <Route
          path="/terms-condition"
          element={
            <Layout>
              <TermsAndCodition />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/brand-contract"
          element={
            <Layout>
              <BrandContract />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        >
          <Route path="/account" element={<AccountTab />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
          <Route path="/account/description" element={<DescriptionTab />} />
          <Route path="/account/privacy" element={<PrivacyTab />} />
          <Route path="/account/delete" element={<DeleteAccountTab />} />
        </Route>

        <Route path="/dashboard/login" element={<DashboardLogin />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<DashboardHeader />} />
          <Route path="/dashboard" element={<DashboardEvents />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/users/update/:id" element={<UpdateUser />} />
          <Route
            path="/dashboard/users/single/:id"
            element={<DashboardSingleUser />}
          />
          <Route path="/dashboard/events" element={<DashboardEvents />} />
          <Route path="/dashboard/create" element={<CreateEvent />} />
          <Route path="/dashboard/event/update/:id" element={<UpdateEvent />} />
          <Route
            path="/dashboard/event/single/:id"
            element={<DashboardSingleEvent />}
          />
          <Route path="/dashboard/emails" element={<DashboardEmails />} />
          <Route
            path="/dashboard/emails/update/:id"
            element={<UpdateEmail />}
          />
          <Route
            path="/dashboard/emails/single/:id"
            element={<DashboardSingleEmail />}
          />
          <Route path="/dashboard/setting" element={<AdminSetting />} />
          <Route path="/dashboard/profile" element={<AdminProfile />} />

          <Route
            path="/dashboard/submissions"
            element={<DashboardSubmissions />}
          />
          <Route
            path="/dashboard/submissions/single/:id"
            element={<DashboardSingleSubmit />}
          />
          <Route
            path="/dashboard/submissions/update/:id"
            element={<UpdateSubmission />}
          />
          <Route path="/dashboard/brands" element={<DashboardBrands />} />
          <Route
            path="/dashboard/brands/single/:id"
            element={<DashboardSingleBrand />}
          />
          <Route
            path="/dashboard/brands/update/:id"
            element={<UpdateBrand />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
