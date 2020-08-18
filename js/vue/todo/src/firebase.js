import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBuSp_CLxsxr_njvK3bSiWXucKNQpX1Nbw",
  authDomain: "todo-bd897.firebaseapp.com",
  databaseURL: "https://todo-bd897.firebaseio.com",
  projectId: "todo-bd897",
  storageBucket: "todo-bd897.appspot.com",
  messagingSenderId: "527287422308"
});

export const db = app.firestore();
export const todosCollection = db.collection('todos');
