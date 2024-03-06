import Image from "next/image" 
import Styles from "./about.module.css"
const AboutPage = () => {
    return (
        <div>
            <div className={Styles.imgContainer}>
                <Image src="/about.png" alt="about" fill/>
            </div>
            
        </div>
    )
}

export default AboutPage;