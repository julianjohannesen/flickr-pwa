//import { apiKey } from "../config.js";

// Plug query parameters into url
export function buildURL(query) {
    // The flickr API search endpoint and query parameters
    return `
        https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.NODE_ENV === "production" ? process.env.REACT_APP_FLICKR_API : apiKey}&text=${query}&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=24&format=json&nojsoncallback=1&
        `;
};