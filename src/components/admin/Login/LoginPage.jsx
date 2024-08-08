import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import c from './LoginPage.module.css'

const LoginPage = () => {

  const history = useNavigate();

  const [token, setToken] = useState();

  const loginAdmin = async (e) => {
    e.preventDefault()

    const { login, password } = e.target

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: login.value, password: password.value })
    };
    fetch('http://10.0.0.179:5055/admin/login', requestOptions)
      .then(response => response.json())
      .then(data => localStorage.setItem("token", data.token) & setToken(localStorage.getItem("token")))
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (token) {
      history("/admin/main")
    }
  }, [history, token])

  return (
    <div className={c.container}>
      <form onSubmit={(e) => loginAdmin(e)} className={c.form}>
        <input className={c.input} type="text" placeholder='Login' name='login' />
        <input className={c.input} type="password" placeholder='Password' name='password' />
        <button className={c.btn}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage