import { useState } from "react";
import styles from "./Signup.module.css";
import { contactsApi } from "../../api/contactApi";

function Signup({ setSignup }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignUp() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = contactsApi.SignupContact(
      firstName,
      lastName,
      phoneNumber,
      username,
      password
    );
    response.then((data) => {
      setSignup(false);
    });
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginTitle}>Breeze</h3>
          <input
            placeholder="First Name"
            className={styles.loginInput}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            className={styles.loginInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Phone number"
            className={styles.loginInput}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            placeholder="Username"
            className={styles.loginInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            className={styles.loginInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            className={styles.loginInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className={styles.loginButton} onClick={handleSignUp}>
            Sign up
          </button>
        </div>
        <div className={styles.loginRight}>
          <h3 className={styles.loginRightTitle}>Welcome to Breeze!</h3>
          <p className={styles.loginRightDesc}>
            Welcome to Breeze! We are happy to have you here.
          </p>
          <button
            className={styles.loginRightButton}
            onClick={() => setSignup(false)}
          >
            Already registered? Login.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
