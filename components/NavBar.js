import styles from "./NavBar2.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../utilities/useUser";

const NavBar2 = ({ hidePages }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const { userLoaded, user, session, userDetails, subscription, signOut } =
    useUser();
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={styles.header_main}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <img src="./logo.png" style={{ width: "40px", height: "40px" }} />
          <div style={{ marginLeft: "10px" }}>Vidlime</div>
        </div>
        <div
          className={`${styles.nav_actions} ${isExpanded && styles.responsive}`}
        >
          <div
            className={styles.navlinks}
            style={{ visibility: hidePages ? "hidden" : "visible" }}
          >
            <div>Pricing</div>
            <div>FAQ</div>
            <div>Contact us</div>
          </div>
          {!user ? (
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
          ) : (
            <div className={styles.account_nav_container}>
              <div className={styles.account_nav}>
                <div
                  className={styles.nav_link}
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </div>
                <img
                  onClick={() => setIsAccountExpanded((old) => !old)}
                  src="https://img.icons8.com/fluency/2x/test-account.png"
                  className={styles.profile_image}
                />
              </div>

              {isAccountExpanded && (
                <div className={styles.account_nav_expanded}>
                  <div>
                    <div style={{ fontSize: "12px" }}>Signed in as</div>
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "140px",
                        color: "#088248",
                        fontWeight: "500",
                      }}
                    >
                      muhamnmed bsnasimda
                    </div>
                  </div>
                  <div>Upgrade Plan</div>
                  <div>Settings</div>
                  <div style={{ color: "red" }} onClick={() => signOut()}>
                    Sign out
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <img
          src="/menu.png"
          alt="menu"
          onClick={handleMenuClick}
          className={styles.menu_icon}
        />
      </div>
    </div>
  );
};

export default NavBar2;
