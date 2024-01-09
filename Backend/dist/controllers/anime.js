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
exports.deleteAnime = exports.getAnime = exports.getAnimes = exports.updateAnime = exports.createAnime = void 0;
const anime_1 = require("../models/anime");
const createAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, url, img } = req.body;
    try {
        yield anime_1.Anime.create({
            name: name,
            description: description,
            url: url,
            img: img
        });
        res.json({
            msg: `El anime fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.createAnime = createAnime;
const updateAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, url, img } = req.body;
    const { id } = req.params;
    try {
        const anime = yield anime_1.Anime.findByPk(id);
        if (anime) {
            yield anime.update({
                name: name,
                description: description,
                url: url,
                img: img
            });
            res.json({
                msg: 'El anime fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un anime con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updateAnime = updateAnime;
const getAnimes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAnimes = yield anime_1.Anime.findAll();
    res.json(listAnimes);
});
exports.getAnimes = getAnimes;
const getAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const anime = yield anime_1.Anime.findByPk(id);
    if (anime) {
        res.json(anime);
    }
    else {
        res.status(404).json({
            msg: `No existe un anime con el id ${id}`
        });
    }
});
exports.getAnime = getAnime;
const deleteAnime = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const anime = yield anime_1.Anime.findByPk(id);
    if (!anime) {
        res.status(404).json({
            msg: `No existe un anime con el id ${id}`
        });
    }
    else {
        yield anime.destroy();
        res.json({
            msg: 'El anime fue eliminado con exito!'
        });
    }
});
exports.deleteAnime = deleteAnime;
