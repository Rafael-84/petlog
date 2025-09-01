"use client"
import React from 'react';
import Link from 'next/link';
import MyCatNotFound from '@/components/animations/notFound';



export default function NotFound() {
    return (
        <div className='w-full min-h-[calc(100%-80px)] '>
            <div className='container mx-auto relative flex flex-col  items-center justify-center '>



                <div className='mx-auto flex flex-col items-center justify-center relative'>
                    <div className='mx-auto '>
                        <MyCatNotFound />


                        <div className='absolute pt-2 w-full top-3/4 mx-auto ' >
                            <div className='w-fit mx-auto flex flex-col  items-center justify-center space-y-4'>
                                <h1 className='text-5xl text-[#6C0020] font-bold'>404!</h1>
                                <h2 className='text-2xl'>Ops! Essa página não existe...</h2>
                                <Link href="/" className='bg-[#6C0020] text-sm text-white px-4 py-2 rounded-lg font-bold hover:bg-[#C7033D] duration-300'>Voltar para a Home</Link>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div >
    );
};