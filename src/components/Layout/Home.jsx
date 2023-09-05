import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export default Home;
