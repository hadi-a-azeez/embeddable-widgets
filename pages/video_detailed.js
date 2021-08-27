import styles from "../styles/videoDetailed.module.scss";
import NavBar from "../components/NavBar";
import SideBar from "../components/sideBar";
import { useVideo } from "../utilities/useVideo";

const VideoDetailed = () => {
  const { selected } = useVideo();
  const Overview = () => {
    return (
      <>
        <h1 className={styles.heading}>Overview</h1>
        <label className={styles.label}>Title</label>
        <input type="text" className={styles.input_field} />
      </>
    );
  };
  const Customize = () => {
    return (
      <>
        <h1 className={styles.heading}>Customize</h1>
      </>
    );
  };
  const Analytics = () => {
    return (
      <>
        <h1 className={styles.heading}>Analytics</h1>
      </>
    );
  };
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <SideBar />
        <div className={styles.left_container}>
          {selected === "overview" && <Overview />}
          {selected === "customize" && <Customize />}
          {selected === "analytics" && <Analytics />}
        </div>
        <div className={styles.right_container}>
          <img src="/demo.jpg" className={styles.demo} />
        </div>
      </main>
    </div>
  );
};

export default VideoDetailed;
