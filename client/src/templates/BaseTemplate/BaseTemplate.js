import React from 'react';
import Header from '../../components/Header';
import { Switch, Logout } from '../../shared';
import HomePage from '../../pages/HomePage';

const BaseTemplate = () => {
    console.count('<BaseTemplate /> RENDER');
    return (
        <>
            <Header>
                <Switch />
                <Logout />
            </Header>
            <HomePage />
        </>
    )
}

export default BaseTemplate;