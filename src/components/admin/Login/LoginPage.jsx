import React from 'react'
import c from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={c.container}>
      <form className={c.form}>
        <input className={c.input} type="text" placeholder='Login' />
        <input className={c.input} type="password" placeholder='Password' />
        <button className={c.btn}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage