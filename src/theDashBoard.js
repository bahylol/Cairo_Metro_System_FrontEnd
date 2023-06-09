// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/Dashboard';
// first put your new pages here
// import Topbar from "./scenes/global/Topbar";
import Sidebar from './scenes/global/Sidebar';
function theDashBoard({ userType }) {
	//   const [theme, colorMode] = useMode();
	console.log('dahhhhhhhhhh');
	return (
		// <ColorModeContext.Provider value={colorMode}>
		//   <ThemeProvider theme={theme}>
		// <CssBaseline />
		<div className="app">
			{/* <Sidebar /> */}
			<main className="content">
				{/* <Sidebar   userType={userType}/> */}
				<Routes>
					<Route path="/" element={<Dashboard userType={userType} />} />
					{/* second put your page line here  */}
					{/* <Route path="/Dashboard/team" element={<Team />} />
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
              /> */}
				</Routes>
			</main>
		</div>
	);
}

export default theDashBoard;