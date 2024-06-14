'use client'

import { useSearchParams } from 'next/navigation';
import { Buffer } from 'buffer';
import useStorage from '@/app/lib/storage';
import styles from "@/app/page.module.css";

export default async function User() {

  const searchParams = useSearchParams();
  const hasError = !!searchParams.get('error');
  const codeParam = searchParams.get('code');
  console.log('hasError ', hasError);
  console.log('codeParam ', codeParam);

  const { getItem, setItem } = useStorage();

  const url = 'https://demoeid.bluink.ca/oidc/token';
  let decoded = getItem('decodedToken');
  if (!decoded) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: codeParam,    
        grant_type: "authorization_code",
        client_id: "4b715a871eb524523f90",
        client_secret: "884f46109efd11b010dc55905f6503ca",
        redirect_uri: "https%3A%2F%2Fpoc-bluink.vercel.app%2Fdashboard"
      }),
    });
    if (res.status === 200) {
      const jsonRes = await res.json();
      const idToken = jsonRes.id_token;
      console.log('------token response-------', idToken);
      const profile = (idToken as string).split('.')[1];
      decoded = Buffer.from(profile, 'base64').toString('binary');
      console.log('------decoded-------', decoded);
      setItem('decodedToken', decoded);
    }
  }

  return (
    <>
    {
      hasError && <p>Authentication failed</p>
    }
    {
      !hasError && <>
        <h3>User Profile</h3>
        <br/>
        <p>Decoded ID: </p>
        <br/>
        <p className={styles.decoded}>{decoded}</p>
      </>
    }
    </>
  );
}
