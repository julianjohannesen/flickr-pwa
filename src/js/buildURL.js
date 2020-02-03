// Use the endpoint and options to build the API endpoint URL with parameters
export function buildURL(endpoint, options) {
    const keys = Object.keys(options);
    // Reduce the keys object, adding each 'key=value&' parameter as we go, and returning the complete string
    const optionsString = keys.reduce((acc, currentKey) => {
        return (acc +=
            currentKey + '=' + options[currentKey] + '&');
        }, '');
        // Return the full url string
        return endpoint + '?' + optionsString;
};