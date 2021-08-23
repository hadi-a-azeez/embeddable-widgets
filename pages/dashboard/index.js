import styles from "../../styles/dashboard.module.scss";
import { useEffect } from "react";
import { useUser } from "../../utilities/useUser";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { userLoaded, user, session, userDetails, subscription, signOut } =
    useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/signin");
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <button className={styles.btn_primary} onClick={() => signOut()}>
          Sign out
        </button>
        {userDetails ? <h1> {userDetails[0].name} </h1> : <h1>Loading</h1>}
      </div>
    </div>
  );
};

export default Dashboard;
