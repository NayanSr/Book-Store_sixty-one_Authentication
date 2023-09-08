import { Link } from "react-router-dom";
import "./Signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handelSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    // console.log(email, password, confirmPassword);

    setError("");
    if (password !== confirmPassword) {
      setError("Password do not maatched");
      return;
    } else if (password.length < 6) {
      setError("Password should be six character atlest");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 style={{ fontSize: "35px", textAlign: "center" }}>Please Sign-Up</h2>
      <form onSubmit={handelSignup}>
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
        <div className="form-controll">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Your Password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign-Up" />
      </form>
      <p style={{ fontSize: "25px", fontWeight: "500", marginTop: "50px" }}>
        Already have an account ?{" "}
        <Link style={{ color: "red" }} to="/login">
          Log-In
        </Link>{" "}
      </p>
      <p className="error">{error}</p>
    </div>
  );
};

export default Signup;
