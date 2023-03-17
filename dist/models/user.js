"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.User = connection_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(280),
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING(280),
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(280),
        allowNull: false
    },
    roleId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
