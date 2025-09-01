"use client"
import React from "react";
import { useLottie } from "lottie-react";
import CatLoader from "../../../../public/lottie/loader-cat.json";

const MyCatLoader = () => {
    const options = {
        animationData: CatLoader,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default MyCatLoader;