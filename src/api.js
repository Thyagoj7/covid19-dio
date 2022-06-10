const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country) {                  //Com esta função vamos passar um pais e seus dados serão retornados
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}