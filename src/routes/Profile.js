import { authService, dbService } from "fbase";
import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { useState } from "react/cjs/react.development";
import { getAuth, updateProfile } from "firebase/auth";

export default ({ refreshUser, userObj }) => {
  //   const history = useHistory();
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  // const getMyNweets = async () => {
  //   const nweets = await dbService
  //     .collection("nweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt")
  //     .get();
  //   console.log(nweets.docs.map((doc) => doc.data()));
  // };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
      // orderBy("createdAt")
      // get()
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log("드렁오냐?");
      // console.log(doc.id, " => ", doc.data());
      console.log(querySnapshot.docs.map((doc) => doc.data()));
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    if (userObj.displayName !== newDisplayName) {
      // console.log(updateProfile(auth.currentUser, {}));
      // console.log(userObj.updateProfile);
      // await userObj.updateProfile({
      //   displayName: newDisplayName,
      // });

      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        displayName: newDisplayName,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });

      // await updateProfile(userObj, { displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
