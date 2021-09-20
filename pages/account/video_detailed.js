import styles from "../../styles/videoDetailed.module.scss";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { useVideo } from "../../utilities/useVideo";
import { useRef } from "react";
import Overview from "../../components/Overview";

const VideoDetailed = () => {
  const { selected, isExpanded, setIsExpanded } = useVideo();
  const containerRef = useRef();

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
        <div
          draggable={true}
          ref={containerRef}
          className={`${styles.left_container} ${
            isExpanded && styles.is_expanded
          }`}
        >
          <div className={styles.handler_wraper}>
            <img
              src="/ios-close-circle.svg"
              className={styles.close_btn}
              onClick={() => setIsExpanded(false)}
            />
          </div>
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
