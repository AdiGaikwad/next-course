import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import Button from '@/components/Button/button'
const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521/free-photo-of-ivy-growing-on-wooden-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&lazy=load" fill={true} alt=' ' 
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>
          Digital Storytellers
        </h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experiences 
        </h2>
      </div>
    </div>


    <div className={styles.textContainer}>
    <div className={styles.item}>
      <h1>Who Are We?</h1>
      <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium optio vitae at libero veritatis magnam officia? Id sequi quod nihil omnis. Quisquam, sequi expedita dolorem modi sit incidunt repudiandae! 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cumque quae repellat magni deleniti dolorum perferendis reprehenderit ullam accusamus. Corrupti voluptate nobis possimus laudantium voluptatibus delectus dignissimos tenetur ipsam impedit.
    <br />
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis nam quaerat eveniet eligendi assumenda eaque deleniti at, harum placeat quibusdam fuga maiores laudantium, quae aperiam, beatae aspernatur voluptatem. Sunt.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero voluptatum corrupti magni, laborum, alias blanditiis quibusdam fugit, nisi quia molestiae? Voluptate voluptates architecto enim amet molestias itaque, qui nulla?

      </p>
    </div>
    <div className={styles.item}>
    <h1 className={styles.imgTitle}>
          What We Do ?
        </h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex debitis optio earum perferendis repellendus accusamus maiores corporis. Similique perferendis fugit cupiditate suscipit neque ex facilis cum nisi quibusdam animi?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi odio laboriosam delectus, numquam omnis totam quod reiciendis unde? Porro dolorem culpa perspiciatis atque voluptate voluptates consectetur obcaecati sit? Voluptate, ipsam?

      <br />
      <br />
      - Dynamic Websites - Fast and Handy mobile apps
    </p>

      <Button url={"/contact"} text={"Contact"} />

    </div>

    </div>
    
    </div>
  )
}

export default About