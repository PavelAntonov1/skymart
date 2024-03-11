import { NavLink } from "react-router-dom";
import LoginForm from "../../components/forms/login/LoginForm";
import SignUpForm from "../../components/forms/signup/SignUpForm";
import Layout from "../../components/utilities/layout/Layout";
import Wave from "../../components/utilities/wave/Wave";

import styles from "./AuthPage.module.css";

const AuthPage = (props) => {
  return (
    <Layout>
      <section className={styles.authSection}>
        {!props.login && (
          <>
            <h3 className={styles.title}>Create your account</h3>
            <SignUpForm />
          </>
        )}

        {props.login && (
          <>
            <h3 className={styles.title}>Log Into your account</h3>
            <LoginForm />
          </>
        )}

        {!props.login && (
          <p className={styles.caption}>
            Already have an account with us?&nbsp;
            <NavLink to="../login">Log In</NavLink> here.
          </p>
        )}

        {props.login && (
          <p className={styles.caption}>
            Don't have an account with us?&nbsp;
            <NavLink to="../signup">Sign Up</NavLink> here.
          </p>
        )}
      </section>

      <Wave />
    </Layout>
  );
};

export default AuthPage;
