import React, { useCallback } from 'react';
import Form from '../Form2';
import useSubmit from '../../../../hooks/async/useSubmit';
import { WORD_POST } from '../../../../api/keys';

const Page = () => {
    // console.count('<HOME /> RENDER');
    const [state, submit] = useSubmit({ key: WORD_POST });

    const handleSubmitSuccess = useCallback(() => {
        console.log('ok')
    }, []);

    return (
        <Form
            fetching={state.fetching}
            onSubmit={submit}
            onSubmitSuccess={handleSubmitSuccess}
        />
    )
}

export default Page;