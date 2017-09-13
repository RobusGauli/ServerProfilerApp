const BASE_URL = 'http://192.168.0.103:8000'

export const nodes = () => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + '/nodes')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(e => {
            reject(e)
        })
    })
}