import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
    name: string;
    placeholder: string;
    type: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
    errors?: string;
}

export function Input({ name, placeholder, type, register, rules, errors }: InputProps) {
    return (
        <>
            <input className="w-full border-2 border-slate-300 rounded-sm px-2" type={type} placeholder={placeholder} {...register(name, rules)} id={name} />{errors && <span className="text-red-500 text-sm">{errors}</span>}
        </>
    )
}