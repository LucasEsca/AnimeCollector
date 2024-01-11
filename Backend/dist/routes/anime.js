"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anime_1 = require("../controllers/anime");
const router = (0, express_1.Router)();
router.post('/', anime_1.createAnime); // Crear Anime
router.get('/', anime_1.getAnimes); // Obtener todos los Animes
router.get('/:id', anime_1.getAnime); // Obtener detalles de un Anime por ID
router.put('/:id', anime_1.updateAnime); // Actualizar Anime
router.delete('/:id', anime_1.deleteAnime); // Eliminar Anime
exports.default = router;
