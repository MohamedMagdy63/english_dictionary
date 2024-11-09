import mongoose , {Connection} from 'mongoose'
let cashedConnection : Connection | null = null 

export async function connectToMongoDB () {
    if (cashedConnection){
        console.log('There is a connection already')
        return cashedConnection
    }

    try {
        const cnx = await mongoose.connect(process.env.MONGODB_URI!)

        cashedConnection = cnx.connection;

        console.log("New connection established")

        return cashedConnection
    }catch (error){
        console.log(error);
    }
}