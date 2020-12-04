import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseApiKey : process.env.apikey,
  authDomain: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseAuthDomain :  process.env.authdomain,
  projectId: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseProjectId :  process.env.projectid,
  storageBucket: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseStorageBucket :  process.env.storagebucket,
  messagingSenderId: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseMessagingSenderId :  process.env.messagingsenderid,
  appId: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseAppId :  process.env.appid,
  measurementId: process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_firebaseMeasurementId :  process.env.measurementid
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
