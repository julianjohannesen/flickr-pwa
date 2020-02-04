export function fetchData(url, liftUpState) {

    // fetchData takes a url string and returns a promise containing the parsed data fetched from the given URL. It also sets the state of data.
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => liftUpState(data))
        .catch(error => console.log("Looks like there was a problem!", error));

    // If the server responds with 'ok,' then checkStatus resolves the response, passing it along to whatever comes next. Otherwise it reject's the promise, passing along a new error with the response status text included.
    function checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            // If the server returns a response other than 'ok', then reject the promise and pass along a new Error with the server response's status text.
            return Promise.reject(new Error(response.statusText));
        }
    }

}
