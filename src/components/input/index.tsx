import { InputProps } from "@/utils/input.types";



export function Input({ name, placeholder, type, register, rules, errors }: InputProps) {
    return (
        <>
            <input className="w-full border-2 border-slate-300 rounded-sm px-2" type={type} placeholder={placeholder} {...register(name, rules)} id={name} required />{errors && <span className="text-red-500 text-sm">{errors}</span>}
        </>
    )
}