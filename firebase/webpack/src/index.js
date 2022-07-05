import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBm1DUtAcr2lnURGPhqqiuk89L1KOO9n9k',
    authDomain: 'frebase-tutorial-986be.firebaseapp.com',
    projectId: 'frebase-tutorial-986be',
    storageBucket: 'frebase-tutorial-986be.appspot.com',
    messagingSenderId: '803342579724',
    appId: '1:803342579724:web:8a90b0ea50a60b51e35629',
    measurementId: 'G-31LZ2E40TK',
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// get collection data
/*
getDocs(colRef)
    .then((snapshot) => {
        let book = [];
        snapshot.docs.forEach((doc) => {
            book.push({ ...doc.data(), id: doc.id });
        });
        console.log(book);
    })
    .catch((err) => {
        console.log(err.message);
    });
*/

// queries
const q = query(colRef, where('author', '==', 'patrick rothfuss'));

// get real time collection data
onSnapshot(q, (snapshot) => {
    let book = [];
    snapshot.docs.forEach((doc) => {
        book.push({ ...doc.data(), id: doc.id });
    });
    console.log(book);
});

// adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    }).then(() => {
        addBookForm.reset();
    });
});

// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'books', deleteBookForm.id.value);

    deleteDoc(docRef).then(() => {
        deleteBookForm.reset();
    });
});
