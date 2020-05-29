class SongsAdapter {
    constructor() {
        this.baseUrl ='http://localhost:3000/api/v1/songs'
    }

    getSongs() {
        return fetch(this.baseUrl).then(resp => resp.json())        
    }

    createSong(value) {
        const song = {
            title: value,
        }
        return fetch(this.baseUrl, {
         method: 'POST',   
         title: JSON.stringify({ song }),

        })
    }
    }