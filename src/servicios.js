const products = [{id:1,nombre:'IdeaPad 3i (15.6”, Intel)', precio:200000, categoria:'NoteBook',stock:10,img:"https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery-1.png?context=bWFzdGVyfHJvb3R8MjIxNjM1fGltYWdlL3BuZ3xoMjIvaDkyLzEwNzU3MjQzOTI4NjA2LnBuZ3xhMjhmOWI5NmQ1ODE2YzIyN2RjZjg0YjU1MTIzYzAyNzY2Y2I3MTU4ZTAyNWI1MjQ5OTY4ZTFjMjBmMzYyNWI4"},
  {id:2,nombre:'ThinkBook Plus 2da Gen (Intel)', precio:279999, categoria:'NoteBook',stock:10,img:"https://www.lenovo.com/medias/lenovo-laptop-thinkbook-plus-gen-2-intel-subseries-gallery-1.png?context=bWFzdGVyfHJvb3R8MjExNjYyfGltYWdlL3BuZ3xoOGYvaDYwLzExNjEzMDU4NTk2ODk0LnBuZ3wwOTc4ODQ0N2E2NTk0NzhhZDdkOTAwZmU4ZWE1OGE4MzYwMDdkYzExM2U0NjhmYjdhZTRlNzFhZjFlNTE0M2Nk"},
  {id:3,nombre:'Tablet Lenovo Yoga Tab 11', precio:66999, categoria:'Tablet',stock:10,img:"https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NTQ2NDF8aW1hZ2UvcG5nfGhhYS9oMGIvMTE2NzkwMzQxNzk2MTQucG5nfGUwMGFhOTBiMGZlZGM4ZDA3YmI5NWQ0Y2JjYjkxYzkyMGQ5ZDE2NjczMjllZjQ5MTdkNmU0ZmNjNmY4MTMzZTI"}];


  export const getProductos = ()=>{
    return new Promise((resolver,reject)=>{
        setTimeout(()=>{
            resolver(products);
        },2000);
    })

  }