import styles from "./NavBar.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={
            isExpanded
              ? `${styles.content} ${styles.is_expanded}`
              : `${styles.content}`
          }
        >
          <h1 className={styles.heading_mob} onClick={() => router.push("/")}>
            Vidme
          </h1>
          <img
            src="/menu.png"
            alt="menu"
            className={styles.menu_icon}
            onClick={() => handleMenuClick()}
          />
          <div className={styles.left}>
            <h1 className={styles.heading} onClick={() => router.push("/")}>
              Vidme
            </h1>
          </div>
          <div className={styles.center}>
            <h1 className={styles.link}>Pricing</h1>
            <h1 className={styles.link}>Widgets</h1>
            <h1 className={styles.link}>Contact Us</h1>
          </div>
          <div className={styles.right}>
            <button
              className={styles.btn}
              onClick={() => router.push("/signin")}
            >
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
      </div>
    </>
  );
};

export default NavBar;
