import mongoose, { Schema, model} from "mongoose"
import Iid from "../interface/id";

const idSchema = new Schema({
    _id: String,
    time: String
})

const Id = model<Iid>("Id", idSchema)

export default Id