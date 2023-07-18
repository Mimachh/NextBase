'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

interface CustomLinkProps {
    className?: string;
    toggle?: () => void;
}

const SignInButtonMobile = ({className="", toggle}: CustomLinkProps) => {
    const t = useTranslations('Navbar');

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
            
        <Link href={'auth/signIn'} onClick={toggle}
        className={`${className} relative group text-light dark:text-dark my-2`}
        >
        {t('signin')}
        <span className={`
            h-[1px] inline-block bg-primary dark:bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full
            transition-[width] ease duration-300
            ${pathName === '/auth/signIn' ? 'w-full' : 'w-0'}`}>&nbsp;
        </span>
        </Link>
  
  )
}

export default SignInButtonMobile