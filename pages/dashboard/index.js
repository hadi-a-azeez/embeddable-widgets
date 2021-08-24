import styles from "../../styles/dashboard.module.scss";
import { useEffect } from "react";
import { useUser } from "../../utilities/useUser";
import { useRouter } from "next/router";
import NavBar2 from "../../components/NavBar2";

const Dashboard = () => {
  const videos = ["test", "testmute"];

  const { userLoaded, user, session, userDetails, subscription, signOut } =
    useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/signin");
  }, [user]);

  return (
    <div className={styles.container}>
      <NavBar2 hidePages />
      <div className={styles.main_container}>
        <div className={styles.topbar}>
          <h1>Videos</h1>
          <div className={styles.btn_primary}>
            <img src="./upload-icon.svg" />
            Upload Video
          </div>
        </div>
        <>
          <img src="./list-empty.png" style={{ width: "30%" }} />
          <div
            style={{ fontWeight: "500", fontSize: "20px", marginTop: "20px" }}
          >
            No videos, Please upload one.
          </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
