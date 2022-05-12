import express, {Request, Response} from "express"
import { v4 as uuidv4 } from "uuid"
import ejs from "ejs"

const app = express()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.render("index")
})

app.get("/api/generateId", (req: Request, res: Response) => {

  let date = Date.now()
    res.json({
        id : `${uuidv4()}-${date}`,
        time : (new Date(date)).toUTCString()
        
    })
} )


app.listen(port, () => console.log("Listening now"))