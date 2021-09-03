import React, { useState } from "react";
import "./joinus.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../userSlice";

const Joinus = () => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const history = useHistory();
  const dispatch = useDispatch();
  const [signup, setSignup] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    confirmPassword: "",
  });
  const click = () => {
    console.log(re.test(signup.Email));
    if (!signup.FirstName || signup.FirstName.trim().length === 0) {
      alert("Please enter FirstName!");
      return;
    }
    if (!signup.LastName || signup.LastName.trim().length === 0) {
      alert("Please enter LastName!");
      return;
    }
    if (
      !signup.Email ||
      signup.Email.trim().length === 0 ||
      !re.test(signup.Email)
    ) {
      alert("Please enter valid Email!");
      return;
    }
    if (!signup.Password || signup.Password.trim().length === 0) {
      alert("Please enter Password!");
      return;
    }
    if (
      !signup.confirmPassword ||
      signup.confirmPassword.trim().length === 0 ||
      signup.Password !== signup.confirmPassword
    ) {
      alert("Password doesn't match!");
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2b$10$lXM9gx6or6dEpvEUXU4e9eFT2Hh1.YtTG1.nGV7BVL.5vddYiKgUa",
      "X-Collection-Id": "6130b9ff2f1cab416bd263be",
    };
    axios
      .post("https://api.jsonbin.io/v3/b", signup, { headers })
      .then((response) => {
        alert("success");
        dispatch(setUser({ user: signup.FirstName }));
        setSignup({
          FirstName: "",
          LastName: "",
          Email: "",
          Password: "",
          confirmPassword: "",
        });
        history.push("/account");
      });
  };

  return (
    <div className="article article-main ">
      <div className="article__inner">
        <div className="main-section text">
          <h2>Join us for free</h2>
          <div className=" article-subtitle">
            <p>Together we make the new system</p>
          </div>
          <input
            type="text"
            name="fname"
            placeholder="First name"
            className="input"
            value={signup.FirstName}
            onChange={(event) =>
              setSignup({ ...signup, FirstName: event.target.value })
            }
          />
          <input
            type="text"
            name="lname"
            placeholder="Last name"
            className="input"
            value={signup.LastName}
            onChange={(event) =>
              setSignup({ ...signup, LastName: event.target.value })
            }
          />
          <br />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="input lg-input"
            value={signup.Email}
            onChange={(event) =>
              setSignup({ ...signup, Email: event.target.value })
            }
          />
          <br />
          <input
            type="Password"
            name="Password"
            placeholder="Password"
            className="input lg-input"
            value={signup.Password}
            onChange={(event) =>
              setSignup({ ...signup, Password: event.target.value })
            }
          />
          <br />
          <input
            type="Password"
            name="Password"
            placeholder="Confirm Password"
            className="input lg-input"
            value={signup.confirmPassword}
            onChange={(event) =>
              setSignup({ ...signup, confirmPassword: event.target.value })
            }
          />
          <br />
          <button onClick={click}>Join us</button>
        </div>
      </div>
    </div>
  );
};
export default Joinus;
