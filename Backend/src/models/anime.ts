import { DataTypes } from 'sequelize';
import sequelize from '../db/connections';

export const Anime = sequelize.define('anime', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
});