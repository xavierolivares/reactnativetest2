import * as firebase from 'firebase';
import 'firebase/firestore';

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
            const timestamp = firebase.firestore.Timestamp.now().toDate()
            return await ref.set({ ...doc, createdAt: timestamp, id: ref.id })
        } catch (error) {
            console.log('something went wrong', error)
        }
    } 

    async SetupCollectionListener(collectionPath, callback) {
        
    }
}