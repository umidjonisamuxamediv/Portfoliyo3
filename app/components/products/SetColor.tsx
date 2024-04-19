'use client'

import { CardProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps{
    images: SelectedImgType[],
    cartProdact: CardProductType,
    handleColorSelect:(value: SelectedImgType)=> void
}

const SetColor:React.FC<SetColorProps> = ({
    images,
    cartProdact,
    handleColorSelect,
}) => {
    return ( <div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">Color:</span>
            <div className="flex gap-1 ">{
                images.map((image)=> {
                    return <div
                    key={image.color}
                    onClick={()=>handleColorSelect(image)}
                    className={`
                    h-7
                    w-7
                    rounded-full
                    border-teal-300
                    flex
                    itwms-cwnter
                    justify-center
                    ${
                        cartProdact.selectedImg.color === image.color ?'border-[1.5px]':
                        'border-none' 
                    }
`}>
                            <div style={{background: image.colorCode}} className="
                            h-5
                            w-5
                            rounded-full
                            border-[1.2px]
                            border-slaet-300
                            cursor-pointer
                            "></div>
                    </div>
                })
                }</div>
        </div>
    </div> );
}
 
export default SetColor;