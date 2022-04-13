import { createContext,useState } from "react";


const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarItem = (producto)=> {
        console.log('aqui')
        cart.map((item)=>{
            if(item.id===producto.id){
                item.seleccionado += producto.seleccionado;
            }
            return item;
        })

        console.log(cart);

        setCart([...cart,{...producto}])
    }

    const eliminarItem = (product) =>{

    }

    const limpiarCart = ()=>{
        setCart([])

    }
    
    return (
        <Context.Provider value={{cart,agregarItem,eliminarItem,limpiarCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context;