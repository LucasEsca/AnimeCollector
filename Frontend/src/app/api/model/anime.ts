import { Binary } from "@angular/compiler";
export class Anime {
    
  id?: number;
  name : string;
  description : string;
  url : string;
  img : string;

  constructor(name: string, description: string, url: string, img: string) {
      this.name = name;
      this.description = description;
      this.url = url;
      this.img = img;
  }
}

