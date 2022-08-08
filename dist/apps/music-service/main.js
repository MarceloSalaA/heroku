/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/music-service/src/app/models/artist.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtistMongo = void 0;
const mongoose_1 = __webpack_require__("mongoose");
const song_1 = __webpack_require__("./apps/music-service/src/app/models/song.ts");
const ArtistSchema = new mongoose_1.Schema({
    name: { type: String },
    image: { type: String },
    alias: { type: String },
    nationality: { type: String },
    songs: [{ type: song_1.SongSchema }],
});
exports.ArtistMongo = (0, mongoose_1.model)('Artist', ArtistSchema);


/***/ }),

/***/ "./apps/music-service/src/app/models/song.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SongMongo = exports.SongSchema = void 0;
const mongoose_1 = __webpack_require__("mongoose");
exports.SongSchema = new mongoose_1.Schema({
    image: { type: String },
    name: { type: String },
    publish_year: { type: String },
    url: { type: String },
});
exports.SongMongo = (0, mongoose_1.model)('Song', exports.SongSchema);


/***/ }),

/***/ "./apps/music-service/src/app/modules/artists/service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteArtistById = exports.updateArtistById = exports.createArtist = exports.getArtistById = exports.getArtists = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const artist_1 = __webpack_require__("./apps/music-service/src/app/models/artist.ts");
const song_1 = __webpack_require__("./apps/music-service/src/app/models/song.ts");
const getArtists = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const Artists = yield artist_1.ArtistMongo.find();
    return res.status(200).send(Artists);
});
exports.getArtists = getArtists;
const getArtistById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const Artist = yield artist_1.ArtistMongo.findById(new mongoose_1.Types.ObjectId(req.body._id));
    if (!Artist) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    return res.status(200).send(Artist);
});
exports.getArtistById = getArtistById;
const createArtist = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const tempArtist = new artist_1.ArtistMongo(req.body);
    for (let i = 0; i < req.body.songs.length; i++) {
        const song = yield song_1.SongMongo.findById(new mongoose_1.Types.ObjectId(req.body.songs[i]));
        if (!song) {
            return res
                .status(404)
                .send({ error: `Song ${req.body.songs[i]} does not exists` });
        }
        else {
            tempArtist.songs[i] = yield song_1.SongMongo.findById(new mongoose_1.Types.ObjectId(req.body.songs[i]));
        }
    }
    const Artist = new artist_1.ArtistMongo(tempArtist);
    try {
        yield Artist.save();
    }
    catch (error) {
        console.log(error);
    }
    return res.status(201).send(Artist);
});
exports.createArtist = createArtist;
const updateArtistById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield artist_1.ArtistMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    yield artist_1.ArtistMongo.findByIdAndUpdate(req.body._id, req.body);
    const Artist = yield artist_1.ArtistMongo.findById(req.body._id);
    return res.status(200).send(Artist);
});
exports.updateArtistById = updateArtistById;
const deleteArtistById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield artist_1.ArtistMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    const Artist = yield artist_1.ArtistMongo.findByIdAndDelete(req.body._id);
    return res.status(200).send(Artist);
});
exports.deleteArtistById = deleteArtistById;


/***/ }),

/***/ "./apps/music-service/src/app/modules/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/music-service/src/app/modules/songs/service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/music-service/src/app/modules/artists/service.ts"), exports);


/***/ }),

/***/ "./apps/music-service/src/app/modules/songs/service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deletesongById = exports.updatesongById = exports.createsong = exports.getsongById = exports.getsongs = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("mongoose");
const song_1 = __webpack_require__("./apps/music-service/src/app/models/song.ts");
const getsongs = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const songs = yield song_1.SongMongo.find();
    return res.status(200).send(songs);
});
exports.getsongs = getsongs;
const getsongById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const song = yield song_1.SongMongo.findById(new mongoose_1.Types.ObjectId(req.body._id));
    if (!song) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    return res.status(200).send(song);
});
exports.getsongById = getsongById;
const createsong = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const song = new song_1.SongMongo(req.body);
    yield song.save();
    return res.status(201).send(song);
});
exports.createsong = createsong;
const updatesongById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield song_1.SongMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    yield song_1.SongMongo.findByIdAndUpdate(req.body._id, req.body);
    const song = yield song_1.SongMongo.findById(req.body._id);
    return res.status(200).send(song);
});
exports.updatesongById = updatesongById;
const deletesongById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!(yield song_1.SongMongo.findById(new mongoose_1.Types.ObjectId(req.body._id)))) {
        return res.status(404).send({ error: 'Id does not exists' });
    }
    const song = yield song_1.SongMongo.findByIdAndDelete(req.body._id);
    return res.status(200).send(song);
});
exports.deletesongById = deletesongById;


/***/ }),

/***/ "./apps/music-service/src/app/routes/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__("express");
const index_1 = __webpack_require__("./apps/music-service/src/app/modules/index.ts");
const router = (0, express_1.Router)();
router.get('/songs', index_1.getsongs);
router.get('/song', index_1.getsongById);
router.post('/song', index_1.createsong);
router.patch('/song', index_1.updatesongById);
router.delete('/song', index_1.deletesongById);
router.get('/artists', index_1.getArtists);
router.get('/artist', index_1.getArtistById);
router.post('/artist', index_1.createArtist);
router.patch('/artist', index_1.updateArtistById);
router.delete('/artist', index_1.deleteArtistById);
exports["default"] = router;


/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

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
const routes_1 = __webpack_require__("./apps/music-service/src/app/routes/index.ts");
const cors = __webpack_require__("cors");
// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$cluster1.esmluzr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
console.log(`mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/music-local?retryWrites=true&w=majority`);
mongoose_1.default.connect(`mongodb+srv://apolo:4p0l0_pl4y@$cluster0.esmluzr.mongodb.net/music-local?retryWrites=true&w=majority`);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes_1.default);
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/songs`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map