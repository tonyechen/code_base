# Module Bundler:
- bundle different imported source code together into a final javascript bundle file
- eliminate unused codes 

## Webpack
```
npm i webpack webpack-cli
```
webpack.config file:
- mode: mode, production or development
- entry: path to the file of which we want webpack to initially look, relative path
- output: 
    - path: path to which we want the output file to be put into, we want absolute path here
    - filename: name of the file
- watch: true, watch the change of the entry file

# FireBase
## Connect to firebase:
grab firebase config object from fireabse
```javascript
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm1DUtAcr2lnURGPhqqiuk89L1KOO9n9k",
  authDomain: "frebase-tutorial-986be.firebaseapp.com",
  projectId: "frebase-tutorial-986be",
  storageBucket: "frebase-tutorial-986be.appspot.com",
  messagingSenderId: "803342579724",
  appId: "1:803342579724:web:8a90b0ea50a60b51e35629",
  measurementId: "G-31LZ2E40TK"
};
```
## initialize connection to firebase backend/services
```javascript
import { initializeApp } from 'fireabse/app';
...
const app = initializeApp(firebaseConfig);
```

## Set up FireStore Database
Go to Firestore Database and Create Firestore Database
- Cloud Firestore is a NoSQL, document-oriented database.
- You store data in documents, which are organized into collections
- Ex. collections -> documents -> subcollections and nested objects (both include primitive fields)

initialize firestore service:
```javascript
import { getFireStore } from 'firebase/firestore';
...
const db = getFireStore()
```

get reference to a specific collection:
```javascript
import { collection } from 'firebase/firestore';
const colRef = collection(db, 'collection-name')
```
collection() function takes in first the reference to the root FireStore instance, follow by the path names to the specific collection

doc() function gets the reference to a doc, work similarly to collection()

getDocs() get all the documents in a given collection, the function takes in a reference to a collection:
```javascript
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
```

addDoc() add a new document to the specified collection reference and autimatically assign an ID
```javascript
addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
    })
```

## RealTime Collection data
Subscribe to a collection or document
onSnapshot() subscribes to a collection/doc and receive real time updates of the data, it first takes in a reference to the data and secondly a callback function that runs everytime there is a change to the collection

## Firebase Query
query() - just like sql query in a way, use in conjunction with where(), a function that takes in 3 arguments: field_name, query_operators, value

query operators:
- < less than
- <= less than or equal to
- == equal to
- {>} greater than
- {>=} greater than or equal to
- != not equal to
- array-contains
- array-contains-any
- in
- not-in
```javascript
import { query, where } from 'firebase/firestore';
...
const q = query(colRef, where('author', '==', 'patrick rothfuss'));
```
query() returns instances of the documents, also work with onSnapshot() to only fire when specific documents change