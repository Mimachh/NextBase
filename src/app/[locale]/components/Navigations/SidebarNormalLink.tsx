import React from 'react'
import Link from 'next-intl/link'
import {usePathname} from 'next-intl/client';
import { ProfileIcon, CreditCardIcon, HomeIcon } from '../Icons';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
    svg?: string;
    onClick?: () => void;

}

export const SidebarNormalLink = ({href, title, className="", svg, onClick}: CustomLinkProps) => {
    const pathName = usePathname();
    console.log(pathName)
    let renderedSvg = null;
    if (svg === 'profile') {
        renderedSvg = <ProfileIcon className='fill-light dark:fill-dark' />;
      } else if (svg === 'abonnement') {
        renderedSvg = <CreditCardIcon className='fill-light dark:fill-dark' />;
      } else if (svg === 'home') {
        renderedSvg = <HomeIcon />;
      } else {
        // Cas par défaut si la valeur de svg ne correspond à aucune condition précédente
        renderedSvg = null; // ou un composant par défaut, selon vos besoins
      }

    return(
        <Link href={href} className={`p-2.5 mt-3 flex gap-4
        items-center rounded-md px-4 duration-300 text-[15px] font-semibold
        cursor-pointer hover:bg-primary dark:hover:bg-primaryDark
        ${pathName === href ? 'bg-primary dark:bg-primaryDark ' : ''}
        ${className}
        `}
        onClick={onClick}
        >
     
        
        {renderedSvg}
            
          
                
                {title}
            
      
        </Link>
    )
}
