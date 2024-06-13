'use client'

import { useSearchParams } from 'next/navigation';
import IUser from "@/app/interface/user";


export default function User(user: IUser) {
  const searchParams = useSearchParams();
  const hasError = !!searchParams.get('error');

  return (
    <>
      { !hasError && <>
          <h3>User Profile</h3>
          <br/>
          <p>Name: {user.name}</p>
        </>
      }
      {
        hasError && <p>Authentication failed</p>
      }
    </>
  );
}
