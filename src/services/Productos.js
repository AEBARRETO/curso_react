import { collection, getDoc, getDocs,doc, query, where } from "firebase/firestore";
import fireStoreDB  from "./firebase"

const colProductos = collection(fireStoreDB,'productos');

  export const  getProductos =  async ()=>{
    let prods = [];
    await getDocs(colProductos).then(querySnapShot =>{
       prods =  querySnapShot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
    })
    return prods;
  }

  export const getProductosCategoria = async(categoria)=>{
    const q = query (colProductos,where('categoria','==',categoria))

    let prods = [];
    await getDocs(q).then(querySnapShot =>{
      console.log(querySnapShot.size)
       prods =  querySnapShot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
        })
    })
    return prods;
  }

  export const getProductosId= async (id)=>{
    const snap = await getDoc(doc(fireStoreDB, 'productos', id)) 
    const prod =  {id: snap.id, ...snap.data()}

    return prod;
  }
  