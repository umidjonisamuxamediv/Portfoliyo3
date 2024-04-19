'use client'
import { Icon } from "@mui/material";
import { IconType } from "react-icons";
interface ButtonProps {
    lable: string;
    disabled?:boolean;
    outline?: boolean;
    small?: boolean;
    custom?: string;
    icon?: IconType
    onClick:(e: React.MouseEvent<HTMLButtonElement>)=>void
}
const Button: React.FC<ButtonProps> = (
    {
        lable,
        disabled,
        outline,
        small,
        custom,
        icon: Icon,
        onClick,
    }
) => {
    return ( <button
    onClick={onClick}
        disabled={disabled}
        className={`
    disabled: opacity-70
    disabled: cursor-not-alloewd
    rounded-md
    hover:opacity-80
    transition
    w-full
    border-slate-700
    flex
    itmes-center
    justify-center
    gap-2
    ${outline?'bg-white': 'bg-slate-700'}
    ${outline?'text-slate-700': 'text-white'}
    ${small? 'text-sm font-light': 'text-md font-semibold'}
    ${small? 'py-1 px-2 border-[1px]': 'py3 px-4 border-2'}
    ${custom?custom: ''}
    `}>
        {Icon && <Icon size={24}/>}
        {lable}
    </button> );
}
 
export default Button;