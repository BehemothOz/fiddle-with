import React, { useCallback } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import Form from './components/Form';
import List from './components/List';
import useSubmit from '../../hooks/async/useSubmit';
import { DICTIONARY_POST } from '../../api/keys';

import Page from './components/Page';

const HomePage = () => {
    console.count('<HOME /> RENDER');
    const [state, submit] = useSubmit({ key: DICTIONARY_POST });
    console.log(state)
    const handleSubmitSuccess = useCallback(() => {
        console.log('ok')
    }, []);

    return (
        <BaseTemplate>
            <div>Home page</div>
            <Form
                fetching={state.fetching}
                onSubmit={submit}
                onSubmitSuccess={handleSubmitSuccess}
            />
            <List />
            <Page />
        </BaseTemplate>
    )
}

export default HomePage;