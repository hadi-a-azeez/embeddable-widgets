import FocusLock from "@chakra-ui/focus-lock";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { MousePointer, X } from "react-feather";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./AddVideoModal.module.scss";

const AddVideoModal = ({ triggerButton }) => {
  const [videoSelected, setVideoSelected] = useState(null);

  const onDrop = async (acceptedFiles) => {
    setVideoSelected(URL.createObjectURL(acceptedFiles[0]));
    console.log(acceptedFiles);
  };

  const handleModalClose = (close) => {
    close();
    setVideoSelected(null);
  };

  return (
    <Popup
      lockScroll={true}
      closeOnDocumentClick={false}
      trigger={triggerButton}
      modal
      contentStyle={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent",
        padding: "0px",
      }}
      nested
    >
      {(close) => (
        <div className={styles.container}>
          <X
            onClick={() => handleModalClose(close)}
            color="#212121"
            size="30px"
            style={{
              position: "absolute",
              top: "30px",
              right: "50px",
              cursor: "pointer",
            }}
          />
          <FocusLock />
          {videoSelected === null ? (
            <Dropzone onDrop={onDrop} accept="video/mp4" maxFiles={1}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: styles.dropzone })}>
                  <input {...getInputProps()} />
                  <div>
                    <p>Drag &apos;n&apos; drop video here, or</p>
                    <div className={styles.button_select}>
                      <MousePointer size="20" style={{ marginRight: "10px" }} />{" "}
                      Select Video
                    </div>
                    <p style={{ color: "#807e7e", paddingTop: "30px" }}>
                      Currently we only support MP4 file type
                    </p>
                  </div>
                </div>
              )}
            </Dropzone>
          ) : (
            <div>
              <video src={videoSelected} style={{ width: "100px" }} />
            </div>
          )}
        </div>
      )}
    </Popup>
  );
};

export default AddVideoModal;
