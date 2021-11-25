import { dbService, storageService } from "fbase";
import {
  addDoc,
  getDocs,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  // console.log(userObj);

  const [nweets, setNweets] = useState([]);

  // const getNweets = async () => {
  //   const q = query(collection(dbService, "nweets"));
  //   const querySnapshot = await getDocs(q);

  //   // const dbNweets = await getDocs(collection(dbService, "nweets"));
  //   // //console.log(dbNweets);
  //   // dbNweets.forEach((document) => {
  //   //   // console.log(document.data());
  //   //   const nweetObject = {
  //   //     ...document.data(),
  //   //     id: document.id,
  //   //   };
  //   //   setNweets((prev) => [nweetObject, ...prev]);
  //   // });

  //   querySnapshot.forEach((doc) => {
  //     const nweetObj = {
  //       ...doc.data(),
  //       id: doc.id,
  //     };
  //     setNweets((prev) => [nweetObj, ...prev]);
  //   });
  // };
  useEffect(() => {
    // getNweets();
    onSnapshot(collection(dbService, "nweets"), (snapshot) => {
      // console.log(snapshot.docs);
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(nweetArray);
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
