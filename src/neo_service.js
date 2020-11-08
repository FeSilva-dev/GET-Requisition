export async function getNeos(){
    // fetch retorna uma promisse, e no resolve dessa promisse, é o valor que a promisse retorna no resolve
    // fetch vai retornar um objeto
    // coloquei o await justamente para pegar somente o resolve da promisse
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY") 
    // await no result porque estamos trabalhando com promisse
    const result = await response.json()
    // to retornando a chave near_earth onde tem todos os objetos
    return result["near_earth_objects"]
}