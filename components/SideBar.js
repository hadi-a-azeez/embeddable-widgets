import styles from "./sideBar.module.scss";
import { useVideo } from "../utilities/useVideo";

const SideBar = () => {
  const { selected, setSelected, setIsExpanded } = useVideo();

  return (
    <div className={styles.container}>
      <div
        className={styles.item_wraper}
        onClick={() => {
          setSelected("overview");
          setIsExpanded(true);
        }}
      >
        <img
          className={`${styles.icon} ${
            selected === "overview" && styles.selected
          }`}
          src="/overview.png"
          alt=""
        />
        <h1 className={styles.name}>Overview</h1>
      </div>
      <div
        className={styles.item_wraper}
        onClick={() => {
          setSelected("customize");
          setIsExpanded(true);
        }}
      >
        <img
          className={`${styles.icon} ${
            selected === "customize" && styles.selected
          }`}
          src="/customization.png"
          alt=""
        />
        <h1 className={styles.name}>Customize</h1>
      </div>
      <div
        className={styles.item_wraper}
        onClick={() => {
          setSelected("analytics");
          setIsExpanded(true);
        }}
      >
        <img
          className={`${styles.icon} ${
            selected === "analytics" && styles.selected
          }`}
          src="/analytics.png"
          alt=""
        />
        <h1 className={styles.name}>Analytics</h1>
      </div>
    </div>
  );
};

export default SideBar;
