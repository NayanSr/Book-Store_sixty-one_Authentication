import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { logIn, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  //!
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // setUser(loggedUser);
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 style={{ fontSize: "35px", textAlign: "center" }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-controll">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="eField"
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-controll">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="pField"
            required
            placeholder="Your Password"
          />

          <span onClick={() => setShow(!show)}>
            {show ? <h3>Hide Password</h3> : <h3>Show Password</h3>}
          </span>
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
