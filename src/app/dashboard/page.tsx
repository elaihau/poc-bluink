import { Suspense } from 'react';
import styles from "../page.module.css";
import Image from "next/image";
import User from "./user";

export default async function Page() {
  // 1. retrive code from URL


  // 2. make token request
  const info = {
    name: 'Liang'
  };

  return (
    <main className={styles.dashboard}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/user-avatar.svg"
          alt="User avatar"
          width={200}
          height={200}
          priority
        />
      </div>
      <Suspense>
        <div className={styles.profile}>
          <User {...info}></User>
        </div>
      </Suspense>
    </main>
  );
}