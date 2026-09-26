// This is my refactored code 

// ==============================================
// 1. GLOBAL VARIABLES FOR MY API & DOM ELEMENTS
// ==============================================

//API Variable
const myApiUrl = "https://freedictionaryapi.com/api/v1/entries/en/";
//DOM Variables
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");

// ==========================================
// 2. EVENT LISTENER
// ==========================================
// Event listener attached to form. Listens for form submission
form.addEventListener("submit", (event) => {
    // Keep page from reloading
    event.preventDefault();
    // clears output for each new submission
    clearOutput();
    // calls getDefinition function
    getDefinition();
});

// ==========================================
// 3. FUNCTIONS
// ==========================================

// Fetches definition data from the API using an asynchronous function
async function getDefinition() {
    // variable for storing user input
    const word = searchInput.value.trim();
    
    try {
        //Function execution paused until data is retrieved
        const response = await fetch(`${myApiUrl}${word}`);
        const info = await response.json();
        
        //logs full info array and target info
        console.log(info);
        console.log(info.entries[0].senses[0].definition);
        //calls displayDefinition function with target info as a parameter
        displayDefinition(info.entries[0].senses[0].definition);
    } catch (error) {
        // logs error
        console.log(error);
        // Sends Invalid Input to the displayError function for values that are integers or are not words.
        displayError("Invalid Input");
    }
}

// Renders the definition to the webpage
function displayDefinition(information) {
    const definition = document.createElement("p");
    definition.textContent = "Definition: " + information;
    output.appendChild(definition);
}

// Renders an error message to the webpage for invalid inputs
function displayError(message) {
    const errorMsg = document.createElement("p");
    errorMsg.textContent = message;
    output.appendChild(errorMsg);
}

// Clears the previous search results
function clearOutput() {
    output.innerHTML = "";
}



// This was my first iteration. Code was functional but all over the place
// and difficult to read.

/*const myApiUrl = "https://freedictionaryapi.com/api/v1/entries/en/";
const output = document.querySelector("#output");

async function getDefinition() {
    const word = searchInput.value.trim();
        if(!word) return;

    try{
        const response = await fetch(`${myApiUrl}${word}`)
        const info = await response.json()
        console.log(info)
        console.log(info.entries[0].senses[0].definition)
        displayDefinition(info.entries[0].senses[0].definition)
    }catch(error){
        console.log(error)
    }
}

const searchInput = document.querySelector("#search")
const form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearOutput();
getDefinition();
})

function displayDefinition(information) {
   const definition = document.createElement("p");
   definition.textContent = "Definition: " + information;

   output.appendChild(definition);
}

function clearOutput() {
    output.innerHTML = "";
}*/
