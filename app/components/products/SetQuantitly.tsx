'use client'

import { CardProductType } from "@/app/product/[productId]/ProductDetails";


interface SetQuatityProps{
    cartCounter?: boolean;
    cardProduct: CardProductType;
    handleQtyIncrease:()=> void;
    handleQtyDecrease:()=> void;
}

const btnStyles ='border -[1.2px ] border-slate-300 px-2 rounded'

const SetQuatity:React.FC<SetQuatityProps> = ({
    cardProduct ,cartCounter,handleQtyIncrease,handleQtyDecrease
}) => {
    return ( <div className="flex gap-8 items-center">
        {cartCounter? null : <div className="font-semibold">QUATITY</div>}
        <div className="flex gap-4 items-center text-bae">
            <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
            <div>{cardProduct.quantity}</div>
            <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
        </div>
    </div> );
}
 
export default SetQuatity;