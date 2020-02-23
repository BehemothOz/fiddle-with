import React, { useEffect } from 'react';
import Empty from './components/Empty';
import Rows from './components/Rows';
import FormContainer from './components/FormContainer';
import AddButton from './components/AddButton';
import useFetch from '../../hooks/async/useFetch';
import { DICTIONARIES_GET } from '../../api/keys';

const Dictionaries = () => {
    const [state, request] = useFetch({ key: DICTIONARIES_GET });
    useEffect(() => { request() }, [request]);

    const { response, fetching, errors } = state;

    if (errors) {
        return <div>Wrong!</div>
    }

    if (fetching) {
        return 'loading...'
    }

    const isEmpty = response.length === 0;
    return (
        <>
            {!isEmpty ? <Rows dictionaries={response} /> : <Empty />}
            {!isEmpty && <AddButton />}
            <FormContainer getDictionaries={request} />
        </>
    )
}

export default Dictionaries;