export const addHeaders = options => {
    return options.headers ? options.headers : {};
}

export const addBody = options => {
    if (options.body) {
        try {
            return {
                body: JSON.stringify(options.body)
            };
        }
        catch (error) {
            console.error(error);
            return {}
        }
    }

    return {};
}
