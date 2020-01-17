import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';

const HomePage = () => {
    console.count('<HOME /> RENDER');

    return (
        <BaseTemplate>
            <div>Home page</div>
        </BaseTemplate>
    )
}

export default HomePage;