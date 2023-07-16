'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const page = () => {

    // const { status } = useSession();
    // const router = useRouter();
    // useEffect(() => {
    //   if (status === "unauthenticated") {
    //       router.push("/auth/signIn");
    //   } 
    // }, [status]);

  return (
    <div>page</div>
  )
}

export default page