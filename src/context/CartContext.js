import { createContext,useState } from "react";


const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarItem = (producto)=> {
        setCart([...cart,{...producto}])
    }

    const eliminarItem = (item) =>{
        setCart(cart.filter((i)=>{return i.id !== item.id&&i}))
     }

    const limpiarCart = ()=>{
        setCart([])
    }

    const existeEnCarrito = (id)=>{
        console.log(id)
        return false
    }
    
    return (
        <Context.Provider value={{cart,agregarItem,eliminarItem,limpiarCart,existeEnCarrito}}>
            {children}
        </Context.Provider>
    )
}

export default Context;