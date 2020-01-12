import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import Empty from './components/index'

const HomePage = () => {
    console.count('<HOME /> RENDER');

    return (
        <BaseTemplate>
            <div>Home page</div>
            <Empty />
        </BaseTemplate>
    )
}

export default HomePage;