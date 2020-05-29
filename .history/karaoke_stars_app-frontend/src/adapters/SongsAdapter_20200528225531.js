class SongsAdapter {
    constructor() {
        this.baseUrl ='http://localhost:3000/api/v1/songs'
    }

    getSongs() {
        return fetch(this.baseUrl).then(resp => resp.json())        
    }

    createSong(value) {
        return fetch(this.baseUrl)

    }
}

