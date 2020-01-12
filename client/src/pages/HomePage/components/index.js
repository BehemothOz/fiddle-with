import React, { useCallback } from 'react';
import useFetch from '../../../hooks/async/useFetch';
import { HOME_GET } from '../../../api/keys';

const Empty = () => {
    const [, request] = useFetch({ key: HOME_GET });

    const getHome = useCallback(() => request(), [request]);

    return (
        <button onClick={getHome}>Click</button>
    )
}

export default Empty;