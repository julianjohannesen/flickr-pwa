export default async function fetchIt() {

    // The API key will be available from App.js. The tag will come from the search form submission. For now, I'll set the per_page to 24.
    const per_page = 24;
    
    // Flickr API's search endpoint
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${tag}&privacy_filter=1&safe_search=1&content_type=1&media=photos&is_commons=true&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=${per_page}&format=json&nojsoncallback=1`;

    // FUNCTION fetchData =====================================================
    // fetchData takes a url string and returns a promise containing the parsed data fetched from the given URL
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log("Looks like there was a problem!", error));

    
    // FUNCTION checkStatus ====================================================
    // checkStatus takes a promise of fetched data, if the response is 'OK'. Otherwise it reject's the promise, returning a new error with the response status text.
    function checkStatus(response) {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    // Response structure
    // The object has two properties: photos, and stat. photos has page, pages, perpage, total, and photo properties. photos.photo is an array of photo objects. Each photo has a lot of properties, but the interesting ones to me are: title, description._content, o_width, o_height, datetaken, ownername, tags, and then all of the urls for different versions with height and width for each
}
