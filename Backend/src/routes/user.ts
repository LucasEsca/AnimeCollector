import { Router } from 'express';
import { loginUser, newUser, updateUserRole } from '../controllers/user';

const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
router.put('/:id/role', updateUserRole);

export default router;