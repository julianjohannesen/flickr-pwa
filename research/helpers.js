// This is a wish list item. I wrote a function to append API options to the URL, but to use it, I'd need to build a whole "advanced search" feature that would allow the user to set various options.  That's a lot of work for demonstration app that I've already worked on a lot. I'm better off working on caching results and figuring our pagination.

// Use the endpoint and options to build the API endpoint URL with parameters
export function buildURL (endpoint, options) {
    const keys = Object.keys(options);
    // Reduce the keys object. Add each 'key=value&' parameter. Return the complete string
    const optionsString = keys.reduce( (acc, currentKey) => {
        return acc += currentKey + "=" + options[currentKey] + "&";
    }, '');
    // Return the full url string
    return endpoint + "?" + optionsString;
}