import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Post } from "../models/interfaces/Post";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConection";
import { CollectionsFirebase } from "../models/enums/collectionsFirebase";
import Posts from "../components/Posts";

function Feed() {
  const [postsList, setPostsList] = useState<Array<Post>>([]);

  const handleGetPosts = async (): Promise<void> => {
    const postsArray: Array<DocumentData> = [];
    const postsListCollection = collection(db, CollectionsFirebase.POSTS);

    await getDocs(postsListCollection).then((response) => {
      if (response) {
        for (const post of response.docs) {
          postsArray.push(post.data());
        }

        postsArray.length > 0 && setPostsList(postsArray as Array<Post>);
      }
    });
  };

  useEffect(() => {
    void handleGetPosts();
  }, []);

  return (
    <>
      <Navbar handleGetPosts={handleGetPosts} />
      <Posts posts={postsList} />
    </>
  );
}

export default Feed;
