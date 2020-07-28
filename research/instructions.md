# Create your project

Use the create-react-app to set up and create your initial project directory.

## Build your app components

Use the index.html file and mockups as a general guide while you create the components of this project.

Use the src/App.js file as your main container component.

Stateless functional components work well for components that focus on the UI and receive data via props. 

Some examples of the stateless components you could use for your app are:

- A **Photo** component that displays the li and img elements.
- A **Nav** component for the apps navigation links.
- A **NotFound** component for displaying a user friendly message when the search return no results

Stateful class components will be better suited for your **search form** and **photo container** where data can be managed with state.

## Get a Flickr API key

Create yahoo account/use tumblr account to sign in.

Apply for a non-commercial API key.

You’ll need to set up a config.js file in your project that imports your API key into your application so that you and other users can request data from the Flickr API. 
- This should be imported into src/App.js.
- The config.js file should look something like this:
```js
const apiKey = 'YOUR API KEY';
export default apiKey;
```
- Import your API key into your application, preferably into src/App.js, and save it to a variable like you would any other module, and use the variable where applicable. That way, your app’s users will only need to enter in an API key once.
- The config.js file **must** be listed in the .gitignore file

## Routes
Install React Router and set up your <Route> and <Link> or <NavLink> elements.

Include a "Search" link that includes a search field to let users search for photos.

- Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.

- The current route should be reflected in the URL.

- Your app should display at least 3 default topic links that return a list of photos matching some criteria. For example: sunsets, waterfalls and rainbows.

- Request and load the photos for the three default topics when the app first loads, but don't re-request and reload new data every time one of those pages are loaded.

NOTE: When your routing is setup correctly, App.js will have a Switch element, and nested inside of that, you will have separate Route tags for each of your three main topics.

## Requesting the data
Fetch the data from the Flickr API using the Fetch API or a tool like Axios.

Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.

It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.

Enter a tag to search for, such as “sunsets.”

You should also limit the number of results to 24 using the per_page argument.

Choose JSON as the output, then “Do not sign call.”

Click “Call Method...” 

At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

NOTE: **Don't use a click listener on your nav links to fetch the data.** The Nav component is not a container component, and should not fetch the data. 

Also, new data does not need to be fetched every time a nav button is clicked. It's fine if your app requests the data for your three main topics only once when the app first loads, and simply updates the display when navigating between routes.

NOTE: When you're correctly fetching your data from a container component and passing it down to the display component, and your routing is correctly setup, **the URL in the address bar will match what is displayed on the page regardless of whether you use the nav buttons, the browser's forward and back buttons, or paste a URL directly into the address bar. But for this project, it's okay if pasting a search route URL doesn't display search results.**

## Search

Be sure to include a search field feature and a search route to search for new categories of images.

## Displaying the data

Make sure each image gets a unique "key" prop. There should be no console warnings regarding unique "key" props.

The title of each page displaying images should be dynamically provided via "props".

The current route should be reflected in the URL.

There should be no more that 24 images displayed.

## CSS styles

The mockups are just a general guide for how the elements should be arranged and positioned on the page. But other than general arrangement, spacing and positioning, you are free to experiment with things like color, background color, font, shadows, transitions, animations, etc..

## Exceeds

Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.

If no matches are found by the search, display a friendly user message to tell the user there are no matches. Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route.
