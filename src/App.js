import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import FirebaseUserListener from "./components/FirebaseUserListener";

const App = () => {
  return (
    <FirebaseUserListener>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </FirebaseUserListener>
  );
};

export default App;
