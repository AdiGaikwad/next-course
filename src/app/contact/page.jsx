import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/button'

export const metadata = {
  title: "Adi Developer",
  description: "This is description",
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{"Let' s Keep in Touch"}</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src={"/contact.png"}
        fill={true}
        alt='Contact'
        className={styles.img}
        />
      </div>
    <form action="" className={styles.form}>
      <input type="text"  placeholder='Name' className={styles.input}/>
      <input type="email"  placeholder='Email' className={styles.input}/>
<textarea className={styles.textarea} placeholder='Message' id="" cols="30" rows="10"></textarea>
    <Button url={"#"} text={"Send"} />
    </form>

      </div>
    </div>
  )
}

export default Contact