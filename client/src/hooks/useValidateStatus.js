const useValidateStatus = (error, touched, status) => {
    const hasError = (error || status) && touched;
    const message = hasError && (error || status);

    return [hasError, message];
}

export default useValidateStatus;