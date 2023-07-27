export class Anime {
    id! : number;
    name : string;
    description : string;
    img : File | null;
    

    constructor(name : string, description : string, img : File | null) {
        this.name = name;
        this.description = description;
        this.img = img;
    }
}