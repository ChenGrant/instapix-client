import React, { useContext } from "react";
import Logout from "./Logout";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Photos from "./Photos";
import Posts from "./Posts";

const Profile = () => {
  const user = useContext(UserContext);

  if (!user) return <Navigate to={"/"} />;

  return (
    <div>
      <h1>Profile</h1>
      <h3>Todo</h3>
      <ul>
        <li>implement resume stuff</li>
        <li>make frontend nice: https://simplified.com/ai-writer/photo-captions-generator</li>
      </ul>
      <Posts />
      <Photos />
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Profile;
