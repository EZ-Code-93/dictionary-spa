# dictionary-spa
repository for flatiron schools module 24 single page dictionary application lab

//API Variable
const myApiUrl = "https://freedictionaryapi.com/api/v1/entries/en/";

The API used does not require an API key and is CORS enabled

I went with this alternate API because the dictionary API provided in the lab was not functional.
I tested it directly on there webpage and it would load for a long time and then return a timeout error.

Fully functional single page dictionary application can be ran in the live server.

no dependencies installed so app can be ran immediately without having to run npm install.

==========
HTML File
==========
HTML file includes links to stylesheet and javascript
all elements are encapsulated within the body of the webpage, which includes:
    - a header with an h1 title and 2 images as children
        -image #1 class = leftImage
        -image #2 class = rightImage
        -h1 class = title
    - a form with a text input and submit button
        -form id and class = form
        -input is type="text" and id and class = search
        -button is type="submit" and id and class = btn
    - an empty div for storing definition text following form submission 
        -div id and class = output


==========
CSS File
==========
CSS File includes sizing formats and shrink and stretch with viewport
color scheme includes:
- navy
- orange
- navajowhite


====================
JavaScript File
====================
API and DOM elements stored in global variables at top of page

- event listener attached to form submission and calls preventDefault to prevent page refresh and clearOutput to clear previous event and then calls initial fetch function...
- asynchronous getDefinition fetch function links to...
- displayDefinition function and in case of invalid input displayError function.

Individual functions:
- asynchronous getDefinition fetch function uses a try...catch block for error handling and calls await on API fetch and json parse

- clearOutput function is used to clear previous event

- displayDefinition function takes parsed json API data and stores it in a p element that it creates and appends to the output div

- displayError function takes error message "Invalid Input" and stores it in a p element that it creates and appends to the output div