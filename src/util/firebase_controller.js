import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app);

export const auth = getAuth();

//POSTS COLLECTION
export const postsCollection = collection(firestore, "posts");

//EMAILS COLLECTION Orderby query
export const postsCollection_query = query(
  postsCollection,
  orderBy("timestamp", "desc")
);

//ADD A NEW POST

export const addPost = async (postData) => {
  const newPost = await addDoc(postsCollection, { ...postData });
  console.log(`The new post was created at ${newPost.id}`);
};


