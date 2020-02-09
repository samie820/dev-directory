import firebase from "firebase"

(async () => {
    await import( "firebase/storage" )
    await import( "firebase/analytics" )
})()

import dontenv from "dotenv"

dontenv.config()

class FirebaseStorage {
    firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    constructor() {
        firebase.initializeApp(this.firebaseConfig)
    }

    getStorageInstance() {
        let storageRef = firebase.storage().ref();
        return storageRef;
    }

    async uploadDataFile(fileContent) {
        let dataFileRef = this.getStorageInstance().child('data/data.json')
        await dataFileRef.putString(fileContent)
        console.log('Uploaded!')
    }

    async getDataFilePath(){
        let dataFileRef = this.getStorageInstance().child('data/data.json')
        let url = await dataFileRef.getDownloadURL()
        return url
    }
}

export default new FirebaseStorage();

// const firebaseConfig = {
//     apiKey: process.env.FIREBAsE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

// // Initialize firebase
// initializeApp(firebaseConfig)

// // Initialize

