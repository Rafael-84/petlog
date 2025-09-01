"use client"
import React from "react";
import { useLottie } from "lottie-react";
import CatNotFound from "../../../../public/lottie/cat-colors.json";

const MyCatNotFound = () => {
    const options = {
        animationData: CatNotFound,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <>
            <div className="w-[320px] h-auto">
                {View}
            </div>
        </>
    );
};

export default MyCatNotFound;