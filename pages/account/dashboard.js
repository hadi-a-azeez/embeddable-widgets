import styles from "../../styles/dashboard.module.scss";
import { useEffect } from "react";
import { useUser } from "../../utilities/useUser";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import AddVideoModal from "../../components/AddVideoModal";

const Dashboard = () => {
  const videos = ["test", "testmute", "h", "h", "test", "testmute", "h", "h"];
  const { userLoaded, user, session, userDetails, subscription, signOut } =
    useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/signin");
  }, [user]);

  return (
    <div className={styles.container}>
      <NavBar hidePages white />
      <div className={styles.main_container}>
        <div className={styles.topbar}>
          <h1>Videos</h1>
          <AddVideoModal
            triggerButton={
              <div className={styles.btn_primary}>
                <img src="/upload-icon.svg" />
                Upload Video
              </div>
            }
          />
        </div>
        {videos.length < 1 ? (
          <div
            style={{
              marginTop: "60px",
              display: "grid",
              placeItems: "center",
              width: "90%",
            }}
          >
            <img src="/list-empty.png" style={{ width: "30%" }} />
            <div
              style={{ fontWeight: "500", fontSize: "20px", marginTop: "20px" }}
            >
              No videos, Please upload one.
            </div>
          </div>
        ) : (
          <div className={styles.video_container}>
            {videos.map((vid) => (
              <div key="" className={styles.video_item}>
                <img src="https://source.unsplash.com/random" />
                <div>{vid}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
