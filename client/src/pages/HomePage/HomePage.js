import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import useFetch from '../../hooks/async/useFetch';
import { HOME_GET } from '../../api/keys';

const HomePage = () => {
    console.count('<HOME /> RENDER');

    const [, request] = useFetch({ key: HOME_GET });

    const getHome = () => request(324234234234);

    return (
        <BaseTemplate>
            <button onClick={getHome}>Click</button>
            <div>Home page</div>
        </BaseTemplate>
    )
}

export default HomePage;