import React from 'react'
import styles from "./port.module.css"
const Layout = ({children}) => {
  return (
    <div>

    <h1 className={styles.maintitle}>
        Our Works
    </h1>
    {children}
    </div>
  )
}

export default Layout