"use client";
import Button from "../../components/Buttons/Button";
import TextBox from "../../components/Texts/Textbox";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { GithubIcon, GoogleIcon } from '../../components/Icons'
import Link from 'next-intl/link';
import { toast } from 'react-hot-toast'

import {useTranslations} from 'next-intl';
import TitlePage from "../../components/Texts/TitlePage";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const router = useRouter();
  const { status } = useSession();

  const t = useTranslations('Login');

  useEffect(() => {
    if (status === "unauthenticated") {

    } else if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);


  const onSubmit = async () => {
    signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    }).then((callback) => {

      if(callback?.error) {
        toast.error(callback.error);
      }
      if(!callback?.error && callback?.ok) {
        toast.success("Logged in successfully! ")
      }
    }).catch(() => console.log('erreur'));
  };
  
  // Handle Google Log In
  async function handleGoogleSignin(){
    signIn('google', {
        // callbackUrl: process.env.NEXT_PUBLIC_APP_URL
    });
  }

  // Handle Google Log In
  async function handleGithubSignin(){
    signIn('github', {
      callbackUrl: process.env.NEXT_PUBLIC_APP_URL
    });
  }

  return (
    <div
      className={
        "xs:block xs:px-4 flex flex-col items-center justify-center w-full  fixed top-1/2 -translate-y-1/2"
      }
    >

      <div className="  bg-dark border border-light flex flex-col rounded-xl shadow-lg p-12 mt-12">
       
        <TitlePage text={t('title')} className="mb-8"/>
        <TextBox
          labelText={t('email')}
          placeholder={t('placeholderEmail')}
          id="mail"
          type={"email"}
          autoComplete="on"
          className="mx-auto mb-2"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          labelText={t('password')}
          placeholder={t('placeholderPassword')}
          id="password"
          className="mx-auto"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />


        
        <p className="text-light text-center my-4">{t('orUse')}</p>
        <div className="flex justify-around border border-primary dark:border-primaryDark rounded-xl py-2 ">
            <button type="button" className=""
            // onClick={ () => signIn('google') }
            onClick={handleGoogleSignin}
            >
                <GoogleIcon className="dark:fill-primaryDark fill-primary w-7 h-7 hover:-translate-y-1 transition ease-in
                hover:dark:fill-primary hover:fill-primaryDark
                "/>
     
            </button>
            <button type="button" className="text-light"
            onClick={handleGithubSignin}
            >
                <GithubIcon className="dark:text-primaryDark text-primary w-8 h-8 hover:-translate-y-1 transition ease-in
                hover:dark:text-primary hover:text-primaryDark"
                />
            </button>
        </div>

        <Button className="hover:dark:bg-primaryDark hover:bg-primary hover:dark:text-dark hover:text-light
         bg-primaryDark dark:bg-primary text-dark dark:text-light font-semibold" onClick={onSubmit}>{t('login')}</Button>

         <small className="text-light mt-4 text-center">{t('noAccount')} <Link href={'/auth/signUp'} className="text-primaryDark dark:text-primary hover:text-primary hover:dark:text-primaryDark">{t('signUp')}</Link></small>
      </div>
    </div>
  );
};

export default LoginPage;