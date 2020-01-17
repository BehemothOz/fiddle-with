import React from 'react';
import useFetch from '../../../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../../../api/keys';

const DictionaryList = () => {
    const [state, request] = useFetch({ key: DICTIONARY_GET });

    const getDictionaryList = () => request();

    return (
        <>
            <div>DictionaryList</div>
            <button onClick={getDictionaryList}>get</button>
        </>
    )
}

export default DictionaryList;