"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const idSchema = new mongoose_1.Schema({
    _id: String,
    time: String
});
const Id = (0, mongoose_1.model)("Id", idSchema);
exports.default = Id;
