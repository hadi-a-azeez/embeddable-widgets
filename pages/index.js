import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar2 from "../components/NavBar2";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [divWidth, setDivWidth] = useState(null);

  useEffect(() => {
    setDivWidth(window?.innerWidth);
    function handleResize() {
      setDivWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    //crisp chat
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "24f8caf2-f7f4-454e-be83-97890dd0420b";
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();

    //vidlime
    const scriptLink = document.createElement("script");
    scriptLink.async = true;
    scriptLink.src = "https://raveo.xyz/vidscript.js";
    document.body.appendChild(scriptLink);
  });

  return (
    <div className={styles.container}>
      <NavBar2 />
      <Head>
        <title>Vidlime</title>
        <meta name="vidlime" content="vidlime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero_container}>
        <div className={styles.text_container}>
          {divWidth > 600 && (
            <h1 className={styles.hero_text}>
              <span>
                The easiest way to{" "}
                <span style={{ color: "#28C840" }}>host video </span>
                online.
              </span>
            </h1>
          )}

          <p>
            Easily upload your videos and embed them with our powerfull player
            accross your website and emails.
          </p>
          <div className={styles.hero_button}>Start Uploading For Free</div>
          <div className={styles.hero_features_container}>
            <div>
              <img src="https://img.icons8.com/fluency/2x/ok.png" />
              No credit card required!
            </div>
            <div>
              <img src="https://img.icons8.com/fluency/2x/ok.png" />1 FREE Video
            </div>
            <div>
              <img src="https://img.icons8.com/fluency/2x/ok.png" />
              Unlimited views
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            width: "90%",
          }}
        >
          {divWidth < 600 && (
            <h1 className={styles.hero_text}>
              <span>
                The easiest way to{" "}
                <span style={{ color: "#28C840" }}>host video </span>
                online.
              </span>
            </h1>
          )}

          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "4px solid #28C840",
              marginTop: "6%",
            }}
          >
            <div
              id="vidme-video"
              data-prop-id="test"
              data-prop-play_color="#28C840"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
