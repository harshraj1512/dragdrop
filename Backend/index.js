import  express  from "express"
import mongoose from "mongoose"
import cors from 'cors'
import SingleRouter from "./Routes/singlelayout.route.js"

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000


const URI = 'mongodb+srv://harshraj1512:firstdata1@cluster0.oenyuou.mongodb.net/dropAdmin'

// connect to DB
try {
    mongoose.connect(URI);
    console.log("Connect to DB");
} catch (error) {
    console.log("Error: ", error);
}

app.use('/api/single',SingleRouter );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})