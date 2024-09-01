import { useState } from "react";
import styles from "./Login.module.css";
import { contactsApi } from "../../api/contactApi";
function Login({ setUser, setSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const response = contactsApi.LoginContact(username, password);
    response.then((data) => {
      setUser(data);
      console.log(data);
      localStorage.setItem("user", data.user);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("contactId", data.user.contact_id);
      localStorage.setItem("token", data.access_token);
    });
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginTitle}>Breeze</h3>
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
          <button className={styles.loginButton} onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div className={styles.loginRight}>
          <h3 className={styles.loginRightTitle}>Welcome to Breeze!</h3>
          <p className={styles.loginRightDesc}>
            Welcome back! We are happy to have you here.
          </p>
          <button
            className={styles.loginRightButton}
            onClick={() => setSignup(true)}
          >
            No account yet? Signup.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
