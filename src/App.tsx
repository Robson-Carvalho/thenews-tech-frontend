import { BrowserRouter, Routes, Route } from "react-router";

import { ToastContainer } from "react-toastify";

import { Home } from "./pages/home";
import { Unsubscribe } from "./pages/unsubscribe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="unsubscribe/:email" element={<Unsubscribe />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
};

export { App };
