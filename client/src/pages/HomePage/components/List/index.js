import React from 'react';
import useFetch from '../../../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../../../api/keys';
import styles from './styles.module.scss';

// TODO: dynamic inital state

const DictionaryList = () => {
    const [state, request] = useFetch({ key: DICTIONARY_GET });

    const { response } = state;

    const getDictionaryList = () => request();

    return (
        <>
            <div className={styles.root}>DictionaryList</div>
            <button onClick={getDictionaryList}>get</button>
            {response && response.map(item => {
                return (
                    <div key={item._id}>Dictionary: / {item.name}</div>
                )
            })}
        </>
    )
}

export default DictionaryList;