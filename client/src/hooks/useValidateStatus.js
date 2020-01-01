const SUCCESS = 'success';
const ERROR = 'error';
const DEFAULT = '';

const getValidateStatus = (error, touched) => {
    if (!touched) return DEFAULT;
    if (error && touched) return ERROR;

    return SUCCESS;
}

const useValidateStatus = (error, touched, status) => {
    const hasError = (error || status) && touched;

    const message = hasError && (error || status);
    const validateStatus = getValidateStatus(message, touched);

    return [validateStatus, message];
}

export default useValidateStatus;