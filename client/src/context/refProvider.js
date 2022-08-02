import React, { useContext, useRef } from 'react';

const RefContext = React.createContext();

export function useReference() {
    return useContext(RefContext);
}

export function RefProvider ({ children }) {

    function scrollToRef(ref) {
        window.scrollTo(0, ref.current.offsetTop)
    }

    const homeRef = useRef(null)
    const eventRef = useRef(null)
    const contactRef = useRef(null)

    return (
        <RefContext.Provider value={{ homeRef, eventRef, contactRef, scrollToRef}}>
            { children }
        </RefContext.Provider>
    )
}