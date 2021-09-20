import styles from "./styles/uploadProgress.module.scss";

const UploadProgress = ({ progress }) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: "#ccffd3",
          borderRadius: "50%",
          height: "350px",
          width: "350px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `conic-gradient(#00fd6e ${
              (360 / 100) * progress
            }deg, #ccffd3 0 235deg, #ccffd3 0)`,
            // backgroundColor: "#0098FD",
            borderRadius: "50%",
            height: "245px",
            display: "grid",
            placeItems: "center",
            width: "245px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              height: "220px",
              display: "grid",
              placeItems: "center",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              width: "220px",
            }}
          >
            {parseInt(progress) === 100 ? (
              <svg
                className={styles.checkmark}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className={styles.checkmark__circle}
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className={styles.checkmark__check}
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            ) : (
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  color: "#192033",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: "500" }}>
                  Uploading
                </div>
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "900",
                  }}
                >
                  {parseInt(progress)}%
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProgress;
