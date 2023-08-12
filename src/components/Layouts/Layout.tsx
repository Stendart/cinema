import React, { FC, ReactNode } from 'react'
import { Header } from '../Header/Header'

import './Layout.css'

interface PropsLauoyt {
  children?: ReactNode
}

export const Layout: FC<PropsLauoyt> = (props) => {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <header className="layout__header">
          <Header />
        </header>
        <main className="layout__main">
          { props.children}
        </main>
      </div>
    </div>
  )
}
