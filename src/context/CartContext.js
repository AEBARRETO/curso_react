import { createContext } from "react";


const Context = createContext()

const CartContextProvider = ({children}) =>{
    <Context.Provider>
        {children}
    </Context.Provider>
}