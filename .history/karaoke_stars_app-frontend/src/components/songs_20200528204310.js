class Songs {
    constructor(){
        this.songs = []
        this.adapter = new SongsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadSongs()

    }
    fetchAndLoadSongs(){
        this.adapter.getSongs().then(songs => {
           return console.log(songs) 
        })
        .then(() => {
            this.render()

        })
    }

    render() {
        console.log()
        const songsContainer = document.getElementById('songscontainer')
        songsContainer.innerHTML = 'my songs are here!!!'
    }
}