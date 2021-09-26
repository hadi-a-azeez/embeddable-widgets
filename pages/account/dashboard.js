import styles from "../../styles/dashboard.module.scss";
import { useEffect, useState } from "react";
import { useUser } from "../../utilities/useUser";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import AddVideoModal from "../../components/AddVideoModal";
import supabase from "../../supabase";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const { userLoaded, user, session, userDetails, subscription, signOut } =
    useUser();
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (!user) router.replace("/signin");
    const getVideosOfUser = async () => {
      const { error, data } = await supabase
        .from("videos")
        .select()
        .match({ user_id: user?.id });
      data && setVideos(data);
      setIsLoading(false);
    };
    console.log(user, "usr");
    user?.id && getVideosOfUser();
  }, [user]);

  return (
    <div className={styles.container}>
      <NavBar hidePages white />
      <div className={styles.main_container}>
        <div className={styles.topbar}>
          <h1>Videos</h1>
          <div className={styles.btn_primary} onClick={() => setIsModal(true)}>
            <img src="/upload-icon.svg" />
            Upload Video
          </div>
          <AddVideoModal isModal={isModal} setIsModal={setIsModal} />
        </div>
        {!isLoading && videos.length < 1 ? (
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
        ) : isLoading ? (
          <p>Loading</p>
        ) : (
          <div className={styles.video_container}>
            {videos.map((vid, i) => (
              <div key={i} className={styles.video_item}>
                <img src="https://source.unsplash.com/random" />
                <div>{vid.video_name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
