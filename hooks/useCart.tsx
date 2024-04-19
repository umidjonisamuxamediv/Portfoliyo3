import { CardProductType } from "@/app/product/[productId]/ProductDetails";
import { useEventCallback } from "@mui/material";
import { type } from "os";
import { createContext,useState,useContext,useCallback,useEffect } from "react";

import { toast } from "react-hot-toast";

type CartContextType ={
    quantity: number;
    id: string,
    cartTotalQty: number,
    cartTotalAmout: number,
    cartProducts: CardProductType[]|null,
    handleAddProductToCart: (product: CardProductType)=>void,
    handleRemoveProductFromCart: (product: CardProductType)=>void
    handleCartQtyIncrease: (product: CardProductType)=>void
    handleCartQtyDecrease: (product: CardProductType)=>void
    handleClearCart:()=>void;
}

export const CartContext =createContext<CartContextType | null>(null);

interface Props {
    [propName:string]:any
}
export const CartContextProvider =(props:Props)=>{
    const [cartTotalQty ,setCartTotalQty] = useState(0)
    const [cartTotalAmout, setCartTotalAmouct]=useState(0)
    const [cartProducts,setCardProducts]=useState<CardProductType[] |null>(null)
    console.log("qty",cartTotalQty)
    console.log("amout",cartTotalAmout)
    useEffect(()=>{
        const cartItems:any =localStorage.getItem('eShopCartItems')
        const cProducts: CardProductType[]| null =JSON.parse(cartItems)
        setCardProducts(cProducts)
    },[])
    const handleAddProductToCart = useCallback((product: CardProductType)=>{
        setCardProducts((prev) =>{
            let updatedCart;
            if(prev){
                updatedCart =[...prev, product];
            }else{
                updatedCart = [product];
            }

            toast.success('Product added to cart')
            localStorage.setItem('sShopCartItems',JSON.stringify(updatedCart))
            return updatedCart;
        });
    },[])

    useEffect(()=>{
        const getTotals =()=>{
            if(cartProducts){
                const {total,qty}= cartProducts?.reduce((acc,item)=>{
                    const itemTotal = item.price*item.quantity
                    acc.total+= itemTotal
                    acc.qty += itemTotal
                    return acc
                },{
                    total:0,
                    qty:0,
                })
                setCartTotalQty(qty)
                setCartTotalAmouct(total)
            } 
            }

           
          
        getTotals()
    },[cartProducts])

 const handleRemoveProductFromCart =useCallback((
    product: CartContextType
 )=>{
if(cartProducts){
    const filteredProdects = cartProducts.filter((item)=>{
        return item.id !== product.id 
        })
    setCardProducts(filteredProdects)
    toast.success('Product Remove')
    localStorage.setItem('sShopCartItems',JSON.stringify(filteredProdects))
}
 },[cartProducts])

 const handleCartQtyIncrease = useCallback((
    product: CartContextType
 )=>{
    let updatedCart;
    if(product.quantity === 99){
        return toast.error('Ooop! Maximum reached');
    }
    if(cartProducts){
        updatedCart=[...cartProducts]

        const existingIndex =cartProducts.findIndex((item)=>item.id=== product.id)


        if(existingIndex>-1){
            updatedCart[existingIndex].quantity= ++updatedCart[existingIndex].quantity
        }

        setCardProducts(updatedCart)
        localStorage.setItem("eShopCartItems",JSON.stringify(updatedCart))
    }
 },[cartProducts])

 const handleCartQtyDecrease = useCallback((
    product: CartContextType
 )=>{
    let updatedCart;
    if(product.quantity === 1){
        return toast.error('Ooop! Minimum reached');
    }
    if(cartProducts){
        updatedCart=[...cartProducts]

        const existingIndex =cartProducts.findIndex((item)=>item.id=== product.id)


        if(existingIndex>-1){
            updatedCart[existingIndex].quantity= --updatedCart[existingIndex].quantity
        }

        setCardProducts(updatedCart)
        localStorage.setItem("eShopCartItems",JSON.stringify(updatedCart))
    }
 },[cartProducts])

const handleClearCart =useCallback(()=>{
setCardProducts(null)
setCartTotalQty(0)
localStorage.setItem("eShopCartItems",JSON.stringify(null))
},[cartProducts])

    const value ={
        cartTotalQty,
        cartTotalAmout,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
    }
    return <CartContext.Provider value={value}  {...props}/>
}

export const useCart =()=>{
    const context = useContext(CartContext);

    if(context === null){
        throw new Error('useCart must be used within a CartContextProvider')
       
    }
    return context
}