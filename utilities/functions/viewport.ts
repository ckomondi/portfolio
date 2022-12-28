

export const remToPixels = (rem: number): number => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}


