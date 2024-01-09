import { Injectable } from '@angular/core';
import { AnimeImages } from '../interfaces/anime-images';


@Injectable({
  providedIn: 'root'
})
export class AnimeImagesService {

  constructor() { }

  getAnimeImages(): any {
        
    var animeimages = new Array<AnimeImages>();

    animeimages = [
      new AnimeImages(1,"Berserk","Berserk nos cuenta la historia de Guts , un antihéroe mercenario que vaga por el mundo en solitario en búsqueda de Apóstoles , unos seres demoníacos que antaño fueron humanos pero que sacrificaron una parte importante de sus vidas para conseguir poderes que les permitieran alcanzar sus más oscuros deseos.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/Berserk.png"),
      new AnimeImages(2,"Baki","Baki es un anime japonés que se centra en Baki Hanma, un joven luchador que entrena intensamente para superar a su padre Yujiro Hanma que es uno de los luchadores más potentes del mundo. Pronto se ve obligado a poner a prueba su fuerza, ya que es retado por cinco presos del corredor de la muerte.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/baki.jpg"),
      new AnimeImages(3,"CowBoy Bebop","Cowboy Bebop aborda temas, tanto universales como de creciente interés a finales de los noventa, como el ecoterrorismo, la moral científica, el tráfico de drogas, la corrupción, la contaminación, la globalización y las familias desestructuradas.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/Cowboy_Bebop.jpg"),
      new AnimeImages(4,"Death Note","En la historia, la Death Note es una libreta con una portada negra y su nombre inscrito en ella. Esta libreta tiene la capacidad de matar a cualquier persona si se escribe su nombre en ella mientras el portador visualice el rostro de aquella persona.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/deathnote.jpe"),
      new AnimeImages(5,"Demon Slayer","La serie narra las desventuras de Tanjiro, un joven de un Japón feudal fantástico que se ve abocado a la venganza después de que un demonio acabe con toda su familia, a excepción de su hermana, Nezuko, también demoníaca y sedienta de sangre.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/demonslayer.webp"),
      new AnimeImages(6,"Digimon","Los Digimon (デジモン Dejimon) son criaturas de la franquicia japonesa Digimon. En la ficción, sus cuerpos están hechos de información digital, y cuando reciben gran daño, la información con la que están constituidos se daña y son destruidos.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/digimon.webp"),
      new AnimeImages(7,"Dragon Ball","Su trama describe las aventuras de Gokū, un guerrero saiyajin, experto en artes marciales que en su infancia inicia sus viajes y aventuras en las que pone a prueba y mejora sus habilidades de pelea, enfrentando oponentes y protegiendo a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/Dragon-Ball-Z.webp"),
      new AnimeImages(8,"Hajime No Ippo","Hajime no Ippo (はじめの一歩 traducido al español como El primer paso), también conocido como Fighting Spirit y Espíritu de lucha en Hispanoamérica, es un manga sobre boxeo creado por el autor Jyoji Morikawa (森川ジョージ) que además de ser un mangaka, es un mánager de boxeadores entre los que destaca Manabu Fukushima.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/hajimenoippo.jpg"),
      new AnimeImages(9,"Hellsing","El manga relata los esfuerzos de los misteriosos y secretos Caballeros Protestantes Reales, la organización «Hellsing» y sus combates contra vampiros, ghouls y otros enemigos sobrenaturales que amenazan al Reino Unido de Gran Bretaña.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/hellsing.webp"),
      new AnimeImages(10,"JoJo's","Este shonen trata todo tipo de géneros y tonos, desde un drama victoriano con vampiros, un slice of life con asesinos en serie a un grupo de agentes de la mafia italiana, combinando acción, comedia y drama con una calidad de animación que aumenta increíblemente cada temporada.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/jojos.jpg"),
      new AnimeImages(11,"Megalobox","Megalo Box, ese deporte que cautiva al mundo, el cual combina la destreza del boxeo con la tecnología de los “Gear”, unos dispositivos que permiten ampliar la fuerza y agilidad física de su usuario. J.D (Junk Dog) es un peleador de Megalo Box que participa en peleas clandestinas arregladas para poder vivir.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/megalobox.jpg"),
      new AnimeImages(12,"Naruto","La obra narra la historia de un Ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas (Kyubi), y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/naruto.jpg"),
      new AnimeImages(13,"Record Of Ragnarok","Los dioses han decidido liquidar a la humanidad, así que una de las Valquirias les pide aplicar uno de sus puntos del reglamento, un Ragnarok: una batalla entre 13 dioses y 13 humanos, 13 combates individuales que darán la victoria al primero que gane siete veces. Si triunfan los dioses, se termina la existencia de la humanidad. Si ganan los humanos, obtienen mil años más.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/recordofragnarok.jpg"),
      new AnimeImages(14,"Saint Seiya: Lost Canavas","Desde tiempos mitológicos tiene lugar una Guerra Santa en la que la diosa Atenea y Hades se enfrentan cada doscientos años por el destino de la Tierra. Tenma, Alone y Sasha, tres huérfanos que han crecido juntos, se despiden con la promesa de volver a reunirse algún día.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/saintlost.jpg"),
      new AnimeImages(15,"Saint Seiya","La trama de la serie se centra en un grupo de jóvenes guerreros denominados Saints (o Caballeros en varias traducciones), que luchan junto a la diosa griega Athena para proteger a la humanidad de las fuerzas del mal que quieren dominar la Tierra.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/saintseiya.jpg"),
      new AnimeImages(16,"Trigun","La serie cuenta la historia de Vash Estampida (conocido como 'El Huracán Humano'), un miembro pacifista de la raza de los Planta, que viaja a través del mundo de Gunsmoke (traducido como 'Arma Humeante') para buscar a su hermano Knives y detenerlo de sus planes por destruir a la raza humana.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/trigun.jpg"),
      new AnimeImages(17,"Vinland Saga","Esta saga relata la historia de Thorfinn en su camino para vengarse de la muerte de su padre en batalla. Sus hazañas para poder retar al asesino de su padre lo llevan a involucrarse en la fuera por la corona de Inglaterra.","https://www.youtube.com/watch?v=H6dkuEdzaFY","/assets/images/Portadas/vinland.jpg"),
      
    ];
    return animeimages;
  }

  detailAnimeImages():any{
    
  }
}
