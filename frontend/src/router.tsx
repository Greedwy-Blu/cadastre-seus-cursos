import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import HomePage from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Error from "./components/Error";
import Study from "./components/app/study";
import Profile from "./components/app/profile";
import { HeaderApp } from "./components/app/Header";
import Header from "./components/Header";

export default function Routers() {
  return (
    <BrowserRouter>
   <Header />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="Home/login" element={<Login />} />

        <Route path="Home/register" element={<Register />} />

        <Route path="*" element={<Error />} />
        <Route path="/app" element={<HeaderApp />}></Route>
        <Route path="/app/study" element={<Study />} />
        <Route path="/app/profile" element={<Profile />} />

        <Route path="*" element={<Error />} />

      </Routes>




    </BrowserRouter>
  );
}
