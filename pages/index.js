import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
      <NavBar />
      <Head>
        <title>Embedable</title>
        <meta name="embadable" content="embadable widgets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.main_heading}>
          Embeddable <a className={styles.link_text}>video</a> widgets <br></br>
          for your website
        </h1>
        <div className={styles.arrow_wraper}>
          <h1 className={styles.arrow_text}>TRY IT OUT</h1>
          <img
            src="https://assets.website-files.com/6080285e10b3ca5844aecb46/6081314b013edff5de11aaeb_colorful_arrow.svg"
            loading="lazy"
            width="68"
            alt=""
            className={styles.arrow_img}
          ></img>
        </div>

        <div className={styles.video_container}>
          <div
            id="vidme-video"
            data-prop-id="test"
            data-prop-play_color="#4285f5"
          ></div>
        </div>

        <h1 className={styles.sub_heading}>
          An embeddable video widget for all your needs with <br></br>video
          hosting to custom styling
        </h1>
        <button className={styles.btn_main}>Try it for free</button>
      </main>
    </div>
  );
}
