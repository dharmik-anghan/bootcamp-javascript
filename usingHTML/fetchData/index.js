/*
    fetch = Function used for making http requests to fetch resources.
    (JSON style data, images, files)
    Simplifies async data fetching in JS and used for interacting with APIs to retrieve
    and send data async over the web.

    fetch(url, {options})
    fetch(url, {method: "GET"/"POST"/"PUT"/"DELETE"}) etc...
*/

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }

//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function fetchData(){
    try{

        const pokemonName =  document.getElementById("pokemonName").value.toLowerCase();

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch (error){
        console.error(error)
    }
}