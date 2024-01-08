"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime = void 0;
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
exports.Anime = connections_1.default.define('anime', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    }
});
