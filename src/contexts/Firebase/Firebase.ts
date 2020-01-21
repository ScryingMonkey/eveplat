import { BehaviorSubject } from "rxjs";
import app from "firebase/app";
// import 'firebase/auth';
import "firebase/firestore";
// import "firebase/database";
import firebaseConfig from "./firebaseConfig";

class Firebase {
  colls = {
    events: { ref: null, obs: null, docs: new BehaviorSubject([]) },
    venues: { ref: null, obs: null, docs: new BehaviorSubject([]) }
  };
  state: any;

  constructor() {
    app.initializeApp(firebaseConfig);
    // app.auth = app.auth();
    let db = app.firestore();
    this.setupRefs(db);
  }
  setupRefs = (db: app.firestore.Firestore) => {
    // sets up a ref and behavior subject (observable) for each collection
    for (let c in this.colls) {
      this.colls[c]["ref"] = db.collection(c);
      // this.colls[c]["obs"] = db
      //   .collection(c)
      //   .get()
      //   .then(snapshot => {
      //     if (snapshot.empty) {
      //       console.log(`[${c}] snapshot was empty.`);
      //       return;
      //     } else {
      //       let docs = [];
      //       snapshot.forEach(doc => {
      //         // console.log("...found doc[:", doc.id, "] =>", doc.data());
      //         docs.push(doc.data());
      //       });
      //       if (this.colls[c]["docs"].value !== docs) {
      //         this.colls[c]["docs"].next(docs);
      //         console.log(c, ": ", this.colls[c]["docs"].value);
      //       }
      //     }
      //   })
      //   .catch(err => {
      //     console.log("Error getting documents", err);
      //   });
    }
  };

  subscribeToCollectionFromFirestore =(fb:Firebase,key:string,thing:any,updateFunc:any)=> {
    fb.colls[key].ref.onSnapshot(res => {
      let arr = res.docs.map(doc => {
        let t = new thing;
        t.setConfig(doc.data().event);
        return t;
      });
      // console.log('...arr after map');
      // console.log(arr);
      updateFunc(arr);
      // console.log(`Update coll [${key}]`);
      // console.log(arr);
    });
  }

  // const increment = firestore.FieldValue.increment(1);

  addDoc = (collName:string, docId:string, doc:any) => {
    console.log(`...addDoc(${collName},${docId},doc)`);
    console.log(doc);
    this.colls[collName].ref.doc(docId).set(doc);
  };
  deleteDoc = (collName, docId:string) => {
    console.log(`deleteDoc(${collName},${docId})`);
    this.colls[collName].ref.doc(docId).delete();
  };
  setDoc = (collName:string, docId:string, doc:any)=>{
    console.log(`...addDoc(${collName},${docId},doc)`);
    console.log(doc);
    this.colls[collName].ref.doc(docId).set(doc);
  }
}
export {Firebase};

const fb = new Firebase();
export default fb;

