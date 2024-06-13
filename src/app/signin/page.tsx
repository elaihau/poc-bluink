import styles from "../page.module.css";
import Image from "next/image";

export default async function Page() {
  const base = 'https://demoeid.bluink.ca/oidc';
  const responseType = 'response_type=code';
  const scope = 'scope=openid';
  const clientId = 'client_id=4b715a871eb524523f90';
  const redirect = 'redirect_uri=https%3A%2F%2Fpoc-bluink.vercel.app%2Fdashboard'; // TODO update to ./dashboard
  const state = 'state=74b37fcf-3473-4334-87df-df38d7f49b36';
  const nonce = 'nonce=74b37fcf-3473-4334-87df-df38d7f49b36';

  const url = `${base}/authorize?${responseType}&${scope}&${clientId}&${redirect}&${state}&${nonce}`;
  return (
    <main className={styles.dashboard}>
      <div className={styles.profile}>
        <iframe width={'500px'} height={'800px'} frameBorder={'0'} src={url} title="iframe"></iframe>
      </div>
    </main>
  );
}