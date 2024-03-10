import { getUser } from "@/lib/data";
import Styles from "./postUser.module.css"
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});
  
//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }
  
//     return res.json()
// }

const postUser = async ({userId}) => {

    // FETCH DATA WITH AN API
    // const user = await getData(userId);

    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);

  return (
    <div className={Styles.container}>
      <Image
            src={user.img ? user.img : "/noavatar.png"}
            alt="singlePost"
            width={50}
            height={50}
            className={Styles.avatar}
      />
      <div className={Styles.texts}>
        <span className={Styles.title}>Author</span>
        <span className={Styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default postUser;
