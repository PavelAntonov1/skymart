import { useRef, useState, useReducer } from "react";
import styles from "./SingUpForm.module.css";
import Button from "../../utilities/button/Button";
import Input from "../input/Input";

const emailReducer = (state, action) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        value: action.value,
        isValid: emailRegex.test(action.value),
      };
  }
};

const passwordReducer = (state, action) => {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // min 8 chars, 1 capital letter, 1 lowercase, 1 number, 1 special character

  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        value: action.value,
        isValid: passwordRegex.test(action.value),
      };
  }
};

const passwordRepeatReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        value: action.value,
        isValid: action.value === action.password,
      };
  }
};

const SignUpForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: null,
    isValid: null,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: null,
    isValid: null,
  });

  const [passwordRepeat, dispatchPasswordRepeat] = useReducer(
    passwordRepeatReducer,
    {
      value: null,
      isValid: null,
    }
  );

  const singUpHandler = () => {
    console.log(password, passwordRepeat, email);
  };

  const updateValue = (isEmail = true) => {
    // checks for email by default
    const updateEmail = () => {
      dispatchEmail({
        type: "UPDATE_VALUE",
        value: emailRef.current.value.trim(),
      });
    };

    const updatePassword = () => {
      dispatchPassword({
        type: "UPDATE_VALUE",
        value: passwordRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      });
    };

    const updatePasswordRepeat = () => {
      dispatchPasswordRepeat({
        type: "UPDATE_VALUE",
        value: passwordRepeatRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
      });
    };

    if (isEmail) {
      updateEmail();
    }

    if (!isEmail && isEmail !== null) {
      // password field
      updatePassword();
      updatePasswordRepeat();
    }

    if (!isEmail && isEmail === null) {
      // password repeat field
      updatePasswordRepeat();
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <div className={styles.forms}>
          <Input
            className={
              email.isValid === false && email.value.trim().length > 0
                ? "invalid"
                : ""
            }
            type="email"
            placeholder="Enter your email"
            name="userEmail"
            ref={emailRef}
            value={email.value ?? ""}
            onChange={updateValue}
          />

          <Input
            className={
              password.isValid === false && password.value.trim().length > 0
                ? "invalid"
                : ""
            }
            type="password"
            placeholder="Enter your password"
            name="userPassword"
            ref={passwordRef}
            value={password.value ?? ""}
            onChange={updateValue.bind(null, false)}
          />

          <Input
            className={passwordRepeat.isValid === false ? "invalid" : ""}
            type="password"
            placeholder="Repeat your password"
            name="userPassword"
            ref={passwordRepeatRef}
            value={passwordRepeat.value ?? ""}
            onChange={updateValue.bind(null, null)}
          />
        </div>

        <p>
          Your password must meet the following requirements:
          <ul>
            <li>Be at least 8 characters in length</li>
            <li>Contain at least one uppercase letter</li>
            <li>Contain at least one lowercase letter</li>
            <li>Contain at least one number</li>
            <li>Contain at least one special character</li>
          </ul>
        </p>
      </div>

      <Button
        type="button"
        onClick={singUpHandler}
        disabled={
          !(email.isValid && password.isValid && passwordRepeat.isValid)
        }
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
