import { collection, getDoc, getDocs } from "firebase/firestore";
import fireStoreDB  from "./firebase"

const products = [
  {id:1,nombre:'IdeaPad 3i (15.6”, Intel)', precio:200000, categoria:'Notebook',stock:10,img:"https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery-1.png?context=bWFzdGVyfHJvb3R8MjIxNjM1fGltYWdlL3BuZ3xoMjIvaDkyLzEwNzU3MjQzOTI4NjA2LnBuZ3xhMjhmOWI5NmQ1ODE2YzIyN2RjZjg0YjU1MTIzYzAyNzY2Y2I3MTU4ZTAyNWI1MjQ5OTY4ZTFjMjBmMzYyNWI4"},
  {id:2,nombre:'ThinkBook Plus 2da Gen (Intel)', precio:279999, categoria:'Notebook',stock:10,img:"https://www.lenovo.com/medias/lenovo-laptop-thinkbook-plus-gen-2-intel-subseries-gallery-1.png?context=bWFzdGVyfHJvb3R8MjExNjYyfGltYWdlL3BuZ3xoOGYvaDYwLzExNjEzMDU4NTk2ODk0LnBuZ3wwOTc4ODQ0N2E2NTk0NzhhZDdkOTAwZmU4ZWE1OGE4MzYwMDdkYzExM2U0NjhmYjdhZTRlNzFhZjFlNTE0M2Nk"},
  {id:3,nombre:'Tablet Lenovo Yoga Tab 11', precio:66999, categoria:'Tablet',stock:10,img:"https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NTQ2NDF8aW1hZ2UvcG5nfGhhYS9oMGIvMTE2NzkwMzQxNzk2MTQucG5nfGUwMGFhOTBiMGZlZGM4ZDA3YmI5NWQ0Y2JjYjkxYzkyMGQ5ZDE2NjczMjllZjQ5MTdkNmU0ZmNjNmY4MTMzZTI"},
  {id:4,nombre:'Tablet Lenovo Yoga Smart YT X705F 4 64G', precio:38999, categoria:'Tablet',stock:10,img:"https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3056_7_.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds"},
  {id:5,nombre:'Alcatel 1 Plus Volcano Black', precio:15299, categoria:'Celular',stock:10,img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2801-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500"},
  {id:6,nombre:'MOTOROLA MOTO G71 / XT2169-1', precio:57999, categoria:'Celular',stock:10,img:"https://http2.mlstatic.com/D_NQ_NP_614394-MLA49460542461_032022-O.webp"}
];


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

  export const getProductosCategoria = (categoria)=>{
    return new Promise((resolver,reject)=>{
        setTimeout(()=>{
          resolver(products.filter(prod=>prod.categoria===categoria));
        },2000);
    })

  }

  export const getProductosId=(id)=>{
    return new Promise((resolver,reject)=>{
      console.log('id'+id)
      setTimeout(()=>{
          resolver(products.find(prod=>prod.id===parseInt(id)));
      },2000);
  })
}
  