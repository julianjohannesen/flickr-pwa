# Notes

## Response structure

The object has two properties: photos, and stat. photos has 
- page, 
- pages, 
- perpage, 
- total, and 
- photo properties. 

photos.photo is an array of photo objects. Each photo has a lot of properties, but the interesting ones to me are: 
- title, 
- description._content, 
- o_width, 
- o_height, 
- datetaken, 
- ownername, tags, and then 
- all of the urls for different versions with height and width for each

The status or "stat" can be "ok" or "fail". When it fails, there's a code and message that appear along with the photo and state properties.

## Strategies

Possibility 1:
1. First - Click submit in the search form, or click a nav button, or enter a search into the browser's nav bar
2. Then - All of these are links to new routes that render the same component. When the component is rendered, it is passed the query terms, which were extracted from the new route by accessing React Router's Match object
3. Then - When the new component renders, it fetchs data using the passed in query terms
5. Then - When the fetch returns the data, React rerenders the page with the new data

Possibility 2: 
1. First - Click submit in the search form, or click a nav button, or enter a search into the browser's nav bar. 
2. Then - The click handler fetchs the data 
3. Simultaneously - The click hanlder uses the event data to update the URL in the browser nav bar, using the Path object
4. Then - When the fetch returns the data, React rerenders the page with the new data

Possibility 3: 
1. Handle the search and the nav clicks separately. Option 1 is used for the nav links, but option 2 is used for search

## Questions:

How can I easily make searches show the search terms as query parameters in the address bar while still adhering to React Router best practices?

Should I pass any query parameters as URL params rather than passing as props? This is a different approach. Right now, I update the query terms variable in App and pass it down to Search. App is above Form and Search, the latter two are siblings.

If I did the above, what effect would that have on forward and back buttons after performing a search?


