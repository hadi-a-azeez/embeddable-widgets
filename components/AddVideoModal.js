import FocusLock from "@chakra-ui/focus-lock";
import Dropzone from "react-dropzone";
import { X } from "react-feather";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./AddVideoModal.module.scss";

const AddVideoModal = ({ triggerButton }) => {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
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
            onClick={close}
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
          <Dropzone onDrop={onDrop} accept="video/mp4">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: styles.dropzone })}>
                <input {...getInputProps()} />
                <div>
                  <p>Drag &apos;n&apos; drop video here, or</p>
                  <div className={styles.button_select}> Select Video</div>
                </div>
              </div>
            )}
          </Dropzone>
        </div>
      )}
    </Popup>
  );
};

export default AddVideoModal;
