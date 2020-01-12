import useAsync from './useAsync';
import useErrors from './useErrors';

const useFetch = options => {
    const [state, trigger] = useAsync(options);
    const handlerErrors = useErrors();

    const request = args => {
        return trigger(args).catch(handlerErrors);
    }

    return [state, request];
}

export default useFetch;
