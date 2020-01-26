import {useCallback} from 'react';
import useAsync from './useAsync';
import useErrors from './useErrors';

const useFetch = options => {
    const [state, trigger] = useAsync(options);
    const handlerErrors = useErrors();

    const request = useCallback(args => {
        return trigger(args).catch(handlerErrors);
    }, [trigger])

    return [state, request];
}

export default useFetch;
