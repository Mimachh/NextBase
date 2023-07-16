"use client";
import Button from "../../components/Buttons/Button";
import TextBox from "../../components/Texts/Textbox";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { GithubIcon, GoogleIcon } from '../../components/Icons'


import axios from "axios";
import { toast } from 'react-hot-toast';

import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import TitlePage from "../../components/Texts/TitlePage";

const RegisterPage = () => {
  const t = useTranslations('Register');
  const [data, setData ] = useState({
    name: '',
    email: '',
    pass: '',
    cpass: '',
    rules: '',
  });

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
        // router.push("/");
    //   console.log(status);
    //   void signIn("google");
    } else if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);


  const onSubmit = async () => {
    // console.log(data);
    axios.post('/api/register', data)
    .then(response => {
      console.log(response);
      if(response.status === 200) {
        // router.push("/");

        signIn("credentials", {
          username: data.email,
          password: data.pass,
          redirect: false,
          // callbackUrl: "/",
        });
        toast.success('Your registration is done, welcome !');
      }
    }
    
    )
    .catch(() => toast.error('Something went wrong !'))
  };


  return (
    <div
      className={
        "xs:block xs:px-4 flex flex-col items-center justify-center w-full  fixed top-1/2 -translate-y-1/2"
      }
    >

      <div className="  bg-dark border border-light flex flex-col rounded-xl shadow-lg p-12 mt-12">
        <TitlePage text={t('title')} className="mb-8"/>

        <TextBox
          labelText={t('name')}
          placeholder={t('placeholderName')}
          id="name"
          type={"text"}
          autoComplete="on"
          className="mx-auto mb-2"
          onChange={(e) => setData({ ...data, name: e.target.value})}
        />

        <TextBox
          labelText={t('email')}
          placeholder={t('placeholderEmail')}
          id="mail"
          type={"email"}
          autoComplete="on"
          className="mx-auto mb-2"
          onChange={(e) => setData({ ...data, email: e.target.value})}
        />
        <TextBox
          labelText={t('password')}
          placeholder={t('placeholderPassword')}
          id="password"
          className="mx-auto mb-2"
          type={"password"}
          onChange={(e) => setData({ ...data, pass: e.target.value})}
        />

        <TextBox
          labelText={t('cpassword')}
          placeholder={t('placeholderCPassword')}
          id="cpassword"
          className="mx-auto"
          type={"password"}
          onChange={(e) => setData({ ...data, cpass: e.target.value})}
        />


        
        <p className="text-light text-center my-4">{t('orUse')}</p>
        <div className="flex justify-around border border-primary dark:border-primaryDark rounded-xl py-2 ">
            <button type="button" className=""
            onClick={ () => signIn('google') }
            >
                <GoogleIcon className="dark:fill-primaryDark fill-primary w-7 h-7 hover:-translate-y-1 transition ease-in
                hover:dark:fill-primary hover:fill-primaryDark
                "/>
     
            </button>
            <button type="button" className="text-light"
            onClick={ () => signIn('github') }
            >
                <GithubIcon className="dark:text-primaryDark text-primary w-8 h-8 hover:-translate-y-1 transition ease-in
                hover:dark:text-primary hover:text-primaryDark"
                />
            </button>
        </div>

        <div className="flex gap-2 justify-center flex-wrap mt-4">
          <label htmlFor="rules" className="text-light">{t('confirm')} <Link href={"/"} className="text-primaryDark dark:text-primary underline">{t('rules')}</Link></label>
          <input type="checkbox" id="rules" name="rules" required
          onChange={(e) => setData({ ...data, rules: e.target.value})}
          />
        </div>
        <Button className="hover:dark:bg-primaryDark hover:bg-primary hover:dark:text-dark hover:text-light
         bg-primaryDark dark:bg-primary text-dark dark:text-light font-semibold" onClick={onSubmit}>{t('register')}</Button>

         <small className="text-light mt-2 text-center">{t('haveAccount')} <Link href={'/auth/signIn'} className="underline text-primaryDark dark:text-primary hover:text-primary hover:dark:text-primaryDark">{t('signIn')}</Link></small>
      </div>
    </div>
  );
};

export default RegisterPage;