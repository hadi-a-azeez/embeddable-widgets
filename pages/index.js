import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

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
        <h1>Hello world</h1>
      </main>
    </div>
  )
}
