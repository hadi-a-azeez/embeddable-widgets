import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/signInUp.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { updateUserName } from "../utilities/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { validation } from "../utilities/helper";
import { useUser } from "../utilities/useUser";

const Signup = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ state: false, message: "" });
  const { signUp } = useUser();

  useEffect(() => {
    if (user) {
      router.replace("/account/dashboard");
    }
  }, [user]);

  const handleSignupClick = async () => {
    setIsLoading(true);
    const { isValid, error } = validation(name, email, password);
    setIsError(error);
    if (isValid) {
      const { user: userData, error } = await signUp({ email, password });
      console.log(userData);
      if (userData) {
        await updateUserName(userData, name);
        setUser(userData);
        setIsError({ state: false, message: "" });
      } else {
        setIsError({ state: true, message: error.message });
      }
    }
    setIsLoading(false);
  };

  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Embedable</title>
        <meta name="vidlime" content="sign up to vidlime" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.left_grid}>
          <h1 className={styles.heading_main}>Create your account</h1>
          {isError.state && (
            <div className={styles.error_box}>
              <h1 className={styles.error_text}>{isError.message}</h1>
            </div>
          )}
          <input
            type="text"
            className={styles.text_field}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={() => handleSignupClick()}
          >
            {isLoading ? (
              <Loader type="ThreeDots" color="white" height={25} width={25} />
            ) : (
              "Sign up"
            )}
          </button>
          <h1 className={styles.txt_sm}>
            Already have an account?{" "}
            <a className={styles.link} onClick={() => router.push("/signin")}>
              Sign in
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

export default Signup;
