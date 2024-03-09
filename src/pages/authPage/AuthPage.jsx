import SignUpForm from "../../components/forms/signup/SignUpForm";
import Layout from "../../components/utilities/layout/Layout";
import Wave from "../../components/utilities/wave/Wave";

import styles from "./AuthPage.module.css";

const AuthPage = (props) => {
  return (
    <Layout>
      <section className={styles.authSection}>
        <h3 className={styles.title}>Create your account</h3>
        <SignUpForm />
      </section>

      <Wave />
    </Layout>
  );
};

export default AuthPage;
