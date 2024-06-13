import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <strong>Identity+</strong> - Get started
        </p>
        <div>
          <a
            href="https://www.canadapost-postescanada.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cpg_round_logo.svg"
              alt="Canada Post Logo"
              className={styles.vercelLogo}
              width={200}
              height={60}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/cpg_logo.svg"
          alt="Canada Post logo"
          width={360}
          height={80}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.canadapost-postescanada.ca"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about features and API of Identity+.</p>
        </a>

        <a
          href="https://bluink.ca"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Bluink</p>
        </a>

        <a
          href="./signin"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Proof of concept <span>-&gt;</span>
          </h2>
          <p>Explore starter template for using Identity+.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
