
const url = 'https://pokeapi.co/api/v2/pokemon'


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
                    uri = decodedData.results[i].url
                    uri = uri.split('/')
                    uri = uri[uri.length - 2];
                    getPokemon(uri)
                    //getPokomonType(uri)
                    list.innerHTML +=
                        `
                        <div class="window">
                            <div id="${uri}"   class="img-box">
                                <img  class="project__image" src=${"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + uri + ".png"}>
                                <div class="transparent-box">
                                    <div class="caption">
                                        <p>${decodedData.results[i].name.toUpperCase()}</p>
                                        <p class="opacity-low" id=${"name_"+uri}></p>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay">
                                <button onclick="myFunction(${uri})" >
                                    <img id="ball_${uri}" class="overlay_image" src="ball_open.png">
                                </button>
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
                    //localStorage.setItem(id, decodedData);
                    const p = document.getElementById("name_"+id)
                    console.log(decodedData.types[0].type.name)
                    p.innerHTML = decodedData.types[0].type.name
                })
            } else {
                console.log('Response status code is not OK!')
            }
        })
        .catch(console.error)
        // finally will be always called when promise finished (`then` or `catch`)
        .finally(() => {
            //console.log('Fetch finished!')
        })
}



function myFunction(id) {
    const targetDiv = document.getElementById(id);
    const targetImg=document.getElementById("ball_"+id)
     
    if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
        targetImg.src="ball_open.png"

      } else {
        targetDiv.style.display = "none";
        targetImg.src="ball.png"

      }
    console.log(id)
}

//ništa ne radi funkcija , imao sam jednu ideju ,ali previše sam vremena proveo na oveme pa sam odustao

/*async function getPokomonType(id) {
    fetch("https://pokeapi.co/api/v2/gender/" + id + "/")
        .then(response => {
            if (response.status === 200) {
                response.json().then(decodedData => {
                    //localStorage.setItem(id, decodedData);
                    const p = document.getElementById("name_"+id)
                    console.log(decodedData)
                    p.innerHTML = decodedData.name
                })
            } else {
                const p = document.getElementById("name_"+id)
                p.innerHTML = "unknown"
                console.log('Response status code is not OK!')
            }
        })
        .catch(console.error)
        // finally will be always called when promise finished (`then` or `catch`)
        .finally(() => {
            //console.log('Fetch finished!')
        })
}*/