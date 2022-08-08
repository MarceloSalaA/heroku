/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/authentication-service/src/app/models/user.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMongo = void 0;
const mongoose_1 = __webpack_require__("mongoose");
// export const UserMongo = model(
//   'User',
//   new Schema(
//     class UserSchema implements User {
//       _id: Types.ObjectId;
//       name: string;
//       last_name: string;
//       email: string;
//       password: string;
//     }
//   )
// );
const UserSchema = new mongoose_1.Schema({
    name: { require: true, type: String },
    last_name: { require: true, type: String },
    email: { require: true, type: String },
    password: { require: true, type: String },
});
exports.UserMongo = (0, mongoose_1.model)('User', UserSchema);


/***/ }),

/***/ "./apps/authentication-service/src/app/modules/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/authentication-service/src/app/modules/user/service.ts"), exports);


/***/ }),

/***/ "./apps/authentication-service/src/app/modules/user/service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const user_1 = __webpack_require__("./apps/authentication-service/src/app/models/user.ts");
const validateObject = ({ name, last_name, email, password }) => {
    name && last_name && email && password;
};
const getUsers = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.UserMongo.find();
    return res.status(200).send(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.UserMongo.findById(new mongoose_1.Types.ObjectId(req.body._id));
    if (!user) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    return res.status(200).send(user);
});
exports.getUserById = getUserById;
const createUser = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.UserMongo(req.body);
    yield user.save();
    // return res.status(400).send({ error: 'Missing attributes' });
    return res.status(201).send(user);
});
exports.createUser = createUser;
const updateUserById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_1.UserMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    yield user_1.UserMongo.findByIdAndUpdate(req.body._id, req.body);
    const user = yield user_1.UserMongo.findById(req.body._id);
    return res.status(200).send(user);
});
exports.updateUserById = updateUserById;
const deleteUserById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_1.UserMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    const user = yield user_1.UserMongo.findByIdAndDelete(req.body._id);
    return res.status(200).send(user);
});
exports.deleteUserById = deleteUserById;


/***/ }),

/***/ "./apps/authentication-service/src/app/routes/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__("express");
const modules_1 = __webpack_require__("./apps/authentication-service/src/app/modules/index.ts");
const router = (0, express_1.Router)();
router.get('/users', modules_1.getUsers);
router.get('/user', modules_1.getUserById);
router.post('/user', modules_1.createUser);
router.patch('/user', modules_1.updateUserById);
router.delete('/user', modules_1.deleteUserById);
exports["default"] = router;


/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const mongoose_1 = __webpack_require__("mongoose");
const routes_1 = __webpack_require__("./apps/authentication-service/src/app/routes/index.ts");
console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
mongoose_1.default.connect(`mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/authentications-local?retryWrites=true&w=majority`);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes_1.default);
const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/users`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map