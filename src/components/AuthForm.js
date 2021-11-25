import Auth from "routes/Auth";
import React from "react";
import { useState } from "react/cjs/react.development";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    //    console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    // console.log(value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      let data;
      if (newAccount) {
        // create account
        const data = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("가입");
        console.log(data);
      } else {
        // log in
        // const data = await signInWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password);
        console.log("로그인");
        // console.log(data);
      }
      console.log("data");
      console.log(data);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      console.log(error);
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <input
          type="submit"
          className="authInput authSubmit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign in" : "Create Account"}
      </span>
    </>
  );
}

export default AuthForm;
