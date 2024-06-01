import { useEffect } from "react";
import Sidebar from "../../dashboard/components/Sidebar";
import Style from "../styles/Dashboard.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import Headder from "../components/Dashboard-header";

const Dashboard = () => {
  const navigate = useNavigate();
  const getAdmin = localStorage.getItem("admin");
  const adminAuth = JSON.parse(getAdmin);
  const { adminToken } = adminAuth || {};

  useEffect(() => {
    if (!adminToken) {
      navigate("/dashboard/login");
    }
  }, [adminToken, navigate]);

  return (
    <div className={Style.dashboard}>
      <div className={Style.dashboardContainer}>
        <Sidebar />
        <div className={Style.dashboardContent}>
          <Headder />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
