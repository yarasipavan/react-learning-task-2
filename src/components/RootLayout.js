import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <div className="mb-4">
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
}

export default RootLayout;
