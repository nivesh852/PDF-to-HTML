import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase storage service
const storage = firebase.storage();

// Get a reference to the Firebase Firestore service
const firestore = firebase.firestore();

// Upload a file to Firebase storage to `/pdfs/${fileName}` 
// and return a promise that resolves with the download URL
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const storageRef = storage.ref();
    const pdfRef = storageRef.child(`pdfs/${file.name}`);
    const uploadTask = pdfRef.put(file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // This is called during the upload process to update the progress bar
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(`File uploaded to ${downloadURL}`);
          resolve(downloadURL);
        });
      }
    );

  });
};

export { storage, uploadFile, firestore };
