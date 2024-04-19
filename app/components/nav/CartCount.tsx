'use client'
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import {CiShoppingCart} from 'react-icons/ci'


const CartCount = () => {
    const {cartTotalQty}=useCart()
    const router=useRouter()
    return ( <div className="relative cursor-pointer"
    onClick={()=>router.push('/cart')}>

    <div className="text-3x1 ">
        <CiShoppingCart size={25}/>
    </div>
    <span className="absolute
    top-[-13px]
    right-[-13px]
    bg-slate-700
    text-white
    h-6
    w-6
    rounded-full
    flex
    items-center
    justify-content
    text-sm
    ">
        {cartTotalQty}
    </span>

    </div>  );
}
 
export default CartCount;