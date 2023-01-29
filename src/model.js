import {db} from './config';
import { doc, getDoc,getDocs,collection } from "firebase/firestore";

//Single doc read
export async function getsinglePostDoc(postId){
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log(`Post data for id ${postId}:`, docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}

export async function getAllPosts() {
  const postsCol = collection(db, 'posts');
  const postSnapshot = await getDocs(postsCol);
  const postList = postSnapshot.docs.map(doc => doc.data());
  console.log('postList',postList);
  return postList;
}

// //Subcollection read
 //const subCollectionRef = db.collection('posts').doc('postId').collection('tags');

 // access the db sub collection
export const getTagsCollectionForPost = async (postId) => {
  const querySnapshot = await getDocs(collection(db, "posts", postId, "tags"));
  querySnapshot.forEach((doc) => console.log(`Data for tag with id ${doc.id}`,doc.data())); // log each doc
}


//Bucket strategy read
const post = await getDocs(collection(db, "posts"));
const tags = await getDocs(collection(db, "tags"));

//make sense if we are showing tags only on a small subset of data
//in the actual view

// //Multi document read
// const multiDocumentPostRead = await db.collection('posts').doc('postId').get();
// //firebase sdk under the hood uses something called pipelining so if we make 
// //multiple requests concurrently then it will
// //combine all those requests and run them concurrently

// //imagine we have tags collection in posts
// const tagIds = multiDocumentPostRead.data().tags;

// // array of promises
// const tagReads = tagIds.map(tag => db.collection('tags').doc(tag).get());

// //we can read all these promisses by using Promiseall
// const tagsAll = await Promise.all(tagReads);

// //All in one function
// //Reads an array of IDs from a collection concurrently
//  const readIds = async (collection,ids) =>{
//     const reads = ids.map(id=> collection.doc(id).get());
//     const result = await Promise.all(reads);
//     return result.map(v=> v.data());
// }

// export async function readAllTagIdsofTagSubCollectionOfPost(postId){
//   const multiDocumentPostRead = await getDoc(doc(db, "posts", postId)).data();
//   console.log('multiDocumentPostRead', multiDocumentPostRead);
// }