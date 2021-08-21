import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/signInUp.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SignInUser } from "../utilities/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { validation } from "../utilities/helper";
import { useUser } from "../utilities/useUser";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ state: false, message: "" });
  const router = useRouter();
  const { user, signIn, signInOAuth } = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user]);

  const handleSigninClick = async () => {
    setIsLoading(true);
    const { isValid, error } = validation("name", email, password);
    setIsError(error);
    if (isValid) {
      const { user, error } = await signIn({ email, password });
      console.log(user);
      if (error) setIsError({ state: true, message: error.message });
      else setIsError({ state: false, message: user.message });
    }
    setIsLoading(false);
  };

  const handleSignInOAuth = async (provider) => {
    signInOAuth({ provider });
  };

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
            Don&apos;t have an account?{" "}
            <a className={styles.link} onClick={() => router.push("/signup")}>
              Sign up
            </a>{" "}
          </h1>
          <div className={styles.line_wraper}>
            <div className={styles.line} />
            <h1 className={styles.or_text}>Or</h1>
            <div className={styles.line} />
          </div>
          <button
            className={styles.btn_google}
            onClick={() => handleSignInOAuth("google")}
          >
            <img src="/google.png" alt="g" width="25px" height="auto" />
            <span className={styles.btn_txt}>Continue with Google</span>
          </button>
        </div>
        <div className={styles.right_grid}>
          <img src="/coverimage2.png" className={styles.coverimg} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
