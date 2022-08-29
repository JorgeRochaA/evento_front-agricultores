import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../services/auth";

interface params {
	children: React.ReactNode;
	rol: string;
	page: string;
}

const privateRoute = (params: params): any => {
	const token = getToken();

	if (!token) {
		return <Navigate to="/login" replace={true} />;
	}

	if (params.rol === "MAYORISTA" && params.page === "wholesalers") {
		return <Navigate to="/messages" replace={true} />;
	}

	return params.children;
};

export default privateRoute;
