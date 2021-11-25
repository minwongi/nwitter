import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route exact path="/" element={<Home userObj={userObj} />} />
              <Route
                exact
                path="/profile"
                element={
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                }
              />
              {/* <Redirect from="*" to="/" /> */}
              {/* afterSubmit={() => navigate("/")} */}
              {/* <Route exact path="*" element={<Navigate replace to="/" />} /> */}
            </>
          ) : (
            <>
              <Route exact path="/" element={<Auth />} />
              {/* <Redirect from="*" to="/" /> */}
              {/* afterSubmit={() => navigate("/")} */}
              {/* <Route exact path="*" element={<Navigate replace to="/" />} /> */}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
