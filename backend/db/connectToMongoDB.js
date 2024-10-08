import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Conectado exitosamente a la base de datos");
    } catch (error) {
        console.log("Error al conectarse con la base de datos", error.message);
    }
}

export default connectToMongoDB;