import React, { useEffect } from 'react';
import { useParams, useRouteMatch, useHistory } from 'react-router-dom';
import { Button, Paper } from '../../shared';
import styles from './styles.module.scss';
import useFetch from '../../hooks/async/useFetch';
import { WORD_GET } from '../../api/keys';

const Dictionary = props => {
    const [state, request] = useFetch({ key: WORD_GET });

    const a = useParams()
    const query = {
        query: a
    }

    useEffect(() => {
        request(query)
    }, []);

    return (
        <div>123</div>
    )
}

export default Dictionary;