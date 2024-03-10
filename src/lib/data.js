import { Post, User } from "./models";
import { connectToDb } from "./utils";
import {unstable_noStore as noStore} from "next/cache";
// const users = [
//     {
//         id: 1,
//         name: 'John Doe'
//     },
//     {
//         id: 2,
//         name: 'Jane Doe'
//     },
// ]


// const posts = [
//     {
//         id: 1,
//         title: 'Hello World',
//         body: 'This is my first post',
//         userId: 1
//     },
//     {
//         id: 2,
//         title: 'Hello World 2',
//         body: 'This is my second post',
//         userId: 2
//     },
// ]

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}