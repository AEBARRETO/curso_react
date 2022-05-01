import { collection, getDocs} from "firebase/firestore";
import fireStoreDB  from "./firebase";

const colCatergorias = collection(fireStoreDB,'categorias');

  export const  getCategorias =  async ()=>{
    let cats = [];
    await getDocs(colCatergorias).then(querySnapShot =>{
        cats = querySnapShot.docs.map(doc => {
            console.log(doc)
          return {id: doc.id, ...doc.data()}
        })
    })
    return cats;
  }
