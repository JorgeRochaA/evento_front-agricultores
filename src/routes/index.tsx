import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import UserRegister from "../pages/user-register";
import WholesalersPanel from "../pages/wholesalers-panel";
import MessagesPanel from "../pages/message-panel";
import PrivateRoute from "../hocs/privateRoute";
import Page404 from "../pages/page-404";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/auth";

const routes = () => {
	const user = useAppSelector(selectUser);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<UserRegister />} />
			<Route
				path="/messages"
				element={
					<PrivateRoute rol={user.appUserRole} page="messages">
						<MessagesPanel />
					</PrivateRoute>
				}
			/>
			<Route
				path="/wholesalers"
				element={
					<PrivateRoute rol={user.appUserRole} page="wholesalers">
						<WholesalersPanel />
					</PrivateRoute>
				}
			/>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};

export default routes;
