import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_firebaseApiKey,
  authDomain: process.env.NEXT_PUBLIC_firebaseAuthDomain,
  projectId: process.env.NEXT_PUBLIC_firebaseProjectId,
  storageBucket: process.env.NEXT_PUBLIC_firebaseStorageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_firebaseMessagingSenderId,
  appId: process.env.NEXT_PUBLIC_firebaseAppId,
  measurementId: process.env.NEXT_PUBLIC_firebaseMeasurementId
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
