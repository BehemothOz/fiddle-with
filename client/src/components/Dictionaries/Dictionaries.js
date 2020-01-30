import React, { useEffect } from 'react';
import useFetch from '../../hooks/async/useFetch';
import { DICTIONARY_GET } from '../../api/keys';
// import Empty from './components/Empty';
import Rows from './components/Rows';
import FormContainer from './components/FormContainer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AddButton from './components/AddButton';

import useStyles from './styles';

const Dictionaries = () => {
    const styles = useStyles();
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
            <AddButton />
            {/* <FormContainer getDictionaries={request} /> */}
        </>
    )
}

export default Dictionaries;