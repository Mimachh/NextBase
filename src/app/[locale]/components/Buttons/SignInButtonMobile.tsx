'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import { usePathname } from 'next/navigation'
interface CustomLinkProps {
    className?: string;
}

const SignInButtonMobile = ({className=""}: CustomLinkProps) => {
    const pathName = usePathname();
    const { data:session } = useSession();
    // console.log(session?.user);
    if(session && session.user) {
        console.log(session?.user);
        return(
            // <div className='flex gap-4 ml-auto'>
            //     <p>{session.user.name}</p>
                <button onClick={()=>signOut()}
                className={`${className} relative group text-light dark:text-dark my-2`} 
                >
                    Sign Out
                    <span className={`
                        h-[1px] inline-block bg-primary dark:bg-dark
                        absolute left-0 -bottom-0.5 group-hover:w-full w-0
                        transition-[width] ease duration-300`}>&nbsp;
                    </span>
                </button>
            // </div>
        );
    }
  return (
             
        <button onClick={()=>signIn()}
        className={`${className} relative group text-light dark:text-dark my-2`} 
        >
        Sign In
        <span className={`
            h-[1px] inline-block bg-primary dark:bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full
            transition-[width] ease duration-300
            ${pathName === '/auth/signIn' ? 'w-full' : 'w-0'}`}>&nbsp;
        </span>
        </button>
  
  )
}

export default SignInButtonMobile