"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
    return (
        <div className='w-full min-h-[calc(100%-80px)] flex flex-col items-center justify-center'>
            <div className='w-full h-screen flex flex-col items-center justify-center relative'>

                <div className='w-fit relative'>
                    <DotLottieReact
                        src="https://lottie.host/5c1a3dd7-2b5c-464a-b255-51d5e3526954/9CRZ2hgSbB.lottie"
                        loop
                        autoplay
                    />
                    <h1 className='text-2xl pl-8 text-[#6C0020] font-bold text-center'>Carregando...</h1>

                </div>
            </div>
        </div>
    );
};