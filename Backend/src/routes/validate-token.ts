import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    console.log('Header Token:', headerToken);

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7);
            console.log('Bearer Token:', bearerToken);

            const decodedToken: any = jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            console.log('Decoded Token:', decodedToken);

            // Resto del código...
        } catch (error) {
            console.error('Error verifying token:', error);
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    } else {
        console.log('Authorization header not provided.');
        res.status(401).json({
            msg: 'Acceso denegado. Token no proporcionado.'
        });
    }
};

export default validateToken;