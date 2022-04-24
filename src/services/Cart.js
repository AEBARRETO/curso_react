import { collection, addDoc } from "firebase/firestore";

import fireStoreDB  from "./firebase";

const colOrdenes = collection(fireStoreDB,'ordenes');

export const crearOrden = async(orden) =>{
    
    const res = await addDoc(colOrdenes,orden)
    console.log(res)
   
    return res.id
}
