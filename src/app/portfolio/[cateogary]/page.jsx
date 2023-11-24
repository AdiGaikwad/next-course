import React from 'react'
import styles from "./portcat.module.css"
import Button from '@/components/Button/button'
import Image from 'next/image'
import {items} from "./data.js"
import { notFound } from 'next/navigation'

const getData = (cat)=>{
  const data = items[cat]
  if(data){
    return data 
  }
  return notFound()
}
const Cateogary = ({params}) => {
  // {console.log(params)}
  const data = getData(params.cateogary)
  return (
    
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.cateogary}</h1>
    {data.map((item)=>(
      <div className={styles.item} key={item.id}>

      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
        <Button text={"See More"} url={"#"} />
      </div>
        <div className={styles.imgContainer}>
          <Image fill={true}
          className={styles.img}
          // src={"https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-ivy-growing-on-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&lazy=load"}
          src={item.image}
          alt=''
          />
        </div>
      </div>
      ))}

    </div>
  )
}

export default Cateogary