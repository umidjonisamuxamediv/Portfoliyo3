'use client'
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemConetnt";
import { format } from "path";
import { formatPrice } from "@/utils/formatPrice";
const CartClient = () => {
    const {cartProducts, handleClearCart,cartTotalAmout}= useCart()

    if(!cartProducts || cartProducts.length ===0){
        return(<div className="flex flex-col items-center">
            <div className="text-2x1">Your cart is emty</div>
            <div>
                <Link href={'/'} className="
                text-slate-500 flex items-center gap-1 mt-2
                ">
                    <MdArrowBack/>
                <span>Start Shoping</span>
                </Link>
            </div>
        </div>)
    }
    return (    <div>
        <Heading title="Shoping Cart" center/>
        <div className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        ">
            <div className=" col-span-2
            justify-self-start">PRODUCT</div>
            <div className="justify-solf-center">PRICE</div>
            <div className="justify-solf-center">QUANTITY</div>
            <div className="justify-solf-end">TOTAL</div>
            <div>
                {cartProducts&& cartProducts.map((item)=>{
                    return <ItemContent key={item.id} item={item}/>
                })}
            </div>
             
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
            <div className="w-[90px]">
                    <Button lable="Clear Cart" onClick={()=>{handleClearCart()}} small outline/>
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmout)}</span>
                    </div>
                       
                        <p className="text-salte-500">Texes and shipping calculate at checkout</p>
                    <Button lable=" Checkout" onClick={()=>
                        {}}/>
                        <Link href={'/'} className="
                text-slate-500 flex items-center gap-1 mt-2
                ">
                    <MdArrowBack/>
                <span>Continue Shoping</span>
                </Link>
                </div>
            </div>
    </div>  );
}
 
export default CartClient;