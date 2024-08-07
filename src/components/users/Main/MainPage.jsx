import React from 'react'
import c from './MainPage.module.css'

const MainPage = () => {
  return (
    <div>
        <header className={c.header}>
            <a className={c.a} href="/admin">Admin</a>
        </header>
        <main></main>
        <footer></footer>
    </div>
  )
}

export default MainPage