# Flickr PWA

## What is this?

Flickr PWA is a demonstration application built using React and accessing Flickr's public REST API. 

The application performs a text search for images and returns matching images along with details about each image. Search results display below the search box.

The app is deployed on Netlify here: https://jj-flickr-pwa.netlify.com/

## Features:

- Search Flickr for images
- View search results below the search area
- Routes reflected in address bar, including query parameters
- Error handling when a search term returns no results (try '@@@')
- A faux 404 page for invalid routes and server errors (Please note that this will not work on Netlify. Instead, users will be redirected to the homepage.)

## Local Use

To install the app locally, fork or clone it, and then download it to your local development environment. Be sure to run:

```
npm install
```

to install all dependencies. 

To start the local server use:

```
npm start
```


**Please note** that you will need to get a Flickr API Key. You can do that here: https://www.flickr.com/services/developer/api/

Once you have an API key, create a file called config.js in the 'src' directory. 

The content will be:

```js
export const apiKey = 'YOUR API KEY GOES HERE';
```

**Please note** that colorette may throw an error. Be sure you're using node ^14.5.0.

**Please note** that the linter may report a warning in useEffect. You can ignore it. The warning shows that the callback has dependencies not listed in the dependency array. That's fine, because we actually don't want to update the component when those other dependencies change.

## Development Notes

Flickr PWA was built with React.js hooks and was bootstrapped with Create React App. Routing is accomplished with React Router 5, also with hooks. The app uses the native Fetch API. 

## Issues

Please report any issues here: https://github.com/TAP-Projects/flickr-pwa/issues

## To do

- Refactor Cuties component to use newer fetch function
- Add page navigation to page through results
- Cache results so that using the forward and back buttons doesn't result in a reload
- Create a function on Netlify to hide me API key. Right now I'm use Netlify's env variables