import { useHistory } from "react-router-dom";
import { useCallback } from "react";

const useErrors = () => {
    const history = useHistory();

    const handlerErrors = useCallback(error => {
        const {
            status,
            // message,
            // body = {}
        } = error;

        switch (status) {
            case 400: {
                console.log('This is 400 error');
                // call notification with body.message;
                break;
            }
            case 401: {
                history.push('/');
                break;
            }
            case 404: {
                console.log('This is 401 error');
                break;
            }
            case 406: {
                console.log('This is 406 error');
                break;
            }
            default: {
                console.log('This is 500 error');
                // call notification with message;
            }
        }
    }, [history])

    return handlerErrors;
}

export default useErrors;