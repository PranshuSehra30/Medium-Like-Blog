import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { memo } from "react";
import About from "./components/About";
import { Navigate } from 'react-router-dom';

function App() {
  const routes = [
    {
      path: "/signup",
      component: <Signup />,
    },
    {
      path: "/signin",
      component: <Signin />,
    },
    {
      path: "/blog/:id",
      component: <Blog />,
    },
    {
      path: "/blogs",
      component: <Blogs />,
    },
    {
      path: "/publish",
      component: <Publish />,
    },
    {
      path: "/",
      component: <Home />,
    },
    {
      path:"/About",
      component: <About />,

    }
  ];

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default memo(App);
