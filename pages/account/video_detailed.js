import styles from "../../styles/videoDetailed.module.scss";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { useVideo } from "../../utilities/useVideo";
import { useRef, useEffect } from "react";

const VideoDetailed = () => {
  const { selected, isExpanded, setIsExpanded } = useVideo();
  const handlerRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // handlerRef.current.addEventListener("mousedown", () => {
    //   handlerRef.current.addEventListener("mousemove", onDrag);
    // });

    // const onDrag = ({ movementY }) => {
    //   const getStyle = window.getComputedStyle(containerRef.current);
    //   const bottom = parseInt(getStyle.bottom);
    //   containerRef.current.style.bottom = `${bottom + movementY}px`;
    //   console.log(bottom);
    // };
    //react-draggable
    handlerRef.current.addEventListener("touchmove", handleTouchMove);

    const handleTouchMove = (e) => {
      const touchLocations = e.targetTouches[0];
      console.log(touchLocations);
      const getStyle = window.getComputedStyle(containerRef.current);
      const bottom = parseInt(getStyle.bottom);
      containerRef.current.style.bottom = `${bottom + touchLocations.pageY}px`;
    };
  }, []);
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
        <div
          draggable={true}
          ref={containerRef}
          className={`${styles.left_container} ${
            isExpanded && styles.is_expanded
          }`}
        >
          <div className={styles.handler_wraper}>
            <div
              className={styles.mobile_drawer}
              ref={handlerRef}
              draggable={true}
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
