
import { InputFileProps } from "@/utils/inputFile.type"

export function InputFile({ name, type, register, rules, errors, accept, onChange }: InputFileProps) {
    return (
        <>
            <input type={type} accept={accept}  {...register(name, rules)} onChange={onChange} />{errors && <span className="text-red-500 text-sm">{errors}</span>}
        </>
    )
}