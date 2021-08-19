import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/signin.module.scss";

const Signin = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Embedable</title>
        <meta name="embadable" content="sign in to embeddable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.left_grid}>
          <h1 className={styles.heading_main}>Sign in to your account</h1>
          <input
            type="text"
            className={styles.text_field}
            placeholder="Enter your email"
          />
          <input
            type="password"
            className={styles.text_field}
            placeholder="Enter your password"
          />
          <button className={styles.btn_main}>Sign in</button>
          <h1 className={styles.txt_sm}>
            Don't have an account? <a className={styles.link}>Sign up</a>{" "}
          </h1>
        </div>
        <div className={styles.right_grid}>
          <img src="/coverimage2.png" className={styles.coverimg} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
