import Image from "next/image";


export function UserData() {
    return (

        <section className="flex w-full shadow shadow-gray-300 rounded-md px-2" >
            <div className="flex gap-4 w-full ">
                <div className=" w-20 h-20 relative ">
                    <Image className="object-contain" src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" alt="perfil" fill priority quality={100} />
                </div>
                <div className="flex my-2 w-full " >
                    <div className="flex flex-wrap space-x-5  ">

                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Tutor</span>
                            <p>John Doe</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Contato</span>
                            <p>(xx) xxxx-xxxx | (xx) xxxxx-xxxx</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Endereço</span>
                            <p>Endereço tal de tal</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >N</span>
                            <p>345</p>
                        </div>

                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Cep</span>
                            <p>999999-99</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Estado</span>
                            <p>tal </p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Complemento</span>
                            <p>Apartamento, torre 4</p>
                        </div>
                        <div className="flex flex-col gap-1 text-center">
                            <span className="font-medium" >Cidade</span>
                            <p> tal tal</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}