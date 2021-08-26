import styles from "./sideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item_wraper}>
        <img className={styles.icon} src="/overview.png" alt="" />
        <h1 className={styles.name}>Overview</h1>
      </div>
    </div>
  );
};

export default SideBar;
