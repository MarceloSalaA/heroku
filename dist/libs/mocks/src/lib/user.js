"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserArray = exports.UserMock = void 0;
const mongoose_1 = require("mongoose");
exports.UserMock = {
    _id: new mongoose_1.Types.ObjectId(),
    name: 'Paco',
    email: 'paco@mail.com',
    password: 'password123',
    last_name: 'Gutierrez',
};
exports.UserArray = [
    {
        _id: new mongoose_1.Types.ObjectId(),
        name: 'Marcelo',
        last_name: 'Sala',
        email: 'marcelo@mail.com',
        password: 'salas123',
    },
    {
        _id: new mongoose_1.Types.ObjectId(),
        name: 'Juan',
        last_name: '??',
        email: 'juan@mail.com',
        password: 'juan125',
    },
    {
        _id: new mongoose_1.Types.ObjectId(),
        name: 'Carlos',
        last_name: 'Alanis',
        email: 'carlos@mail.com',
        password: 'carlos901',
    },
];
//# sourceMappingURL=user.js.map