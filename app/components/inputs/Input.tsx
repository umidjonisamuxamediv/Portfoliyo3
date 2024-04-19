'use client'

import { UseFormRegister,FieldValues,FieldErrors } from "react-hook-form";

interface InputProps{
    id:string,
    lable:string,
    type?:string,
    disabled?:boolean,
    required?:boolean,
    register:UseFormRegister<FieldValues>
    errors:FieldErrors
}
const Input:React.FC<InputProps> = ({
    id,
    lable,
    type,
    disabled,
    required,
    register,
    errors,
}) => {
    return (<div className="w-full relative">
        <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, {required})}
        placeholder=""
        type={type}
        className={`
        peer
        w-full
        p-4
        pt-6
        outline-none
        by-white
        font-light
        border-2
        rounded-md'transition
        disabled:opacity-70
        disabolde: cursor-not-allowed
        ${errors[id]?'border-rose-400':'border-slate-300'}
        ${errors[id]?'focuse:border-rose-400':'focuse:border-slate-300'}
        `} />
        <label
        className="abdolute 
        cursore-text
        text-md
        duration-150
        -translate-y-3
        top-5
        z-10
        origin-[0]
        lft-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:translate-y-4
        "
        htmlFor={id}>{lable}</label>
    </div>  );
}
 
export default Input;