import Styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const postCard = ({post}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.top}>
            {post.img && <div className={Styles.imgContainer}>
                <Image src={post.img} alt="Post" fill className={Styles.img}/>
            </div>}
            <span className={Styles.date}>01.01.2024</span>
        </div>
        <div className={Styles.bottom}>
            <h1 className={Styles.title}>{post.title}</h1>
            <p className={Styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className={Styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard