import React, { useEffect } from 'react';
import useFetch from '../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../api/keys';
// import Empty from './components/Empty';
import Rows from './components/Rows';
import FormContainer from './components/FormContainer';

const Dictionaries = () => {
    const [state, request] = useFetch({ key: DICTIONARY_GET });
    useEffect(() => {
        request()
    }, []);

    const { response, fetching, errors } = state;

    if (errors) {
        return <div>Wrong!</div>
    }

    const isEmpty = !response.length && !fetching;
    console.count('<Dictionaries />')
    return (
        <>
            {!isEmpty ? <Rows dictionaries={response} /> : 'Empty'}
            {/* <FormContainer getDictionaries={request} /> */}
        </>
    )
}

export default Dictionaries;