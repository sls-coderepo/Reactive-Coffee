const remoteURL = "http://localhost:5002"

export default {
    getAll(resource) {
        return fetch(`${remoteURL}/${resource}`).then(result => result.json())
    }
}