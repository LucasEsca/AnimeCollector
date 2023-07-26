export class Anime {
    id! : number;
    name : string;
    description : string;
    img : File;
    

    constructor(name : string, description : string, img : File) {
        this.name = name;
        this.description = description;
        this.img = img;
    }
}