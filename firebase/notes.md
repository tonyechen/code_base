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

## Set up firebase Database
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


