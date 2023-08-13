import { useState, useEffect } from 'react';


export const useDebounce = (value: string, delay: number) => {

    let [newValue, setNewValue] = useState('');

    useEffect(() => {
        const ID = setTimeout(() => setNewValue(value), delay);

        return () => { 
            clearTimeout(ID);
        }
    }, [value])
    
    return newValue;
}