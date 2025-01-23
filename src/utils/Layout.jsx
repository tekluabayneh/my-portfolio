import React, { Suspense } from "react";
import Mainheader from "../components/header/header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Mainheader />
      </Suspense>
      <Outlet />
    </>
  );
};

export default Layout;
