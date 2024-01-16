"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log('Header Token:', headerToken);
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7);
            console.log('Bearer Token:', bearerToken);
            const decodedToken = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            console.log('Decoded Token:', decodedToken);
            // Resto del código...
        }
        catch (error) {
            console.error('Error verifying token:', error);
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    }
    else {
        console.log('Authorization header not provided.');
        res.status(401).json({
            msg: 'Acceso denegado. Token no proporcionado.'
        });
    }
};
exports.default = validateToken;
