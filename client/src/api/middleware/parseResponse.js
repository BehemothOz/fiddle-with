const parseResponse = response => {
    const { ok, status, statusText, headers } = response;
    return response.json().then(body => {
        return { ok, status, statusText, headers, body };
    });
};

export default parseResponse;