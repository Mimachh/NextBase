'use client';
import { useState, useEffect } from 'react';
import TextSeparator from '../TextSeparator';
import { SidebarNormalLink } from './SidebarNormalLink';
import { ChevronSimple, ChevronsDouble, CloseButton, HomeIcon, KeyIcon, ProfileIcon } from '../Icons';
import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';

export default function Sidebar({hScreen = ""}) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const t = useTranslations('Sidebar');
    const pathName = usePathname();

    const whatsappHref = "/auth/user/dashboard/api_keys/whatsapp";
    const telegramHref = "/auth/user/dashboard/api_keys/telegram";

    const openSidebar = () => {
      setIsSidebarOpen(true);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
  
    useEffect(() => {
        const handleResize = () => {
          setIsSidebarOpen(window.innerWidth >= 1023);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      useEffect(() => {
        if (window.innerWidth >= 1023) {
          setIsSidebarOpen(true);
        } else {
          setIsSidebarOpen(false);
        }
      }, []);
    
      const handleClick = () => {
        if (window.innerWidth <= 1023) {
          closeSidebar();
        }
      }

      const sidebarClass = isSidebarOpen ? 'block' : 'hidden';

  
    const dropdown = () => {
      const submenu = document.getElementById('submenu');
      const arrow = document.getElementById('arrow');
      submenu?.classList.toggle('hidden');
      arrow?.classList.toggle('rotate-180');
    };

  return (
    <div className={`${hScreen} relative`}>
    <span
      className="fixed z-19 text-dark dark:text-light top-1/2 left-0 cursor-pointer hidden lg:inline-block"
      onClick={openSidebar} 
    >
    <ChevronsDouble className='transition-all ease-in hover:translate-x-2 delay-100 duration-200'/>
    </span>
  
    <div className={`md:fixed sticky h-screen top-0 z-20  md:bottom-0 md:top-0   lg:left-0  p-2 
    w-[300px] overflow-y-auto text-center dark:bg-light bg-dark ${sidebarClass}
    border-r-2 border-y-2 rounded-r-lg border-primaryDark dark:border-primary dark:text-dark text-light relative
    `}
      >
         <CloseButton onClick={closeSidebar} className='cursor-pointer hidden lg:inline-block lg:absolute top-2 right-2 z-50'/>
      <div className="relative">
        <div className="pt-8">
            <SidebarNormalLink 
              href="/auth/user/dashboard"
              title={t('home')}
              svg='home'
              onClick={handleClick}
            />

            
        </div>
     
        <TextSeparator />
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-primary dark:hover:bg-primaryDark text-white"
        onClick={dropdown}
      >
        <KeyIcon className='fill-light dark:fill-dark'/>
        <div className="flex justify-between w-full items-center ">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">{t('keys')}</span>
          <span className="text-sm" id="arrow">
            <ChevronSimple className=' stroke-light dark:stroke-dark'/>
          </span>
        </div>
      </div>
      <div
        className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold  ${pathName === telegramHref || pathName === whatsappHref ? 'block' : 'hidden'} `}
        id="submenu"
      >
        <Link href={whatsappHref} 
        className={`cursor-pointer flex p-2 
        hover:bg-primary dark:hover:bg-primaryDark 
        ${pathName === whatsappHref ? 'bg-primary dark:bg-primaryDark' : ''}
        rounded-md mt-1`}
        onClick={handleClick}
        >
          Whatsapp
        </Link>

        <Link href={telegramHref} 
        className={`cursor-pointer flex p-2 
        hover:bg-primary dark:hover:bg-primaryDark 
        ${pathName === telegramHref ? 'bg-primary dark:bg-primaryDark' : ''}
        rounded-md mt-1`}
        onClick={handleClick}
        >
          Telegram
        </Link>

    
      </div>

      <TextSeparator />
      {/*  */}


      <SidebarNormalLink 
        href="/auth/user/dashboard/subscribe"
        title={t('subscribe')}
        svg='abonnement'
        onClick={handleClick}
      />

      <SidebarNormalLink 
        href="/auth/user/dashboard/profile"
        title={t('profile')}
        svg='profile'
        onClick={handleClick}
      />

    </div>
    </div>
  )
}          