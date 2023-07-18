'use client';
import React from 'react'
import {useLocale} from 'next-intl';
import { Checked } from '../../Icons';

interface CompareCardsProps {
    className?: string, 
    classNameButton?: string;
    price?: string;
    title?: string;
    body?: string;
    bodyCustom?: string;
    buttonBody?: string;
}

export default function CompareCards(
    {
    className ="", 
    classNameButton = "",
    price = "5",
    title="",
    body = "",
    bodyCustom = "",
    buttonBody = ""
    }: CompareCardsProps) {

    const locale = useLocale();
 
    const formatedPrice = (price: string) => {
        if(price != "/" && locale === 'fr') {
            return price + "€"; 
        } else if (price != "/" && locale === "en") {
            return "$"+price;
        } else if (price === "/" && locale === 'fr') {
            return "";
        } else if (price === "/" && locale === 'en') {
            return "";
        }
    }

    const bodyArray = body.split(", ");
    bodyArray.forEach(element => {
        return (
            <li className="flex items-center leading-tight">
                <Checked />
                {element}
            </li>
        );
    });

  return (
        <div className={`${className} md:w-full rounded-md  border bg-light px-8  shadow-lg  md:my-0 flex w-full md:max-w-none flex-col `}>
          <div className="w-full flex-grow">
            <h2 className="mb-4 text-center font-bold uppercase">{title}</h2>
            {price !== "/" ? (
                <h3 className="mb-5 text-center text-4xl font-bold">{formatedPrice(price)}<span className="text-sm">/mo</span></h3>
            ) : (
                ""
            )}
           
            {body !== "" ? (
            <ul className="mb-8 text-sm">
                {bodyArray.map((element, index) => (
                <li className="flex md:justify-center items-center leading-tight" key={index}>
                    <Checked />
                    {element}
                </li>
                ))}
            </ul>
            ) : (
            <p>{bodyCustom}</p>
            )}
          </div>
          <div className="w-full">
            <button className={`${classNameButton} w-full lg:whitespace-normal whitespace-nowrap rounded-md px-8 py-2 font-bold transition-colors `}>{buttonBody}</button>
          </div>
        </div>
  )
}
