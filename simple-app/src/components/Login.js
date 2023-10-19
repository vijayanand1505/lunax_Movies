import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:3001/", { email, password })
      .then((result) => {
        console.log(result);

        if (result.data === "success") {
          navigate("/firstpage");
        } else {
          setShowAlert(true); // Show the success alert
          setTimeout(() => {
            setShowAlert(false); // Hide the alert after a delay (e.g., 3 seconds)
            navigate("/");
          }, 3000); // Adjust the delay as needed (3 seconds in this example)
          //alert("Invalid Credentials");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="body-content">
      <div class="content">
        <div class="text">LogIn</div>

        {showAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Invalid Credentials!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <div class="field">
            <span class="bx bxs-envelope"></span>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div class="field">
            <span class="bx bxs-lock-alt"></span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button>Login</button>
          {/* <h4>or Sign up with social platforms</h4>

        <div class="social_icons">
          <i class="bi bi-facebook"></i>
          <i class="bx bxl-discord-alt"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-dribbble"></i>
        </div> */}

          <div class="foot">
            <span>Don't have an account?</span>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              Sign up
            </Link>
          </div>
        </form>

        {/* <div class="dark-light" onClick={myFunction()}>
        <i class="bx bx-moon moon"></i>
        <i class="bx bx-sun sun"></i>
      </div> */}
      </div>
    </div>
  );
}

export default Login;
