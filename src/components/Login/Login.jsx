import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container">
      <h2 style={{ fontSize: "35px", textAlign: "center" }}>Login</h2>
      <form>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Your Password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p
        style={{
          fontSize: "25px",
          fontWeight: "500",
          marginTop: "50px",
        }}
      >
        New User ?{" "}
        <Link style={{ color: "red" }} to="/signup">
          Sign-Up
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
