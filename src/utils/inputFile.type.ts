import { ChangeEvent } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputFileProps {
    name: string;
    type: string;
    register: UseFormRegister<any>;
    rules?: RegisterOptions;
    errors?: string;
    accept: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}