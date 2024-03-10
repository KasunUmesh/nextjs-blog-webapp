import Styles from "./contact.module.css"
import Image from "next/image"

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.imgContainer}>
                <Image src="/contact.png" alt="contact" fill className={Styles.img}/>
            </div>
            <div className={Styles.formContainer}>
                <form action="" className={Styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>Sent</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;