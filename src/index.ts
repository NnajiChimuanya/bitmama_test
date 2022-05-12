import express, {Request, Response} from "express"
import { v4 as uuidv4 } from "uuid"
import mongoose from "mongoose"
import Id from "./model/Id"

const app = express()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())

try {
    mongoose.connect("mongodb+srv://bitmama:bitmama@bitmama.dohuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    console.log("Connected to the database")
} catch (error) {
    if(error) throw error
}


app.get("/", (req: Request, res: Response) => {
    res.render("index")
})

app.get("/api/generateId", async (req: Request, res: Response) => {

    let time = Date.now()
    let uuid = `${uuidv4()}-${time}`

    let newId = await new Id({
        _id : uuid,
        time : new Date().toUTCString()
    })

   newId.save()

   res.json(newId)  
} )

app.get("/api/getId/:id", async (req: Request, res: Response) => {
    const data = await Id.findOne({_id : req.params.id},{__v : 0})
    if(data) {
        res.json(data)
    } else {
        res.send("This Id doesn,t exist")
    }
})



app.listen(port, () => console.log("Listening now"))