import React, { useCallback } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import useFetch from '../../hooks/async/useFetch';
import api from '../../api';

const HomePage = () => {
    console.count('<HOME /> RENDER');

    const [, request] = useFetch(() => api.get('/home'));

    return (
        <BaseTemplate>
            <button onClick={request}>Click</button>
            <div>Home page</div>
        </BaseTemplate>
    )
}

export default HomePage;