import { Document } from "mongoose"

interface Iid extends Document {
    _id : string,
    time : String
}

export default Iid