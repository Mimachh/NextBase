import React, { PropsWithChildren } from 'react'

export default function LayoutUserDashboard({
children
}:PropsWithChildren) {
  return (
    <main>
        <div>Layout dashboard</div>
        <div>{children}</div>
    </main>
  )
}
