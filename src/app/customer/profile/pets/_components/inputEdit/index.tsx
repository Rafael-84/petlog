import { RegisterOptions, UseFormRegister } from "react-hook-form";


interface InputEditProps {
    name: string;
    placeholder: string;
    type: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
    errors?: string;
    value?: string
}

export function InputEdit({ type, placeholder, name, register, rules, errors }: InputEditProps) {
    return (
        <>
            <input className="w-full border-2 bg-white border-slate-300 rounded-sm px-2" type={type} placeholder={placeholder} {...register(name, rules)} id={name} required />{errors && <span className="text-red-500 text-sm">{errors}</span>}

        </>
    )
}