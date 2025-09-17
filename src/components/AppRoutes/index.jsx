import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router";
import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";
import ModalDemo from "../../pages/ModalDemo";
import ScrollDemo from "../../pages/ScrollDemo";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/modal-demo" element={<ModalDemo />}></Route>
            <Route path="/scroll-demo" element={<ScrollDemo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
