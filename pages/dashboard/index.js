import styles from "../../styles/dashboard.module.scss";
import { useEffect } from "react";
import { useUser } from "../../utilities/useUser";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user, signOut } = useUser();
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
      </div>
    </div>
  );
};

export default Dashboard;
