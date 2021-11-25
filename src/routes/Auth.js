import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    console.log(event.target.name);
    const {
      target: { name },
    } = event;
    const auth = getAuth();

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    if (name === "google") {
      // provider = new GoogleAuthProvider();
      signInWithPopup(auth, providerGoogle)
        .then((result) => {
          let credential = GoogleAuthProvider.credentialFromResult(result);
          let token = credential.accessToken;
          let user = result.user;
          console.log("Google데이터 성공", credential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log("Google데이터 실패", credential);
        });
    } else if (name === "github") {
      // provider = new GithubAuthProvider();
      signInWithPopup(auth, providerGithub)
        .then((result) => {
          let credential = GithubAuthProvider.credentialFromResult(result);
          let token = credential.accessToken;
          let user = result.user;
          console.log("Github데이터 성공", credential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GithubAuthProvider.credentialFromError(error);
          console.log("Github데이터 실패", credential);
        });
    }
    // const data = await signInWithPopup(provider);
    // console.log(" 데이터터터터",data);
  };

  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
export default Auth;
