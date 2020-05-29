class Note {
    constructor(songJSON) {
    this.id = songJSON.id 
    this.title = songJSON.title
    }

    renderLi(){
        return `<li>${this.title}</li>`
    }

}