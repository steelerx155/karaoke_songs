class Songs {
    constructor(){
        this.songs = []
        this.adapter = new SongsAdapter()
        this.initBindAndEventListeners()
        this.fetchAndLoadSongs()
    }

    initBindAndEventListeners(){
        this.songsContainer = document.getElementById('songs-container')
        this.songForm = document.getElementById('new-song-form')
        this.songForm.addEventListener('submit', this.createSong)
    }

    createSong(){
        e.preventDefault()
        console.log("creating songs")
    }

    fetchAndLoadSongs(){
        this.adapter
        .getSongs()
        .then(songs => {
          songs.forEach(song => this.songs.push(new Song(song)))
        })
        .then(() => {
            this.render()

        })
    }

    render() {
        const songsString = console.log(songsString)
        const songsContainer = document.getElementById('songs-container')
        songsContainer.innerHTML = this.songs.map(song => song.renderLi()).join('')
   }
}