import { useEffect, useState } from "react"


interface useScrollPagingAttributes {

    /** Current scroll position of the viewport */
    position: number; 

    /** Distance of the page from the top */
    pageOffset: number;
    
    /** Size of the page factor (Sticky start - Sticky end) */
    pageLength: number; 

    /** Number of items the scroll is paging through */
    itemCount: number; 
}

export const useScrollPaging = (props: useScrollPagingAttributes) => {

    const { position, pageOffset, pageLength, itemCount } = props; 

    const [focusIndex, setFocusIndex] = useState(0); 

    useEffect(() => {
        const windowHeight = (window.innerHeight * 1.0); 
        const value = Math.max(0, position - (window.innerHeight * pageOffset));

        const scrollPercent =  Math.round(((value / windowHeight) + Number.EPSILON) * 100) / 100; 
        const targetPercent = Math.round(((pageLength  / itemCount) + Number.EPSILON) * 100) / 100; 

        setFocusIndex(() => Math.min(itemCount - 1, Math.floor(scrollPercent / targetPercent)));
    }, [position]); 

    return [focusIndex]

}
 

