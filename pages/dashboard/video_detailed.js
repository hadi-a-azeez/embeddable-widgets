import styles from "../../styles/videoDetailed.module.scss";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sideBar";
const VideoDetailed = () => {
  const Overview = () => {
    return (
      <>
        <h1 className={styles.heading}>Overview</h1>
        <label className={styles.label}>Title</label>
        <input type="text" className={styles.input_field} />
      </>
    );
  };
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <SideBar />
        <div className={styles.left_container}>
          <Overview />
        </div>
        <div className={styles.right_container}>
          <img src="/demo.jpg" className={styles.demo} />
        </div>
      </main>
    </div>
  );
};

export default VideoDetailed;
