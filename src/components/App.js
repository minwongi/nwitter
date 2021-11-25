import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  // console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [newName, setNewName] = useState("");
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // setIsLoggedIn(true);
        // setUserObj(user);
        // } else {
        // setIsLoggedIn(false);

        //ㄴㅁㅇㅁㄴㅇㅁㄴㅇ
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
      // console.log(user);
    });
  }, []);

  // console.log(authService.currentUser);

  // setInterval(() => {
  //   console.log(authService.currentUser)
  // }, 2000)

  const refreshUser = () => {
    // console.log(authService.currentUser.displayName);
    // setUserObj(authService.currentUser);

    // ㄴㅇㅁㅇㅁㄴㅇ
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });

    // setUserObj({ ...authService.currentUser });
    // setNewName(user.displayName)
    // setUserObj({ displayName: "BS" });
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing...."
      )}
      {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;
