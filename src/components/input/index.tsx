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
            <input type={type} placeholder={placeholder} {...register(name, rules)} id={name} />{errors && <span className="text-red-500 text-sm">{errors}</span>}
        </>
    )
}