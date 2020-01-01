import useAsync from './useAsync';
import useErrors from './useErrors';

const useSubmit = func => {
    const [state, trigger] = useAsync(func);
    const handlerErrors = useErrors();

    const submit = args => {
        const { formikBag, useStatus, ...rest } = args;

        return trigger(rest)
            .catch(error => {
                const { status } = error;

                if (status === 400 && useStatus) {
                    const { fields } = error.body;
                    formikBag.setStatus(fields);
                }

                handlerErrors(error)
            })
            .finally(() => formikBag.setSubmitting(false))
    }

    return [state, submit];
}

export default useSubmit;