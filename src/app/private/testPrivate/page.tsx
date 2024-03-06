"use client";
import DaniedPage from "@/app/denid/page";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="text-white">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <DaniedPage />;
}
