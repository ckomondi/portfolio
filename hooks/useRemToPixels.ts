import { useEffect, useState } from "react";


export const useRemToPixels = (rem: number): number => {   

    const [fontSize, setFontSize] = useState(16); 

    const recalculateFontSize = () => {

        const value = parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (fontSize == value) { return; }

        setFontSize(() => value); 
    }

    useEffect(() => {
        setFontSize(() => parseFloat(getComputedStyle(document.documentElement).fontSize));
        window.addEventListener(("resize"), recalculateFontSize, { passive: true }); 

        return () => { window.removeEventListener(("resize"), recalculateFontSize) }
    }, []); 
    
    return fontSize * rem;
}


