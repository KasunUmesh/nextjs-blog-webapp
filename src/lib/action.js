"use server";
import { signIn, signOut } from "./auth";

// export const sayHello = async () => {
//     "use server";

//     console.log("Hello");
// }

export const handleGithubLogin = async () => {
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
}