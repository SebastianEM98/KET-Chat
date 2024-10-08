import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
