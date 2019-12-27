import React from 'react';
import { Spin } from 'antd';
import Header from '../components/Header';
import Div from '../components/Div';
import P from '../components/P';
import Span from '../components/Span';

const initialState = {
    data: { count: 0 },
    fetching: false,
    error: null
}

const useAction = action => {
    const [state, setState] = React.useState(initialState);

    const performAction = async (body = {}) => {
        try {
            setState({ ...state, fetching: true });

            const data = await action(body);
            setState({ ...state, data: { count: state.data.count + data }, fetching: false });
        } catch (error) {
            setState({ ...state, error, fetching: false });
        } finally {
            console.log('finally')
        }
    }

    return [state, performAction];
}


const callPromise = data => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('time end!')
            resolve(data);
        }, 2000)
    })
}

const Home = () => {
    const [{ data, fetching }, perform] = useAction(callPromise);

    const click = () => {
        console.count('click');
        perform(1)
    }

    const getNumber = () => {
        return data ? data.count : 'unknown number'
    }

    return (
        <>
            <Header />
            <div style={{ padding: '20px' }}>
                <button onClick={click} style={{ marginRight: 10 }}>Set Name 'Ivan'</button>
                {fetching && <Spin />}
                <h4>Hello, world, {getNumber()}!</h4>
                <br /><br />
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