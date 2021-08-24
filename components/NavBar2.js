import styles from "./NavBar2.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar2 = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.header_main}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <img src="./logo.png" style={{ width: "40px", height: "40px" }} />
          <div style={{ marginLeft: "10px" }}>Vidlime</div>
        </div>
        <div
          className={`${styles.nav_actions} ${isExpanded && styles.responsive}`}
        >
          <div className={styles.navlinks}>
            <div>Pricing</div>
            <div>FAQ</div>
            <div>Contact us</div>
          </div>
          <div className={styles.account_buttons}>
            <div
              style={{
                padding: "10px",
                fontWeight: "bold",
                fontSize: "17px",
                color: "#212121",
              }}
              onClick={() => router.push("/signin")}
            >
              Signin
            </div>
            <div
              className={styles.signup_button}
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </div>
          </div>
        </div>
        <img
          src="/menu.png"
          alt="menu"
          onClick={handleMenuClick}
          className={styles.menu_icon}
        />
      </div>
    </>
  );
};

export default NavBar2;
