import  express  from "express"
import mongoose from "mongoose"
const app = express()
const port = 3000


const URI = 'mongodb+srv://harshraj1512:firstdata1@cluster0.oenyuou.mongodb.net/'

// connect to DB
try {
    mongoose.connect(URI);
    console.log("Connect to DB");
} catch (error) {
    console.log("Error: ", error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})