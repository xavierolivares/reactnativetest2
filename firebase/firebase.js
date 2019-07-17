import * as firebase from 'firebase';
import 'firebase/firestore';
import console = require('console');

export class FirebaseWrapper {
    constructor() {
        this.initialized = false;
        this._firebaseInstance = null; //instance of npm package
        this._firebaseWrapperInstance = null; //i of wrapper
        this._firestore = null;
    }

    Initialize(config) {
        if (!this.initialized) {
            //initialize firebase
            this._firebaseInstance = firebase.initializeApp(config);
            this._firestore = firebase.firestore();
            this.initialized = true;
        }
    }
    //static method on our class
    static GetInstance() {
        if (null == this._firebaseWrapperInstance) {
            this._firebaseWrapperInstance = new FirebaseWrapper();
        }

        return this._firebaseWrapperInstance;
    }

    async CreateNewDocument(collectionPath, doc) {
        try {
            //for any new document, it gives us a reference
            const ref = this._firestore.collection(collectionPath).doc()
        } catch (error) {
            console.log('something went wrong', error)
        }
    } 
}