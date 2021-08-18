import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Embeddable</h1>
      </div>
      <div className={styles.center}>
        <h1 className={styles.link}>Pricing</h1>
        <h1 className={styles.link}>Widgets</h1>
        <h1 className={styles.link}>Contact Us</h1>
      </div>
      <div className={styles.right}>
        <button className={styles.btn}>Sign in</button>
        <button className={styles.btn_filled}>Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;