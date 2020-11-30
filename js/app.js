/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/
//let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';

//let url = 'http://www.omdbapi.com/?apikey=73d6e680';

let inputSearch = document.getElementById('input');
let container = document.getElementById('container');
let button = document.getElementById('submit');

button.addEventListener('click', fetchData);

async function fetchData(event) {
   event.preventDefault();
    try {
    let response = await fetch('http://www.omdbapi.com/?apikey=73d6e680&s=' + inputSearch.value)
    let data = await response.json();
    console.log(data);
    
    let html = '';
   
    for(let movie of data['Search']) {
        html += '<div id="iron">';

        html += `<img class="img" scr="${movie.Poster}">`;
        html += `<p>${movie.Title}<p>`;
        html += `<p>${movie.Type}<p>`;
        html += `<p>${movie.Year}<p>`;
        //html += `<p>${movie.imdbID}<p>`;
        
        html += '</div>';
      } 
   
     container.innerHTML = html;
    
    }catch(message) {
        throw new Error(message);
    } 
}