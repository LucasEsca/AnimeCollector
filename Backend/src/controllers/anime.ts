import { Request, Response } from 'express';
import { Anime } from '../models/anime';

export const createAnime = async (req: Request, res: Response) => {
    const { name, description, url, img } = req.body;

    try {
        const newAnime = await Anime.create({
            name,
            description,
            url,
            img,
        });

        res.json(newAnime);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al crear el anime',
            error,
        });
    }
};

export const updateAnime = async (req: Request, res: Response) => {
    const animeId = req.params.id;

    try {
        const existingAnime = await Anime.findByPk(animeId);

        if (!existingAnime) {
            return res.status(404).json({
                msg: 'Anime no encontrado',
            });
        }

        // Guardar los cambios
        await existingAnime.save();

        res.json(existingAnime);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el anime',
            error,
        });
    }
};

export const getAnime = async (req: Request, res: Response) => {
    try {
        const animeList = await Anime.findAll();
        res.json(animeList);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener la lista de animes',
            error,
        });
    }
};

export const getAnimeById = async (req: Request, res: Response) => {
    const animeId = req.params.id;

    try {
        const anime = await Anime.findByPk(animeId);

        if (!anime) {
            return res.status(404).json({
                msg: 'Anime no encontrado',
            });
        }

        res.json(anime);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los detalles del anime',
            error,
        });
    }
};

export const deleteAnime = async (req: Request, res: Response) => {
    const animeId = req.params.id;

    try {
        await Anime.destroy({ where: { id: animeId } });
        res.json({ msg: 'Anime eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al eliminar el anime',
            error,
        });
    }
};