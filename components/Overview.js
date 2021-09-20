import styles from "./styles/Overview.module.scss";

const Overview = () => {
  return (
    <>
      <h1 className={styles.heading}>Overview</h1>
      <label className={styles.label}>Title</label>
      <input type="text" className={styles.input_field} />
    </>
  );
};

export default Overview;
