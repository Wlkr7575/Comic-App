import mongoose from 'mongoose'
const connection  = {}

async function dbConnect(){
    const uri = 'mongodb+srv://dbUser:node1234@cluster0.pzd9e.mongodb.net/rcomic?retryWrites=true&w=majority'
    const mongoDb = process.env.MONGO_URI || uri
    if(connection.isConnected){
        return
    }
    const db = await mongoose.connect(mongoDb,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected)
}
export default dbConnect