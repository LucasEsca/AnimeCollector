import { Router } from 'express';
import { createAnime, deleteAnime, getAnime, getAnimeById, updateAnime } from '../controllers/anime';
import validateToken from './validate-token';

const router = Router();

router.post('/',validateToken, createAnime); // Crear Anime
router.get('/', getAnime); // Obtener todos los Animes
router.get('/:id', getAnimeById); // Obtener detalles de un Anime por ID
router.put('/:id',validateToken, updateAnime); // Actualizar Anime
router.delete('/:id',validateToken, deleteAnime); // Eliminar Anime

export default router;