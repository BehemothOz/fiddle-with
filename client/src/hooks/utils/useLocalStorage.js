import { useState, useMemo } from 'react';

const STORAGE_PREFIX = 'fiddle';
const concatName = name => `${STORAGE_PREFIX}:${name}`;

const useLocalStorage = (name, initialValue = '') => {
    const storageName = useMemo(() => concatName(name), [name]);

    // lazy state initialization
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(storageName);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const set = storageValue => {
        try {
            setValue(storageValue);
            localStorage.setItem(storageName, JSON.stringify(storageValue));
        }
        catch (error) {
            console.error(error);
        }
    }

    const remove = () => {
        setValue(initialValue);
        localStorage.removeItem(storageName);
    }

    return { value, set, remove }
}

export default useLocalStorage;