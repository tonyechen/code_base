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
    orderBy,
    serverTimestamp,
    getDoc,
    updateDoc,
} from 'firebase/firestore';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

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
const auth = getAuth();

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
const q = query(colRef, orderBy('createdAt'));

// get real time collection data
const unsubCol = onSnapshot(q, (snapshot) => {
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
        createdAt: serverTimestamp(),
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

// get a single docuent
const docRef = doc(db, 'books', 'aQPbFvZYn60zQ6CplVg0');

const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
});

// updating a document
const updateForm = document.querySelector('.update');

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'books', updateForm.id.value);

    updateDoc(docRef, {
        title: 'updated title',
    }).then(() => {
        updateForm.reset();
    });
});

// signing users up
const signupForm = document.querySelector('.signup');
console.log(signupForm);
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log(cred);
            console.log(cred.user);

            signupForm.reset();
        })
        .catch((err) => {
            console.log(err.message);
        });
});

// logging in and out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            //console.log('the user signed out');
        })
        .catch((err) => {
            console.log(err.message);
        });
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            //console.log('user logged in: ', cred.user);
        })
        .catch((err) => {
            err.message();
        });
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user);
});

// unsubscribing from change that matches selectors.
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
    console.log('unsubscribing')
    unsubCol();
    unsubDoc();
    unsubAuth();
});
