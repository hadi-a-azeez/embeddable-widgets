import FocusLock from "@chakra-ui/focus-lock";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { MousePointer, X } from "react-feather";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { uploadVideoDO } from "../utilities/DOUpload";
import styles from "./AddVideoModal.module.scss";
import UploadProgress from "./UploadProgress";

const AddVideoModal = ({ triggerButton, setIsModal, isModal }) => {
  const [videoSelected, setVideoSelected] = useState(null);
  const [videoUploading, setVideoUploading] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const onDrop = async (acceptedFiles) => {
    setVideoSelected(URL.createObjectURL(acceptedFiles[0]));
    setVideoUploading(true);
    await uploadVideoDO(acceptedFiles[0], setVideoProgress);
    setTimeout(() => setIsModal(false), 2000);
  };

  const closeModal = () => {
    setIsModal(false);
    setVideoSelected(null);
    setVideoProgress(0);
    setVideoUploading(false);
  };

  return (
    <Popup
      onClose={closeModal}
      open={isModal}
      lockScroll={true}
      modal
      contentStyle={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent",
        padding: "0px",
      }}
      nested
    >
      <div className={styles.container}>
        <X
          onClick={closeModal}
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
        ) : !videoUploading ? (
          <div
            style={{ width: "80%", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                backgroundColor: "white",
                padding: "50px",
                borderRadius: "10px",
              }}
            >
              <video
                src={videoSelected}
                controls
                style={{ width: "50%", borderRadius: "10px" }}
              />
              <div style={{ marginLeft: "30px", width: "100%" }}>
                <div
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontSize: "20px",
                  }}
                >
                  Video Name
                </div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="My homepage video"
                />
                <div
                  className={styles.button_select}
                  style={{ width: "90%", height: "60px" }}
                >
                  Upload Video
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UploadProgress progress={videoProgress} />
        )}
      </div>
    </Popup>
  );
};

export default AddVideoModal;
