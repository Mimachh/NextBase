import React from 'react'
import CompareCards from '../components/Cards/Products/CompareCards'

function ProductsPage() {
  return (

<div className="mx-auto md:py-20 mb-10 w-full px-5 py-10 mt-16 md:mt-0">
  <div className="mx-auto xl:max-w-4xl max-w-5xl flex xl:block">
    <div className="flex xl:w-full w-1/4 flex-col xl:px-5">
      <div className="w-full flex-grow text-left">
        <h1 className="mb-5 text-4xl font-bold">Pricing</h1>
        <h3 className="text-md mb-5 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos</h3>
      </div>
      <div className="mb-2 w-full">
        <p className="text-xs">*Please read the terms.</p>
      </div>
    </div>
    <div className="w-3/4 xl:w-full text-dark">
      <div className="mx-auto max-w-4xl md:block flex md:space-y-4">
        <CompareCards 
        className="mx-auto z-0 md:-mx-0  mb-3 md:px-10 md:py-10 py-8 my-2" 
        classNameButton='hover:bg-primary bg-primaryDark'
        title="Basic"
        price="5"
        body="1 telegram key, 1 whatsapp key, 5 request/day, 2 weeks validity, manual refresh"
        buttonBody = "Free plan"
        />
        <CompareCards 
        className="z-20 md:-mx-0 md:mb-3 mb-0 py-10 md:relative bg-primaryDark -mx-3 md:flex md:px-8 md:py-8" 
        classNameButton= "hover:bg-dark bg-primary text-dark hover:text-light lg:whitespace-normal whitespace-nowrap"
        title="Pro"
        price="15"
        body="2 telegram keys, 2 whatsapp keys, 10 request/day, 1 month validity, auto-refresh, support 7/7"
        buttonBody = "Choose plan"
        />
        
        <CompareCards 
        className="mx-auto z-10 md:-mx-0  mb-3 md:px-10 md:py-10 py-8 my-2" 
        classNameButton='hover:bg-primary bg-primaryDark'
        title="Team"
        price="50"
        body="3 telegram keys, 3 whatsapp keys, 25 request/day, 1 month validity, auto-refresh, support 7/7"
        buttonBody = "Choose plan"
        />
        
        <CompareCards 
        className="-mx-3 z-0 md:-mx-0 mb-12 md:mb-0 md:px-10 md:py-10 py-8 my-2" 
        classNameButton='hover:bg-primary bg-primaryDark'
        title="Entreprise/Custom"
        price="/"
        bodyCustom="You need more of custom service? Contact us"
        buttonBody = "Choose plan"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductsPage