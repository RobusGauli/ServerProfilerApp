const BASE_URL = 'http://10.20.30.155:9000'

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