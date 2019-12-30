const abortableFetch = (request, opts) => {
    const controller = new AbortController();
    const signal = controller.signal;

    return {
        abort: () => controller.abort(),
        start: () => fetch(request, { ...opts, signal })
    };
}

export default abortableFetch;