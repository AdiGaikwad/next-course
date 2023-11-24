import React from 'react'
import styles from "./blogpage.module.css"
import Link from 'next/link'
import Image from 'next/image'

async function getData(){
  const res = await fetch("http://developer.adi:3000/api/posts",{
    cache: "no-store"
  });

  if(!res.ok){
    throw new Error("Failed to fetch data ")
  }
  return res.json()
}





const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
    {data.map(item=>(

      <Link href={`/blog/${item._id}`} key={item._id} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src={item.image}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
          {item.title}
          </h1>
          <p className={styles.desc}>
            {item.desc}
          </p>
        </div>
      </Link>
    ))}
      {/* <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-ivy-growing-on-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
          Test
          </h1>
          <p className={styles.desc}>
            Desc
          </p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-ivy-growing-on-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&lazy=load"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
          Test
          </h1>
          <p className={styles.desc}>
            Desc
          </p>
        </div>
      </Link> */}
    </div>
  )
}

export default Blog