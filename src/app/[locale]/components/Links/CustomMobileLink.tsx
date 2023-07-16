import React from 'react'
 
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import {usePathname} from 'next-intl/client';
interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CustomMobileLink({
    href,
    title,
    className = "",
    setIsOpen,
  }: CustomMobileLinkProps) {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName);
    const handleClick = () => {
        setIsOpen(false);
        router.push(href);
    }
    return(
        <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
            h-[1px] inline-block bg-primary dark:bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full
            transition-[width] ease duration-300
            ${pathName === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

