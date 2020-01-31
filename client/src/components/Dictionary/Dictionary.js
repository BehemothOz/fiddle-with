import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/async/useFetch';
import { WORD_GET } from '../../api/keys';

const Dictionary = () => {
    const [, request] = useFetch({ key: WORD_GET });
    const params = useParams()

    useEffect(() => {
        request({ query: params })
    }, [request, params]);

    return (
        <div>123</div>
    )
}

export default Dictionary;