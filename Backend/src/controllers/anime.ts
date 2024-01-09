import { Request, Response } from 'express';
import { Anime } from '../models/anime';

export const createAnime = async (req: Request, res: Response) => {
    const { name, description, url, img } = req.body;

    try {
        await Anime.create({
            name: name,
            description: description,
            url: url,
            img: img
        });

        res.json({
            msg: `El anime fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
};

export const updateAnime = async (req: Request, res: Response) => {
    const { name, description, url, img } = req.body;
    const { id } = req.params;

    try {

        const anime = await Anime.findByPk(id);

    if(anime) {
        await anime.update({
            name: name,
            description: description,
            url: url,
            img: img
        });
        res.json({
            msg: 'El anime fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un anime con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
};

export const getAnimes = async (req: Request, res: Response) => {
    const listAnimes = await Anime.findAll()

    res.json(listAnimes)
};

export const getAnime = async (req: Request, res: Response) => {
    const { id } = req.params;
    const anime = await Anime.findByPk(id);

    if (anime) {
        res.json(anime)
    } else {
        res.status(404).json({
            msg: `No existe un anime con el id ${id}`
        })
    }
};

export const deleteAnime = async (req: Request, res: Response) => {
    const { id } = req.params;
    const anime = await Anime.findByPk(id);

    if (!anime) {
        res.status(404).json({
            msg: `No existe un anime con el id ${id}`
        })
    } else {
        await anime.destroy();
        res.json({
            msg: 'El anime fue eliminado con exito!'
        })
    }
};