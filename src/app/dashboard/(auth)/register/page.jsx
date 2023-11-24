"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./register.module.css"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Register = () => {
const [error, setErr] = useState(false)
const session = useSession()
const router = useRouter()
  const handleSubmit =async (e)=>{
  
  e.preventDefault()
  const name = e.target[0].value
  const email = e.target[1].value
  const password = e.target[2].value

    try{
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      res.status === 201 && router.push("/dashboard/login?success= Account has been created")
    }
    catch(err){
      setErr(true)
    }

}

return (
<div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {error && "Something went wrong!"}
      </form>

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  )
}

export default Register