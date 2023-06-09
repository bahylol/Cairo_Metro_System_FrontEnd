import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./pages/Navbar/Navbar.js";
import GeneralPage from "./pages/General_Page/General_Page.js";
import Home from "./pages/Home/Home.js";
import Signup from "./pages/Signup-Login/Signup";
import Login from "./pages/Signup-Login/Login";
import RefundRequestPage from "./pages/Refund_Request/Refund_Request.js";
import GetTicket from "./pages/Get_Ticket/Get_Ticket.js";
import Transactions from "./pages/Transactions/Transactions.js";
import ViewSubscription from "./pages/View_Subscription/view_subscription.js";
import NotFound from "./pages/NotFound/notFoundPage.js";
import PageLoadingSkeleton from "./pages/PageLoadingSkeleton.js/pageLoadSkel.js";
import NavBarLoadingSkeleton from "./pages/PageLoadingSkeleton.js/navbarLoadSkel";
import AdminManageRequest from "./pages/admin_manage_requests/AdminManageRequests.js";
import SubscriptionStripe from "./pages/stripe/SubscriptionStripe";

import ForgotPassword from "./pages/Forgot_Password/forgot_password.js";
import ForgotPasswordNewPassword from "./pages/Forgot_Password/resetPage.js";
import TheDashBoard from "./theDashBoard";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
// import SimulateRide from "./pages/google map/Simulate Ride";
// first put your new pages here

import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import RefundRequest from "./scenes/refundRequest";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";

import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calander";
import SimulateTheRide from "./scenes/SimulateTheRidePage";
import Profile from "./scenes/profile";
import Reset_password from "./scenes/Reset_password";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Retrieve the logged-in state from storage, defaulting to false if not found
    const storedLoggedInState = localStorage.getItem("isLoggedIn");
    return storedLoggedInState ? JSON.parse(storedLoggedInState) : false;
  });
  // const [userType, setUserType] = useState('user');
  const [userType, setUserType] = useState(() => {
    const storedUserType = localStorage.getItem("userType");
    return storedUserType ? storedUserType : "user";
  });

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    handleRouteChange();

    return () => {
      clearTimeout(handleRouteChange);
    };
  }, [location]);

  useEffect(() => {
    const hideLoader = () => {
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.opacity = 0;
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    };

    const showContent = () => {
      const content = document.querySelector(".content");
      if (content) {
        content.style.opacity = 1;
      }
    };

    if (!isLoading) {
      setTimeout(() => {
        hideLoader();
        showContent();
      }, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    // Store the logged-in state in localStorage whenever it changes
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  useEffect(() => {
    localStorage.setItem("userType", userType);
  }, [userType]);

  // useEffect(() => {
  // 	const cancelRouteChange = (e) => {
  // 		if (e.currentTarget.pathname === location.pathname) {
  // 			e.preventDefault();
  // 		}
  // 	};

  // 	const links = document.querySelectorAll('a');
  // 	links.forEach((link) => {
  // 		link.addEventListener('click', cancelRouteChange);
  // 	});

  // 	return () => {
  // 		links.forEach((link) => {
  // 			link.removeEventListener('click', cancelRouteChange);
  // 		});
  // 	};
  // }, [location]);

  return (
    <div className="App">
      <div className={`content ${isLoading ? "hide" : ""}`}>
        <div className="Navbar">
          {isLoading ? (
            <NavBarLoadingSkeleton />
          ) : (
            <Navbar
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userType={userType}
              setUserType={setUserType}
            />
          )}
        </div>
        <div className="Page">
          {isLoading ? (
            <PageLoadingSkeleton />
          ) : (
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <Login
                    setIsLoggedIn={setIsLoggedIn}
                    setUserType={setUserType}
                  />
                }
              />
              <Route
                path="/user/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/user/forgot-password/new-password"
                element={<ForgotPasswordNewPassword />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/general-page" element={<GeneralPage />} />
              <Route path="/tickets/" element={<RefundRequestPage />} />
              <Route path="/tickets/purchase" element={<GetTicket />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/subscription" element={<ViewSubscription />} />
              <Route
                path="/SubscriptionStripe"
                element={<SubscriptionStripe />}
              />
              <Route
                path="/admin/managerequest"
                element={<AdminManageRequest />}
              />
              {/* <Route path="/SimulateRide" element={<SimulateRide />} /> */}
              <Route
                path="/dashboard"
                element={<TheDashBoard userType={userType} />}
              />
              {/* <Route path ="/simulateRide"  element={<SimulateRide />} /> */}
              <Route path="/Dashboard/team" element={<Team />} />
              <Route path="/Dashboard/contacts" element={<Contacts />} />
              <Route
                path="/Dashboard/refundRequest"
                element={<RefundRequest />}
              />
              <Route path="/Dashboard/calendar" element={<Calendar />} />
              <Route path="/Dashboard/form" element={<Form />} />
              <Route path="/Dashboard/faq" element={<FAQ />} />
              <Route path="/Dashboard/bar" element={<Bar />} />
              <Route path="/Dashboard/pie" element={<Pie />} />
              <Route path="/Dashboard/line" element={<Line />} />
              <Route path="/Dashboard/geography" element={<Geography />} />
              <Route path="/Dashboard/Profile" element={<Profile />} />
              <Route
                path="/Dashboard/Reset_password"
                element={<Reset_password />}
              />
                 <Route
                path="/simulateRide__"
                element={<SimulateTheRide />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
