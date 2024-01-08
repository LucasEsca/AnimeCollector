import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Guardamos usuario en la base de datos
        await User.create({
            username: username,
            password: hashedPassword,
            role: role || 'user' // Si no se proporciona, el rol predeterminado es 'user'
        });

        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrió un error',
            error
        });
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await User.findOne({ where: { username: username } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    username: username,
    role: user.role // Agrega el rol del usuario al token
}, process.env.SECRET_KEY || 'lucas1234');
   
   res.json(token);
}

export const updateUserRole = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const { role } = req.body;

    try {
        const updatedUser = await User.update(
            { role },
            { where: { id: userId } }
        );

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el rol del usuario',
            error,
        });
    }
};