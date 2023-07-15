import React, { useContext } from "react";
import Login from "./Login";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = useContext(UserContext);
  if (user) return <Navigate to={"/profile"} />;

  return (
    <div>
      Home <Login />
    </div>
  );
};

export default Home;
