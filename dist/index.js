"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const mongoose_1 = __importDefault(require("mongoose"));
const Id_1 = __importDefault(require("./model/Id"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
try {
    mongoose_1.default.connect("mongodb+srv://bitmama:bitmama@bitmama.dohuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Connected to the database");
}
catch (error) {
    if (error)
        throw error;
}
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/api/generateId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let time = Date.now();
    let uuid = `${(0, uuid_1.v4)()}-${time}`;
    let newId = yield new Id_1.default({
        _id: uuid,
        time: new Date().toUTCString()
    });
    newId.save();
    res.json(newId);
}));
app.get("/api/getId/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Id_1.default.findOne({ _id: req.params.id }, { __v: 0 });
    if (data) {
        res.json(data);
    }
}));
app.listen(port, () => console.log("Listening now"));
