export function fetchData(url, process) {

    // fetchData takes a url string and returns a promise containing the parsed data fetched from the given URL. It also sets the state of data.
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => process(data))
        .catch(error => console.log("Looks like there was a problem!", error));

    // checkStatus takes a promise of fetched data, if the response is 'OK'. Otherwise it reject's the promise, returning a new error with the response status text.
    function checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

}
