import { useRef, useState } from "react";
import Button from "../../utilities/button/Button";
import Input from "../input/Input";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const updateEmail = () => {
    setEmail(emailRef.current.value.trim());
  };

  const updatePassword = () => {
    setPassword(passwordRef.current.value.trim());
  };

  const loginHandler = () => {
    console.log(email, password);
  };

  return (
    <form className={styles.form}>
      <div className={styles.forms}>
        <Input
          type="email"
          placeholder="Enter your email"
          name="userEmailLogin"
          ref={emailRef}
          value={email ?? ""}
          onChange={updateEmail}
        />

        <Input
          type="password"
          placeholder="Enter your password"
          name="userPasswordLogin"
          ref={passwordRef}
          value={password ?? ""}
          onChange={updatePassword}
        />
      </div>

      <Button
        disabled={
          !email || !password | (email.length === 0) || password.length === 0
        }
        onClick={loginHandler}
        type="button"
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
