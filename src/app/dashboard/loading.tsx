"use client"
import React from 'react';
import MyCatLoader from '@/components/animations/loader';

export default function Loading() {


    return (
        <div className='w-full min-h-[calc(100%-80px)] flex flex-col items-center justify-center'>
            <div className='w-full h-screen flex flex-col items-center justify-center relative'>

                <div className='w-fit relative'>
                    <MyCatLoader />
                    <h1 className='text-2xl pl-8 text-[#6C0020] font-bold text-center'>Carregando...</h1>
                </div>
            </div>
        </div>
    );
};