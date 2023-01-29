
import {db} from './config';
// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// getCities(db){
//   console.log('Inside get cities function');
// }

//MODEL.js

import {getsinglePostDoc,
    getAllPosts,
     readAllTagIdsofTagSubCollectionOfPost,
     getTagsCollectionForPost
    } from './model';
let postId= 'O6hi80yW1FCfI7VehGzw';
let postIdHavingTagsCollection = 'AGGhCldMxPBplVgeJEaX';

//getsinglePostDoc(postId);

//getAllPosts(); 

getTagsCollectionForPost(postIdHavingTagsCollection);
//readAllTagIdsofTagSubCollectionOfPost(postIdHavingTagsCollection);