import React from 'react';
import useFetch from '../../../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../../../api/keys';

// TODO: dynamic inital state

const DictionaryList = () => {
    const [state, request] = useFetch({ key: DICTIONARY_GET });

    const { response } = state;

    const getDictionaryList = () => request();

    return (
        <>
            <div>DictionaryList</div>
            <button onClick={getDictionaryList}>get</button>
            {response && response.map(item => {
                return (
                    <div key={item._id}>{item.word} / {item.transfer}</div>
                )
            })}
        </>
    )
}

export default DictionaryList;