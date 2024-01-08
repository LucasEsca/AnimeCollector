"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnime = exports.getAnimeById = exports.getAnime = exports.updateAnime = exports.createAnime = void 0;
const anime_1 = require("../models/anime");
const createAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, url, img } = req.body;
    try {
        const newAnime = yield anime_1.Anime.create({
            name,
            description,
            url,
            img,
        });
        res.json(newAnime);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al crear el anime',
            error,
        });
    }
});
exports.createAnime = createAnime;
const updateAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const animeId = req.params.id;
    try {
        const existingAnime = yield anime_1.Anime.findByPk(animeId);
        if (!existingAnime) {
            return res.status(404).json({
                msg: 'Anime no encontrado',
            });
        }
        // Guardar los cambios
        yield existingAnime.save();
        res.json(existingAnime);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el anime',
            error,
        });
    }
});
exports.updateAnime = updateAnime;
const getAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const animeList = yield anime_1.Anime.findAll();
        res.json(animeList);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener la lista de animes',
            error,
        });
    }
});
exports.getAnime = getAnime;
const getAnimeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const animeId = req.params.id;
    try {
        const anime = yield anime_1.Anime.findByPk(animeId);
        if (!anime) {
            return res.status(404).json({
                msg: 'Anime no encontrado',
            });
        }
        res.json(anime);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los detalles del anime',
            error,
        });
    }
});
exports.getAnimeById = getAnimeById;
const deleteAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const animeId = req.params.id;
    try {
        yield anime_1.Anime.destroy({ where: { id: animeId } });
        res.json({ msg: 'Anime eliminado correctamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al eliminar el anime',
            error,
        });
    }
});
exports.deleteAnime = deleteAnime;
