
"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from './Icons'

const ThemeSwitcher = () => {
    const [ mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
         return null;
    }
    return (
        <>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
                className={`rounded-full p-2 border border-primaryDark dark:border-white
                ${theme === "light" ? "bg-primaryDark text-light" : "bg-light text-primary"}
                fixed bottom-0 right-0 mr-4 mb-4
                `}
                >
                    {
                        theme === "dark" ?
                        <SunIcon className={"fill-primaryDark"} />
                        : <MoonIcon className={"fill-primaryDark"} />
                    }
                </button>
        </>
    );
};

export default ThemeSwitcher;