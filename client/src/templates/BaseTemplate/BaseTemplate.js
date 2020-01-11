import React from 'react';
import Header from '../../components/Header';
import { Switch, Logout } from '../../shared';

const BaseTemplate = props => {
    console.count('<BaseTemplate /> RENDER');
    return (
        <>
            <Header>
                <Switch />
                <Logout />
            </Header>
            {props.children}
        </>
    )
}

export default BaseTemplate;