import styles from "@/app/page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.profile}>
        <p>Failed to retrieve user profile</p>
      </div>
    </main>
  );
}