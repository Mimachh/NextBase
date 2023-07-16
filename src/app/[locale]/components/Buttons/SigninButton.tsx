'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import {usePathname} from 'next-intl/client';
interface CustomLinkProps {
    className?: string;
}

import {useTranslations} from 'next-intl';

const SigninButton = ({className=""}: CustomLinkProps) => {
    const pathName = usePathname();
    const t = useTranslations('Navbar');

    const { data:session } = useSession();
    // console.log(session?.user);
    if(session && session.user) {
        console.log(session?.user);
        return(
            // <div className='flex gap-4 ml-auto'>
            //     <p>{session.user.name}</p>
                <button onClick={()=>signOut()}
                className={`${className} relative group`}
                >
                    {t('signout')}
                    <span className={`
                    h-[1px] inline-block bg-dark
                    absolute left-0 -bottom-0.5 group-hover:w-full w-0
                    transition-[width] ease duration-300
                    dark:bg-primary`}>&nbsp;
                    </span>
                </button>
            // </div>
        );
    }
  return (
             
        <button onClick={()=>signIn()}
        className={`${className} relative group`}
        >
        {t('signin')}
        <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full
            transition-[width] ease duration-300
            ${pathName === '/auth/signIn' ? 'w-full' : 'w-0'}
            dark:bg-primary`}>&nbsp;
        </span>
        </button>
  
  )
}

export default SigninButton