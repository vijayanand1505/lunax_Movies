import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { username, email, password })
      .then((result) => {
        console.log(result);
        setShowAlert(true); // Show the success alert
        setTimeout(() => {
          setShowAlert(false); // Hide the alert after a delay (e.g., 3 seconds)
          navigate("/");
        }, 3000); // Adjust the delay as needed (3 seconds in this example)
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="body-content">
      <div class="content">
        <div class="text">SignUp</div>

        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Registration completed successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <div class="field">
            <span class="bx bxs-user"></span>
            <input
              type="username"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div class="field">
            <span class="bx bxs-envelope"></span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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

          <button>Signup</button>
          {/* <h4>or Sign up with social platforms</h4>

        <div class="social_icons">
          <i class="bi bi-facebook"></i>
          <i class="bx bxl-discord-alt"></i>
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-dribbble"></i>
        </div> */}

          <div class="foot">
            <span>Already have an account?</span>
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
