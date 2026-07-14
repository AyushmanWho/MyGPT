import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase";

export async function createChat(uid, title) {
  const ref = await addDoc(
    collection(db, "users", uid, "chats"),
    {
      title,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      messages: [],
    }
  );

  return ref.id;
}

export async function loadChats(uid) {
  const q = query(
    collection(db, "users", uid, "chats"),
    orderBy("updatedAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}