class songsAdapter {
    constructor() {
        this.baseurl ='http://localhost:3000/api/v1/songs'
    }

    getSongs() {
        return fetch(this.baseurl).then(resp => resp.json()
        )
    }
}

