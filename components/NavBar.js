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
          <div className={styles.heading_mob}>
            <img src="./logo.png" style={{ width: "30px", height: "30px" }} />
            <h1 onClick={() => router.push("/")}>Vidlime</h1>
          </div>
          <button className={styles.btn_menu} onClick={() => handleMenuClick()}>
            <img src="/menu.png" alt="menu" className={styles.menu_icon} />
          </button>
          <div className={styles.left}>
            <div
              className={styles.heading}
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              <img src="./logo.png" style={{ width: "40px", height: "40px" }} />
              <h1>Vidlime</h1>
            </div>
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
