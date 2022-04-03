import Pokedex from '/node_modules/pokedex-promise-v2';
const P = new Pokedex();

console.log("yes")



const url = 'https://pokeapi.co/api/v2/pokemon'


console.log('Fetch started')


fetch(url)
    .then(response => {
        // response is here raw response
        // developer should decode response(parse it depending on data type (JSON), check response status (404 responses will also happen here))
        console.log('Response', { response })

        // status can be better checked (e.g. interval 199-299, `ok` property, ...)
        if (response.status === 200) {
            response.json().then(decodedData => {
                console.log('Decoded response', decodedData)
                console.log(decodedData.results)
                const list = document.getElementById("list");
                for (let i=0;i<decodedData.results.length;i++){
                    list.innerHTML += `<li><div class="pokemon">
                            ${decodedData.results[i].name}
                            <img src=${decodedData.results[i].url}>
                        </div></li>`;
                }
            })
        } else {
            console.log('Response status code is not OK!')
        }
    })
    // if error occurs log to console as error
    .catch(console.error)
    // finally will be always called when promise finished (`then` or `catch`)
    .finally(() => {
        console.log('Fetch finished!')
})
