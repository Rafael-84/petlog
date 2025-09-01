import { RegisterOptions, UseFormRegister } from "react-hook-form";


export interface InputProps {
    name: string;
    placeholder: string;
    type: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
    errors?: string;
}