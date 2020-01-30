1. When i click on search, the URL does not update to reflect my search terms. Instead, it stays on the Most Faved, Most Viewed or whatever page.
2. When the page loads, it shows no results.
3. When photos are loading, there's indicator

PROCESS 

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
