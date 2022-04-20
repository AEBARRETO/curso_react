import { createContext,useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarItem = (prod)=> {
        setCart([...cart,{...prod}])
    }

    const eliminarItem = (id) =>{
        setCart(cart.filter((item)=>{return item.id !== id&&item}))
     }

    const limpiarCart = ()=>{
        setCart([])
    }

    const existeEnCarrito = (id)=>{
        const encontrado = cart.find(item => item.id === id );
        return encontrado?true:false
    }

    const getImporteTotal = () =>{
        return cart.map((item)=>{
            let total =+ item.precio * item.cantidad


            return item

        })

    }
    
    return (
        <Context.Provider value={{cart,agregarItem,eliminarItem,limpiarCart,existeEnCarrito}}>
            {children}
        </Context.Provider>
    )
}

export default Context;