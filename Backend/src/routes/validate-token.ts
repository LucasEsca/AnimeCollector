import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7);
            const decodedToken: any = jwt.verify(bearerToken, process.env.SECRET_KEY || 'lucas1234');
            
            // Verificar si el usuario tiene el rol de administrador
            if (decodedToken.role === 'admin') {
                next();
            } else {
                return res.status(403).json({
                    msg: 'Acceso denegado. Permiso insuficiente.'
                });
            }
        } catch (error) {
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    } else {
        res.status(401).json({
            msg: 'Acceso denegado. Token no proporcionado.'
        });
    }
};

export default validateToken;