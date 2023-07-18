import Sidebar from '@/app/[locale]/components/Navigations/Sidebar'

import React, { PropsWithChildren } from 'react'


export default function LayoutUserDashboard({
children
}:PropsWithChildren) {

  const height = "h-[100vh]";

  return (
    <main className={`${height} flex gap-2`}>
        <div><Sidebar hScreen={height}/></div>
        <div>{children}</div>
    </main>
  )
}
