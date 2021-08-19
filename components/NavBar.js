import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading} onClick={() => router.push("/")}>
          Embeddable
        </h1>
      </div>
      <div className={styles.center}>
        <h1 className={styles.link}>Pricing</h1>
        <h1 className={styles.link}>Widgets</h1>
        <h1 className={styles.link}>Contact Us</h1>
      </div>
      <div className={styles.right}>
        <button className={styles.btn} onClick={() => router.push("/signin")}>
          Sign in
        </button>
        <button
          className={styles.btn_filled}
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
