# Flickr PWA

## What is this?

Flickr PWA is a demonstration application built using React and accessing Flickr's public REST API. 

The application performs a text search for images and returns matching images along with details about each image. Search results display below the search box. Clicking an image pops up a modal with detailed information about that image. Pagination allows users to explore the full results of the search.

Two API endpoints were used to build this application. The Flickr's Search API provides a wealth of metadata on each image, but does not provide information about the number of users who have 'faved', viewed, or commented on each image. To access that data, I used Flickr's xxx API. 

Using data provided the xxx API, I added links to the most faved, most viewed, and most 'ratioed' images. The term 'ratioed' originated on Twitter where 'getting ratioed,' refers to a tweet that receives far more replies than likes or retweets. The implication being that the content of the tweet is objectionable. I've borrowed the term here to refer to the ratio of comments on an image to faves of that image. Draw your own conclusions as to the implications. I just thought it was fun.

Features:
- Search Flickr for images
- View search results below the search area
- Navigate search results using pagination controls at the bottom of the page
- Routes reflect search terms and page number
- Click on an image for detailed information about that image
- Error handling when a search term returns no results
- A 404 page for invalid routes
- An About page for information about the project
- Routes and pages for Most Faved, Most Viewed, and Most Ratio'ed images.
- Users can enter a search directly in the URL by adding /search/some-search-terms

## Local Use

To install the app locally, fork or clone it and then download it to your local development environment. Be sure to run:

```
npm install
```

to install all dependencies. 

To start the local server use:

```
npm start
```

The app will load, however it is not yet able to make calls to the Flickr API. For that, visit Flickr's Developer Pages and register for an API key.

Once you have the key, create a new file called config.js in your src folder. Open the file and add the following, supplying your own API key.

```js
export const apiKey = 'your-api-key-goes-here';
```

You should be all set.

## Development Notes

Flickr PWA was built with Reactjs and was bootstrapped with Create React App. Routing is accomplished with React Router 4. The app uses the native Fetch API. 