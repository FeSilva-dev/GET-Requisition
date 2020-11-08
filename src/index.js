import "core-js"
import "regenerator-runtime/runtime"
import Neo from './neo'
import { getNeos } from './neo_service'


async function loadNeos(){
    let neos = []
    let neoJson = await getNeos()
    // usamos o forEach pois o response da async functions contendo os valores
    // é um array
    // e o parametro neo, ele vai ser atribuido para cada valor do array
    neoJson.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const average = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo["id"], neo["name"], average, neo["is_sentry_object"])
        neos.push(newNeo)
    })

    renderNeos(neos)
}

function renderNeos(neos){
    const ulElement = document.getElementById("neo-list")
    neos.forEach(neo => {
        const liElement = document.createElement('li')
        const isSentry = neo.isSentry ? "Perigo de colisão com a terra" : "Sem perigo de colisão"
        liElement.innerText = `Nome: ${neo.name} | ID: ${neo.id} | Average: ${neo.average} | ${isSentry}`
        ulElement.appendChild(liElement)
    })

}

loadNeos()
