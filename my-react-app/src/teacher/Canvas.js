import React, {useRef, useState, useEffect } from 'react';
import './Canvas.css';

export const Canvas = () => {

    const canvasRef = useRef(null);
    const [canvasTag, setCanvasTag] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth 
    })




    return (
        <div>
            
        </div>
    )
}
