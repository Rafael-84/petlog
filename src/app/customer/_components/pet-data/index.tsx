import { PenIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";



export function PetData({ infoPet }: { infoPet: any }) {
    return (
        <main>
            <div className="flex gap-4">
                <div className=" relative w-12 h-12 ">
                    <Image className="object-contain " src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png" alt="pet" fill priority quality={100} />
                </div>
                <div className=" w-52 space-y-4">
                    <div className="flex justify-between">
                        <p className="font-bold italic text-[#6C0020] text-lg">{infoPet}</p>
                        <span className="text-gray-700 font-bold text-sm italic">Fêmea</span>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <div className="flex gap-2">
                            <p className="text-gray-800 font-medium italic">Idade: </p>
                            <span>2 anos</span>

                        </div>
                        <div className="flex gap-2">
                            <p className="text-gray-800 font-medium italic">Raça: </p>
                            <span>Persa</span>
                        </div>
                    </div>

                </div>
                <div className="">
                    <button className="text-[#6C0020] hover:text-[#C7033D] hover:scale-105 duration-200 cursor-pointer"><PenIcon size={20} /></button>
                </div>
            </div>
        </main >
    )
}