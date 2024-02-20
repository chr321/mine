import React, { useState, useContext } from "react";
import LayOut from "../../LayOut/LayOut";
import Logo from "../../../assets/amazon_logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./auth.css";
import { auth } from "../../../Utility/firebas";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/action.type";
import { ClipLoader, FadeLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    Sign_in: false,
    Sign_UP: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  console.log(navStateData);

  //  console.log(user);

  // console.log(email, password);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "Sign_in") {
      setLoading({ ...loading, Sign_in: true });

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, Sign_in: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);

          setLoading({ ...loading, Sign_in: false });
        });
    } else {
      setLoading({ ...loading, Sign_in: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, Sign_in: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err);
          setError(err.message);

          setLoading({ ...loading, Sign_in: false });
        });
    }
  };

  return (
    <section className="signUp_Container">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <div className="SignUP_Box">
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}>
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="" className="signUP_Form">
          <div>
            <label htmlFor="">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="signup_Email"
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="signup_Password"
            />
          </div>
          <button
            type="submit"
            name="Sign_in"
            onClick={authHandler}
            className="logIn_btn">
            {loading.Sign_in ? (
              <ClipLoader color="#36d7b7" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          name="Sign_UP"
          onClick={authHandler}
          className="signUP_btn">
          {loading.Sign_UP ? (
            <ClipLoader color="#36d7b7" size={15}></ClipLoader>
          ) : (
            " Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
