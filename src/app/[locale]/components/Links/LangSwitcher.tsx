'use client'

import {useRouter} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';
import {ChangeEvent, useTransition, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
interface LangSwitcherProps {
  link: string;
}

const LangSwitcher = ({className = ""}) => {


  const locale = useLocale();
  const t = useTranslations('Locale');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: LangSwitcherProps) => {
    // Faire quelque chose avec le lien sélectionné, par exemple naviguer vers une autre page
    console.log(`Lien sélectionné : ${link}`);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`${className} inline-block z-10 `}>
      <label
        className={clsx(
          'relative',
          isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
      >
        <p className="sr-only">{t('locale')}</p>
        <select 
          className="cursor-pointer bg-primaryDark dark:bg-primary text-dark dark:text-light inline-flex appearance-none outline:none focus:none rounded-md py-2 pl-2 pr-6 "
          defaultValue={locale}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {['en', 'fr'].map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
        <span className="text-dark dark:text-light pointer-events-none absolute -top-1 right-2">⌄</span>
      </label>
    </div>
  );
};

export default LangSwitcher;
