import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import Loading from "./components/Loading/Loading";
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Work = React.lazy(() => import("./pages/Work/Work"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));

const AppRouter = () => {
  const [isloding, setisloading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setisloading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {isloding ? (
        <Loading />
      ) : (
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      )}
    </div>
  );
};

export default AppRouter;
