import IUser from "@/app/interface/user";

export default function User(user: IUser) {
  return (
    <>
      <h3>User Profile</h3>
      <br/>
      <p>Name: {user.name}</p>
    </>
  );
}
