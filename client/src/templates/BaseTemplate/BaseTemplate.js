import React from 'react';
import Header from '../../components/Header';
import { Switch } from '../../shared';
import HomePage from '../../pages/HomePage';

const BaseTemplate = () => {
    console.count('<BaseTemplate /> RENDER');
    return (
        <>
            <Header><Switch /></Header>
            <HomePage />
        </>
    )
}

export default BaseTemplate;