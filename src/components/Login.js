import React, { useState, useEffect, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../config/fire";
import { AuthContext } from "../context/AuthContext";
import "../App.css";
import { useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const history = useHistory();


  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);



  async function handleSubmit(event) {
    event.preventDefault();

    try {
      //User Has Authenticated
      await fire.auth();

      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }


  // {user ? (
  //   <HeroSection handleLogout={handleLogout} />
  // ) : (
  //   <Login
  //     email={email}
  //     setEmail={setEmail}
  //     password={password}
  //     setPassword={setPassword}
  //     handleLogin={handleLogin}
  //     handleSignUp={handleSignUp}
  //     hasAccount={hasAccount}
  //     setHasAccount={setHasAccount}
  //     emailError={emailError}
  //     passwordError={passwordError}
  //   />
  //   )

  return (
    <section className="login">
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          {hasAccount ? (
            <h1 onClick={() => setHasAccount(!hasAccount)}>Sign In</h1>
          ) : (
            <h1 onClick={() => setHasAccount(!hasAccount)}>Sign Up</h1>
          )}

          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button type="submit" onClick={handleLogin}>
                  Sign In
                </button>
                <p>
                  Don't have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button type="submit"  onClick={handleSignUp}>
                  Sign Up
                </button>
                <p>
                  Have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>

       
        </form>
      </div>
    </section>
  );

  
};

// const Login = ({ history }) => {
//   const handleLogin = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await app
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/" />;
//   }
//   return (
//     <section className="login">

//       <div className="loginContainer">
//       <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <label>Email</label>
//           <input name="email" type="email" autoFocus/>
//           <p className='error message'/>
//           <label>password</label>
//           <input name="password" type="password"  />
//         <div className="btnContainer">
//           <button type="submit">Login</button>
//           <p>Don't have an account?<span>Sign Up</span></p>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

export default Login;
