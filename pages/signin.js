import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/signInUp.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { SignInUser } from "../utilities/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ state: false, message: "" });

  const handleSigninClick = async () => {
    setIsLoading(true);
    const isValid = validation();
    if (isValid) {
      const user = await SignInUser({ email, password });
      console.log(user);
      if (user.status === 400)
        setIsError({ state: true, message: user.message });
      else setIsError({ state: false, message: "" });
    }
    setIsLoading(false);
  };

  const validation = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== "") {
      if (email.match(validRegex)) {
        if (password !== "") {
          return true;
        }
        setIsError({ state: true, message: "Password field is required" });
        return false;
      } else {
        setIsError({ state: true, message: "Enter a valid email" });
        return false;
      }
    }
    setIsError({ state: true, message: "email field is required" });
    return false;
  };

  const router = useRouter();
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
          {isError.state && (
            <div className={styles.error_box}>
              <h1 className={styles.error_text}>{isError.message}</h1>
            </div>
          )}
          <input
            type="text"
            className={styles.text_field}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={styles.text_field}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.btn_main}
            onClick={() => handleSigninClick()}
          >
            {isLoading ? (
              <Loader type="ThreeDots" color="white" height={25} width={25} />
            ) : (
              "Sign in"
            )}
          </button>
          <h1 className={styles.txt_sm}>
            Don't have an account?{" "}
            <a className={styles.link} onClick={() => router.push("/signup")}>
              Sign up
            </a>{" "}
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
