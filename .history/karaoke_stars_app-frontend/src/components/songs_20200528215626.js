class Songs {
    constructor(){
        this.songs = []
        this.adapter = new SongsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadSongs()

    }

    fetchAndLoadSongs(){
        this.adapter
        .getSongs()
        .then(songs => {
          songs.forEach(song => this.songs.push(new Song(song)))
          console.log(this.songs) 
        })
        .then(() => {
            this.render()

        })
    }

    render() {
        const songsString = console.log(songsString)
        const songsContainer = document.getElementById('songs-container')
        songsContainer = 'my songs are here:'

        songsContainer.innerHTML = this.songs.map(song => `<li>$(song.title)</li>`).join('')
   }
}