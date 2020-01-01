import useAsync from './useAsync';
import useErrors from './useErrors';

const useFetch = func => {
    const [state, trigger] = useAsync(func);
    const handlerErrors = useErrors();

    const request = args => {
        return trigger(args).catch(handlerErrors);
    }

    return [state, request];
}

export default useFetch;
