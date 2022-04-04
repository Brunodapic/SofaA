

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
                const list = document.getElementById("portfolio");
                for (let i = 0; i < decodedData.results.length; i++) {
                    console.log(decodedData.results[i].url)
                    uri = decodedData.results[i].url
                    uri = uri.split('/')
                    uri = uri[uri.length - 2];
                    getPokemon(uri)
                    console.log(localStorage.getItem(uri))
                    list.innerHTML +=
                        `<div class="img-box">
                        <img class="project__image" src=${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + uri + ".png"}>
                        <div class="transparent-box">
                            <div class="caption">
                                <p>${decodedData.results[i].name}</p>
                                <p class="opacity-low" id=${uri}></p>
                            </div>
                        </div> 
                     </div>`;
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

async function getPokemon(id) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
        .then(response => {
            if (response.status === 200) {
                response.json().then(decodedData => {
                    console.log(decodedData)
                    localStorage.setItem(id, decodedData);
                    const p=document.getElementById(id)
                    p.innerHTML=decodedData.species.name
                })
            } else {
                console.log('Response status code is not OK!')
            }
        })
        .catch(console.error)
        // finally will be always called when promise finished (`then` or `catch`)
        .finally(() => {
            console.log('Fetch finished!')
        })
    }