import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
        enum: {
            values: ["estudiante", "moderador"],
            message: "Rol no valido"
        },
        default: "estudiante"
    }
});

const User = mongoose.model("User", userSchema);

export default User;