import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    classroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    isModerator: {
        type: Boolean,
        default: false
    }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
