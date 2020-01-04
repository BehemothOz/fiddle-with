import React from 'react';
import Header from '../../components/Header';
import Div from './components/Div';
import P from './components/P';
import Span from './components/Span';
import { Switch } from '../../shared'

const Block = () => {
    console.count('BLOCK BETWEEN HEADER AND SWITCH')

    return <div>1</div>
}

const Home = () => {
    console.count('<HOME /> RENDER');
    return (
        <>
            <Header>
                <Block />
                <Switch />
            </Header>
            <div style={{ padding: '20px' }}>
                <Div>
                    <P>
                        <Span />
                    </P>
                </Div>
            </div>
        </>
    )
}

export default Home;