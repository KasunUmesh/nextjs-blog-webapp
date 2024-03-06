import Styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const postCard = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.top}>
            <div className={Styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/18163082/pexels-photo-18163082/free-photo-of-camera-and-iced-coffee-on-wooden-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post" fill className={Styles.img}/>
            </div>
            <span className={Styles.date}>01.01.2024</span>
        </div>
        <div className={Styles.bottom}>
            <h1 className={Styles.title}>Title</h1>
            <p className={Styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi necessitatibus odio ipsa totam blanditiis tempore quibusdam dolores cumque ab ex est nulla, culpa tenetur nam cum vel minima! Molestias.</p>
            <Link href="/blog/post" className={Styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard