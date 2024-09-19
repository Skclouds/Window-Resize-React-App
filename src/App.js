import React from 'react';
import useScreenSize from './Component/useScreenSize'; 
import { useState,useEffect } from 'react';
const ScreenSizeComponent = () => {
    const screenSize = useScreenSize(); 

    return (
        <div>
            <h1>Screen Size</h1>
            <p>Width: {screenSize.width}px</p>
            <p>Height: {screenSize.height}px</p>
        </div>
    );
};

export default ScreenSizeComponent;
