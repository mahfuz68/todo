import { getAuth } from "firebase/auth";
import {
    child,
    get,
    getDatabase,
    push,
    ref,
    serverTimestamp,
    set,
    update
} from "firebase/database";
import React from "react";
import DContent from "../component/DContent";
import Sidebar from "../component/Sidebar";
import HomeLayout from "../layout/HomeLayout";

export default function Dashboard() {
  const dbRef = ref(getDatabase());
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  console.log(userId);
  /* 
    e
*/

  get(child(dbRef, "answers"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  const id = "4342342342";
  set(child(dbRef, `answers/${id}`), {
    username: "mahfuz",
    email: "mahfuz@gmail.com",
    posts: [],
    profile_picture: "www.facebook.com",
    createdAt: serverTimestamp(),
  })
    .then(() => {
      console.log("data saved successfully");
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      if (error) {
        console.log("there was an error on saving data !");
      }
    });
  update(
    child(dbRef, `answers/${id}`),
    {
      posts: push(child(dbRef, `answers/${id}`)).key,
    },
    (e) => {
      console.log(e);
    }
  );
  push(child(dbRef, `answers/${id}/posts`), { name: "mahfuz", age: 23 }).then(
    (d) => {
      console.log(d, "success dfd");
    }
  );
  const postsRef = child(dbRef, `answers/${id}/posts`);

  get(postsRef)
    .then((snapshot) => {
      snapshot.forEach((child) => {
        const data = child.val();
        console.log("value :", data);
        const key = child.key;
      });
    })
    .catch((e) => {
      if (e) {
        console.log(e);
      }
    });

  // update(child(postsRef, key))

  // query(postsRef, orderByChild())
  // remove(child(dbRef, `answers/${id}/posts` ), )

  // remove data
  // remove(child(dbRef, `answers/${id}`), (err)=> {
  //     if(err){
  //         console.log('there was an error to delete data');
  //     }
  // })
  return (
    <HomeLayout>
      <div className="grid grid-cols-12">
        <Sidebar />
        <DContent />
      </div>
    </HomeLayout>
  );
}
