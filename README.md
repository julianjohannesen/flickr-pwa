# Flickr PWA

## What is this?

Flickr PWA is a demonstration application built using React and accessing Flickr's public REST API. 

The application performs a text search for images and returns matching images along with details about each image. Search results display below the search box.

The app is deployed on Netlify here: https://jj-flickr-pwa.netlify.com/

## Features:

- Search Flickr for images
- View search results below the search area
- Routes reflected in address bar (but not query parameters)
- Error handling when a search term returns no results (try '@@@')
- A faux 404 page for invalid routes (Please note that this will not work on Netlify. Instead, users will be redirected to the homepage.)
- An About page for information about the project

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

Please note that you will need to get a Flickr API Key. You can do that here: https://www.flickr.com/services/developer/api/

Once you have an API key, create a file called config.js in the 'src' directory. 

The content will be:

```js
export const apiKey = 'YOUR API KEY GOES HERE';
```

## Development Notes

Flickr PWA was built with Reactjs and was bootstrapped with Create React App. Routing is accomplished with React Router 5. The app uses the native Fetch API. 

## Issues

Please report any issues here: https://github.com/TAP-Projects/flickr-pwa/issues