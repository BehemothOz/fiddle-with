import React from 'react';
import Header from './components/Header';
import Div from './components/Div';
import P from './components/P';
import Span from './components/Span';

const Home = () => {
    return (
        <>
            <Header />
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