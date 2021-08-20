import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
        {/* <video width="100%" height="100%" className={styles.video} controls>
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-face-of-a-fighter-exhausted-during-a-fight-40988-large.mp4"
              type="video/mp4"
            />
          </video> */}
        <div className={styles.video_container}>
          <div
            id="vidme-video"
            data-prop-id="test"
            data-prop-play_color="#4285f5"
          ></div>
          <script
            type="module"
            src="https://raveo.xyz/vidscript.js"
            defer
          ></script>
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
